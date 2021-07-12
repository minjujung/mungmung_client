import React, { useEffect } from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import instance from "../shared/config";

const MainPage = () => {
  const hospital = {
    hospitalName: "병원이름",
    hospitalId: "병원 id",
    hospitalImage: "사진",
    hospitalContent: "소개",
    hospitalRate: "별점",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    instance.get("/hospitals").then((response) => console.log(response));
  }, []);

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
        <p>{hospital.hospitalName}</p>
        <p>{hospital.hospitalContent}</p>
        <p>{hospital.hospitalRate}</p>
      </Grid2>
      <Footer></Footer>
    </div>
  );
};

const Grid2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
  min-height: 120px;
  border-radius: 10px;
  padding: 10px;
  color: black;
  background-color: #eef2f3;
`;

export default MainPage;
