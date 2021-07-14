import React, { useEffect } from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as listActions } from "../redux/modules/list";
import { getCookie } from "../shared/cookie";

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
      <Grid2>
        <ExitToAppIcon
          onClick={() => {
            dispatch(userActions.logoutDB());
            window.alert("로그아웃이 완료되었습니다!");
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

        {hospital_list.map((hospital) => (
          // <p>{hospital.hospitalImageSource}</p>
          <>
            <p
              onClick={() => {
                history.push(`/hospitals/${hospital.hospitalId}`);
              }}
            >
              {hospital.hospitalName}
            </p>
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
