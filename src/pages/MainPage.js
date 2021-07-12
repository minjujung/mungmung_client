import React from "react";
import Footer from "../components/Footer";
import styled from "styled-components";

import { history } from "../redux/configureStore";

const MainPage = (props) => {
  const hospital = {
    hospitalName: "병원이름",
    hospitalId: "병원 id",
    hospitalContent: "소개",
    hospitalRate: "별점",
  };

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
        {imgList.map(({ img_url }, index) => {
          return (
            <div key={index} style={imgBoxCss}>
              <img style={imgCss} src={img_url}></img>
            </div>
          );
        })}
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
  margin-top: 10px;
  width: 60%;
  padding: 10px;
  color: black;
  background-color: #eef2f3;
`;

export default MainPage;
