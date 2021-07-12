import React, { useState } from "react";
import styled from "styled-components";

import { PageTitle } from "../common_css/style";
import Footer from "../components/Footer";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddToPhotosTwoToneIcon from '@material-ui/icons/AddToPhotosTwoTone';
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";

const MyPage = (props) => {
  //가짜 데이터 생성
  const dogName = [
    {
      dogName : "루디",
    },
  ]

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
        <AddToPhotosTwoToneIcon style={{ color: "lightgray", fontSize: 150 }}/>
        <CheckCircleIcon style={{ fontSize: 40 }} type="button" onClick={null}></CheckCircleIcon>
      </Grid> 
      <input type="file" style={{ fontSize: 10, display:"flex", margin:"auto"}} onChange={null}/>
      <Name><b>{dogName[0].dogName}</b></Name>
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
  width: 70%;
  color: black;
  background-color: #eef2f3;
`;

export default MyPage;
