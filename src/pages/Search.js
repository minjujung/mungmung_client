import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { PageTitle, InputStyle, ThemeBtnColor } from "../common_css/style";
import searchLogo from "../image/logo3.jpeg";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { LogoStyle } from "../common_css/style";
import instance from "../shared/config";
import SearchResult from "../components/SearchResult";
const Search = () => {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);

  const [data, setData] = useState("");
  const [btnBg, setBtnBg] = useState("");
  const keyword_list = [
    // {
    //   id: 0, subject: "슬개골"
    // },
    // const keyword_list = [{
    //   id: 1, subject: "심장"
    // },
    // const keyword_list = [{
    //   id: 2, subject: ""
    // },
    // const keyword_list = [{
    //   id: 3, subject: "슬개골"
    // },
    // const keyword_list = [{
    //   id: 4, subject: "슬개골"
    // },
    // const keyword_list = [{
    //   id: 5, subject: "슬개골"
    // },
    "슬개골",
    "심장",
    "중성화",
    "예방접종",
    "내과",
    "외과",
    "치과",
    "24시",
    "호흡기",
  ];

  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

  const changeColor = (e, idx) => {
    e.preventDefault();
    setBtnBg(idx);
  };

  const search = (e, idx) => {
    changeColor(e, idx);
    const keyword = e.target.textContent;
    const encode = encodeURIComponent(keyword);
    instance.get(`/hospitals/search?subject=${encode}`).then((response) => {
      setData(response.data);
    });
  };

  return (
    <div>
      <Title>
        {" "}
        <Logo src={searchLogo} />
        {!user_info || Object.keys(user_info).length === 0
          ? "땡땡이"
          : user_info.dogName}
        (이)는 <br />
        어디가 아픈가요?
      </Title>
      <SearchField>
        <Keywords>
          {keyword_list.map((keyword, idx) => (
            <Keyword
              key={keyword}
              onClick={(e) => search(e, idx)}
              color={btnBg === idx ? true : false}
            >
              {keyword}
            </Keyword>
          ))}
        </Keywords>
      </SearchField>
      {data ? (
        <SearchResult data={data} />
      ) : (
        <p style={{ textAlign: "center" }}> 키워드를 눌려보세요!</p>
      )}
      <Footer />
    </div>
  );
};

const Logo = styled.img`
  ${LogoStyle};
`;

const Title = styled.h1`
  text-align: center;
  ${PageTitle};
`;

const SearchField = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const Keywords = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-auto-rows: 40px;
  gap: 10px;
`;

const Keyword = styled.button`
  border: none;
  background-color: ${(props) => (props.color ? "yellowgreen" : "grey")};
  color: white;
  border-radius: 10px;
  width: 100px;
  font-family: "Poor Story", cursive;
  font-size: 15px;
  font-weight: bold;
`;

export default Search;
