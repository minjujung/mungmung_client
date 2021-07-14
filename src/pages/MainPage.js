import React, { useEffect } from "react";
import Footer from "../components/Footer";
import styled from "styled-components";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { actionCreators as userActions } from "../redux/modules/user";
import instance from "../shared/config";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as listActions } from "../redux/modules/list";

const MainPage = ({ props }) => {
  const dispatch = useDispatch();
  const hospital_list = useSelector((state) => state.list.hospital_list);

  console.log(hospital_list);

  React.useEffect(() => {
    dispatch(listActions.getHospitalDB());
  }, []);

  useEffect(() => {
    instance.get("/hospitals").then((response) => console.log(response));
  }, []);
  // const imgBoxCss = { width: "100%", height: "250px" };
  // const imgCss = { width: "100%", height: "100%" };

  // const imgList = [
  //   {
  //     img_url: "https://hyunjung.s3.ap-northeast-2.amazonaws.com/hospital.jpeg",
  //   },
  // ];

  return (
    <div> <ExitToAppIcon  style={{ fontSize: 45, float: "right" }}></ExitToAppIcon>
      <DIV> 
        {hospital_list.map((hospital, index) => (
          <Grid2>
            <img
              style={{ width: "200px", height: "150px" }}
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
  max-height: 500px;
  padding: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
//margin 값 초기화 해주기
const H3 = styled.h3`
  margin: 0;
  text-align: center;
`;

const H4 = styled.h4`
  margin: 0;
`;

const Grid2 = styled.div`
  overflow-y: scroll;
  display: flex;
  border: 0.1em outset #d3d3d3;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
  width: 80%;
  padding: 10px;
  color: black;
  background-color: #ffffff;
  height: auto;
`;

export default MainPage;
