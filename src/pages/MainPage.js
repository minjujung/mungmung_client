import React from "react";
import Footer from "../components/Footer";
import styled from "styled-components";

import { getSearch } from "../redux/modules/search";
import { history } from "../redux/configureStore";

const MainPage = (props) => {
  const hospital = {
    hospitalName: "멍멍병원",
    hospitalId: "병원 id",
    hospitalContent: "여기 무지 좋아용",
    hospitalRate: "4.5점",
  };

  const imgBoxCss = { width: "100%", height: "250px" };
  const imgCss = { width: "100%", height: "100%" };

  const imgList = [
    {
      img_url:
        "https://hyunjung.s3.ap-northeast-2.amazonaws.com/hospital.jpeg",
    },
]

  return (
    <div>
      <Grid2>
      {imgList.map(({ img_url }) => {
          return (
              <div style={imgBoxCss}>
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
