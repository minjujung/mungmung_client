import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { PageTitle } from "../common_css/style";
import Footer from "../components/Footer";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddToPhotosTwoToneIcon from '@material-ui/icons/AddToPhotosTwoTone';
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";

import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";

const MyPage = (props) => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation.list);
  const user_info = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);
  return (
    <div>
      <Title>마이페이지</Title>
      <Grid>
        <PhotoCameraIcon style={{ fontSize: 40 }}></PhotoCameraIcon>
        {/* <AccountCircleTwoToneIcon
          style={{ fontSize: 150 }}
        ></AccountCircleTwoToneIcon> */}
        <img
          src={`${user_info.dogImage}`}
          style={{ width: "100px", height: "100px" }}
          alt="dog"
        />
        <CheckCircleIcon style={{ fontSize: 40 }}></CheckCircleIcon>
      </Grid>
      <Name>{user_info.dogName}</Name>
      <Text bold>예약내역</Text>

      <RevContainer>
        {reservations.map((r, idx) => (
          <Grid2>
            <p>{r.hospitalId}</p>
            <p>{r.reservationDate}</p>
            <p>{r.reservationDetail}</p>
          </Grid2>
        ))}
      </RevContainer>

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
  min-height: 120px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid grey;
`;

const RevContainer = styled.div`
  height: 40vh;
  overflow-y: scroll;
`;

export default MyPage;
