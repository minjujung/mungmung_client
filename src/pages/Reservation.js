import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { PageTitle, InputStyle, ThemeBtnColor } from "../common_css/style";
import Schedule from "../components/Schedule";

import { useDispatch } from "react-redux";
import { actionCreators as reservationActions } from "../redux/modules/reservation";
import { history } from "../redux/configureStore";

const Reservation = (props) => {
  const dispatch = useDispatch();

  const [dogName, setDogName] = useState("");
  const [schedule, setSchedule] = useState("");
  const [request, setRequest] = useState("");

  const {
    history: {
      location: {
        state: { id },
      },
    },
  } = props;

  const reservate = () => {
    if (!schedule) {
      window.alert("저장 버튼을 눌려주세요!");
      return;
    }
    dispatch(
      reservationActions.addReservationDB(id, dogName, schedule, request)
    );
  };

  return (
    <Container>
      <ArrowBackIosIcon
        style={{
          width: "30px",
          height: "30px",
          position: "absolute",
          top: "30px",
          left: "20px",
          color: "gray",
        }}
        onClick={() => {
          history.goBack();
        }}
      />
      <Title>예약 페이지</Title>
      <InputContainer>
        <label htmlFor="dogName">반려견 이름</label>
        <Input
          id="dogName"
          value={dogName}
          type="text"
          placeholder="반려견 이름을 입력해주세요"
          onChange={(e) => setDogName(e.target.value)}
        />
        <Schedule setSchedule={setSchedule} />
        <TextContainer>
          <label htmlFor="request">요쳥사항</label>
          <Textarea
            id="request"
            value={request}
            placeholder="아픈곳을 적어주시거나 특별한 요청사항이 있으시면 말씀해주세용!"
            rows={6}
            onChange={(e) => setRequest(e.target.value)}
          />
        </TextContainer>
        <Button onClick={reservate}>예약하기</Button>
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

const Header = styled.div`
  display: flex;
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
