import React from "react";
import styled from "styled-components";

import { PageTitle } from "../common_css/style";
import Footer from "../components/Footer";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";

const MyPage = (props) => {
  return (
    <div>
      <Title>마이페이지</Title>
      <Grid>
        <PhotoCameraIcon style={{ fontSize: 40 }}></PhotoCameraIcon>
        <AccountCircleTwoToneIcon
          style={{ fontSize: 150 }}
        ></AccountCircleTwoToneIcon>
        <CheckCircleIcon style={{ fontSize: 40 }}></CheckCircleIcon>
      </Grid>
      <Name>삼억이</Name>
      <Text bold>예약내역</Text>
      <Grid2></Grid2>
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
  padding: 20px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Text = styled.div`
  padding: 25px;
  font-size: 1.3em;
  display: flex;
  align-items: flex-start;
  margin-left: 30px;
  font-weight: bold;
`;

const Grid2 = styled.div`
  display: flex;
  margin: auto;
  width: 70%;
  min-height: 120px;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  background-color: #eef2f3;
`;

// const Profile = styled.div`
//   display: flex;
//   width: 90px;
//   height: 90px;
//   border-radius: 50px;
//   color: #fff;
//   background-color: #eef2f3;
// `;

export default MyPage;
