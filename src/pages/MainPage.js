import React, { useEffect } from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";

import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as listActions } from "../redux/modules/list";

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
      <DIV>
        {hospital_list.map((hospital, index) => (
          <Grid2
            key={hospital.hospitalId}
            onClick={() => {
              history.push(`/hospitals/${hospital.hospitalId}`);
            }}
          >
            <img
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "20px 20px 0 0",
              }}
              src={
                hospital.hospitalImageList &&
                hospital.hospitalImageList[0]?.hospitalImageUrl
              }
              alt="hospital"
            ></img>
            <H3>{hospital.hospitalName}</H3>
            <p
              style={{
                fontSize: "17px",
                margin: "10px auto",
              }}
            >
              {hospital.hospitalContent}
            </p>
            <H4>
              <StarIcon
                style={{ color: "#ECBA11", width: "20px", height: "20px" }}
              />{" "}
              {Number.parseFloat(hospital.hospitalRate).toFixed(1)}{" "}
              <Numbers>총 {hospital.howManyReviews}명이 평가했습니다.</Numbers>
            </H4>
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
  margin: 10px auto;
  text-align: center;
`;

const H4 = styled.h4`
  display: flex;
  align-items: center;
  margin: 0;
  margin-left: 10px;
`;

const Numbers = styled.span`
  font-size: 15px;
  font-weight: 300;
  margin: 0 10px;
`;

const Grid2 = styled.div`
  display: flex;
  border: 0.1em outset #d3d3d3;
  flex-direction: column;
  margin: 20px auto;
  width: 100%;
  color: black;
  background-color: #ffffff;
  height: auto;
  border-radius: 20px;
  border: none;
  box-shadow: 5px 5px #e5e5e3;
`;

export default MainPage;
