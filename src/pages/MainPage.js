import React, { useEffect } from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as listActions } from "../redux/modules/list";
import { getCookie } from "../shared/Cookie";

const MainPage = (props) => {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const hospital_list = useSelector((state) => state.list.hospital_list);

  console.log(hospital_list);

  useEffect(() => {
    dispatch(userActions.loginCheckDB());
    dispatch(listActions.getHospitalsDB());
  }, []);

  return (
    <div>
      {" "}
      <ExitToAppIcon
        onClick={() => {
          dispatch(userActions.logoutDB());
          window.alert("로그아웃이 완료되었습니다!");
        }}
        style={{
          fontSize: 40,
          position: "absolute",
          top: "15px",
          right: "0px",
        }}
      ></ExitToAppIcon>
      <DIV>
        {hospital_list.map((hospital, index) => (
          <Grid2
            key={hospital.hospitalId}
            onClick={() => {
              history.push(`/hospitals/${hospital.hospitalId}`);
            }}
          >
            <img
              style={{ width: "100%", height: "200px" }}
              src={
                hospital.hospitalImageList &&
                hospital.hospitalImageList[0].hospitalImageUrl
              }
              alt="hospital"
            ></img>
            <H3>{hospital.hospitalName}</H3>
            <p
              style={{
                fontSize: "13px",
              }}
            >
              {hospital.hospitalContent}
            </p>
            <H4>★ {hospital.hospitalRate}</H4>
          </Grid2>
        ))}
      </DIV>
      <Footer></Footer>
    </div>
  );
};

const DIV = styled.div`
  overflow-y: scroll;
  height: 80vh;
  padding: 10px;
  margin: auto;
`;
//margin 값 초기화 해주기
const H3 = styled.h3`
  margin: 0;
  text-align: center;
`;

const H4 = styled.h4`
  margin: 0;
  margin-left: 10px;
`;

const Grid2 = styled.div`
  overflow-y: scroll;
  display: flex;
  border: 0.1em outset #d3d3d3;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
  width: 80%;
  color: black;
  background-color: #ffffff;
  height: auto;
  border-radius: 20px;
  border:none;
  box-shadow: 5px 5px #E5E5E3;
`;

export default MainPage;
