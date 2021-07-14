import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { PageTitle, InputStyle, ThemeBtnColor } from "../common_css/style";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import instance from "../shared/config";
import SearchResult from "../components/SearchResult";
const Search = () => {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);

  const [data, setData] = useState("");
  const keyword_list = [
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

  const search = (e) => {
    const keyword = e.target.textContent;
    const encode = encodeURIComponent(keyword);
    instance.get(`/hospitals/search?subject=${encode}`).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  return (
    <div>
      <Title>
        {!user_info || Object.keys(user_info).length === 0
          ? "땡땡이"
          : user_info.dogName}
        는 어디가 아픈가요?
      </Title>
      <SearchField>
        <Keywords>
          {keyword_list.map((keyword) => (
            <Keyword key={keyword} onClick={search}>
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
  background-color: yellowgreen;
  color: white;
  border-radius: 30px;
  width: 100px;
  font-family: "Poor Story", cursive;
  font-size: 15px;
`;

export default Search;
