import React from "react";
import styled from "styled-components";

import { PageTitle } from "../common_css/style";
import Footer from "../components/Footer";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';

import { history } from "../redux/configureStore";

const MyPage = (props) => {
  const reservation = {
    hospitalId : "병원 id",
    hospitalName: "병원이름",
    reservationDate : "예약시간",
    reservationDetail : "요청사항",
    };

  return (
    <div>
      <Title>마이페이지</Title>
      <Grid is flex width="auto">
        <PhotoCameraIcon style={{ fontSize: 40 }}></PhotoCameraIcon>
        <AccountCircleTwoToneIcon style={{ fontSize: 150 }}></AccountCircleTwoToneIcon>
        <CheckCircleIcon style={{ fontSize: 40 }}></CheckCircleIcon>
      </Grid> 
      <Name>삼억이</Name>
      <Text bold>예약내역</Text>
      <Grid2>
        <p>{reservation.hospitalName}</p>
        <p>{reservation.reservationDate}</p>
        <p>{reservation.reservationDetail}</p>
      </Grid2>
      <Footer />
    </div>
  );
};

const Title = styled.h1`
  display: flex;
  justify-content: center;
  ${PageTitle}
`;

const Grid = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  padding: 10px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Text = styled.div`
  padding: 15px;
  font-size: 1.3em;
  display: flex;
  align-items: flex-start;
  margin-left: 30px;
  font-weight: bold;
`;

const Grid2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 60%;
  color: black;
  background-color: #eef2f3;
`;

export default MyPage;
