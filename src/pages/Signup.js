import React, { useState } from "react";
import styled from "styled-components";
import { InputStyle, PageTitle, ThemeBtnColor } from "../common_css/style";

import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
  //userName, dogName, password, confirmPassword
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [dog, setDog] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");

  return (
    <Container>
      <Title>회원 가입</Title>
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
        <label htmlFor="dogName">반려견 이름</label>
        <Input
          id="dogName"
          type="text"
          placeholder="반려견 이름을 입력해주세요"
          value={dog}
          onChange={(e) => {
            setDog(e.target.value);
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
        <label htmlFor="pwCheck">비밀번호 체크</label>
        <Input
          id="pwCheck"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          value={pwdCheck}
          onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
        />
      </InputContainer>
      <BtnContainer>
        <SignupBtn
          onClick={() => {
            dispatch(userActions.signupDB(id, dog, pwd, pwdCheck));
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
