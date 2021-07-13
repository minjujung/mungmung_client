import React, { useState } from "react";
import styled from "styled-components";
import { InputStyle, PageTitle, ThemeBtnColor } from "../common_css/style";

import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <Container>
      <Title>로그인</Title>
      <InputContainer>
        <label htmlFor="id">아이디</label>
        <Input
          id="id"
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <label htmlFor="pw">비밀번호</label>
        <Input
          id="pw"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
      </InputContainer>
      <BtnContainer>
        <LoginBtn
          onClick={() => {
            dispatch(userActions.loginDB(id, pwd));
          }}
        >
          로그인 하기
        </LoginBtn>
        <SignupBtn
          onClick={() => {
            history.push("/signup");
          }}
        >
          앗 회원가입!
        </SignupBtn>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
`;

const Title = styled.h1`
  margin: 40px auto 30px auto;
  ${PageTitle}
`;
const Input = styled.input`
  margin: 10px 0 35px 0;
  ${InputStyle}

  @media screen and (max-width: 320px) {
    margin: 3px 0 25px 0;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 50px;
`;

const LoginBtn = styled.button`
  width: 250px;
  margin: 0px auto;
  ${ThemeBtnColor}
`;

const SignupBtn = styled.button`
  font-family: "Poor Story", cursive;
  font-weight: bold;
  font-size: 1em;
  background-color: white;
  border: none;
  margin-top: 20px;
`;

export default Login;
