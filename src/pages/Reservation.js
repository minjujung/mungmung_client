import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { PageTitle, InputStyle, ThemeBtnColor } from "../common_css/style";

import Schedule from "../components/Schedule";

const Reservation = (props) => {
  return (
    <Container>
      <Title>예약 페이지</Title>
      <InputContainer>
        <label htmlFor="dogName">반려견 이름</label>
        <Input
          id="dogName"
          type="text"
          placeholder="반려견 이름을 입력해주세요"
        />
        <Schedule />
        <TextContainer>
          <label htmlFor="request">요쳥사항</label>
          <Textarea
            id="request"
            placeholder="아픈곳을 적어주시거나 특별한 요청사항이 있으시면 말씀해주세용!"
            rows={6}
          />
        </TextContainer>
        <Button>예약하기</Button>
      </InputContainer>
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
  margin: 40px auto 30px auto;
  ${PageTitle}
`;

const InputContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
`;

const Input = styled.input`
  margin: 15px 0 35px 0;
  ${InputStyle}

  @media screen and (max-width: 320px) {
    margin: 15px 0 25px 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;

  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  font-size: 14px;
  font-family: "Poor Story", cursive;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 12px;
  border: 1px solid gray;
  margin: 15px 0;
`;

const Button = styled.div`
  margin: 10px 0;
  ${ThemeBtnColor}
`;

export default Reservation;
