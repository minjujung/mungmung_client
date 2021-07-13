import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { PageTitle, InputStyle, ThemeBtnColor } from "../common_css/style";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import instance from "../shared/config";
const Search = () => {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const keyword_list = ["슬개골", "심장", "중성화"];

  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);

  const search = (e) => {
    const keyword = e.target.textContent;
    const encode = encodeURIComponent(keyword);
    instance
      .get(`/hospitals/search?subject=${encode}`)
      .then((response) => console.log(response));
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
        <InputField>
          <Input type="text" placeholder="내용을 입력해주세요"></Input>
          <Button>search</Button>
        </InputField>
        <Keywords>
          {keyword_list.map((keyword) => (
            <Keyword key={keyword} onClick={search}>
              {keyword}
            </Keyword>
          ))}
        </Keywords>
      </SearchField>
      <Footer />
    </div>
  );
};

const Title = styled.h1`
  text-align: center;
  ${PageTitle};
`;

const Input = styled.input`
  ${InputStyle}
`;

const Button = styled.button`
  margin-left: 15px;
  text-align: center;
  ${ThemeBtnColor}
`;

const SearchField = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
`;

const InputField = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Keywords = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Keyword = styled.button`
  border: none;
  background-color: yellowgreen;
  color: white;
  border-radius: 30px;
  width: 100px;
  padding: 10px;
`;

export default Search;
