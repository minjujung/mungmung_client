import React, { useEffect } from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { actionCreators as userActions } from "../redux/modules/user";
import instance from "../shared/config";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as listActions } from "../redux/modules/list";

const MainPage = (props) => {
  const dispatch = useDispatch();
  const hospital_list = useSelector((state) => state.list.hospital_list);

  console.log(hospital_list);

  React.useEffect(() => {
    dispatch(listActions.getHospitalDB());
  }, []);

  useEffect(() => {
    dispatch(userActions.loginCheckDB());
  }, []);
  const imgBoxCss = { width: "100%", height: "250px" };
  const imgCss = { width: "100%", height: "100%" };

  const imgList = [
    {
      img_url: "https://hyunjung.s3.ap-northeast-2.amazonaws.com/hospital.jpeg",
    },
  ];

  return (
    <div>
      <Grid2>
        <ExitToAppIcon
          onClick={() => {
            dispatch(userActions.logoutDB());
          }}
          style={{
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "30px",
            right: "20px",
            color: "gray",
          }}
        />

        {hospital_list.map((hospital, index) => (
          // <p>{hospital.hospitalImageSource}</p>
          <>
            <p>{hospital.hospitalName}</p>
            <p>{hospital.hospitalContent}</p>
            <p>{hospital.hospitalRate}</p>
          </>
        ))}
      </Grid2>
      <Footer></Footer>
    </div>
  );
};

const Grid2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
  width: 60%;
  padding: 10px;
  color: black;
  background-color: #eef2f3;
`;

export default MainPage;
