import React from "react";
import styled from "styled-components";
import { InputStyle, PageTitle, ThemeBtnColor } from "../common_css/style";

import { history } from "../redux/configureStore";

const Signup = (props) => {
  return (
    <Container>
      <Title>회원 가입</Title>
      <InputContainer>
        <label htmlFor="id">아이디</label>
        <Input id="id" type="text" placeholder="아이디를 입력해주세요" />
        <label htmlFor="dogName">반려견 이름</label>
        <Input
          id="dogName"
          type="text"
          placeholder="반려견 이름을 입력해주세요"
        />
        <label htmlFor="pw">비밀번호</label>
        <Input id="pw" type="text" placeholder="비밀번호를 입력해주세요" />
        <label htmlFor="pwCheck">비밀번호 체크</label>
        <Input
          id="pwCheck"
          type="text"
          placeholder="비밀번호를 다시 입력해주세요"
        />
      </InputContainer>
      <BtnContainer>
        <SignupBtn
          onClick={() => {
            history.push("/");
          }}
        >
          회원가입 하기
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

const SignupBtn = styled.button`
  width: 250px;
  margin: 0 auto;
  ${ThemeBtnColor}
`;

export default Signup;
