import React from "react";
import styled from "styled-components";
import { PageTitle, NormalBtnColor, ThemeBtnColor } from "../common_css/style";

import { history } from "../redux/configureStore";

const Start = (props) => {
  return (
    <Container>
      <Title>아프지멍</Title>
      <SubTitle>반려견 병원 예약 플랫폼</SubTitle>

      <Logo></Logo>
      <MainBtn
        onClick={() => {
          history.push("/");
        }}
      >
        그냥 둘러볼래요!
      </MainBtn>
      <LoginBtn
        onClick={() => {
          history.push("/login");
        }}
      >
        로그인 하러가기
      </LoginBtn>
      <SignupBtn
        onClick={() => {
          history.push("/signup");
        }}
      >
        회원가입
      </SignupBtn>
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

const Title = styled.h1`
  margin: 40px auto 0px auto;
  ${PageTitle};
`;

const SubTitle = styled.h3`
  margin: 20px auto 0px auto;
`;

const Logo = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightgray;
  border-radius: 50%;
  margin: 80px auto;
`;

const MainBtn = styled.button`
  width: 250px;
  margin: 0 auto 30px auto;
  ${NormalBtnColor}
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

export default Start;
