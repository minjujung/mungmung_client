import React from "react";
import Footer from "../components/Footer";
import styled from "styled-components";

const MainPage = () => {
  const hospital = {
    hospitalName: "병원이름",
    hospitalId: "병원 id",
    hospitalImage: "사진",
    hospitalContent: "소개",
    hospitalRate: "별점",
  };

  return (
    <div>
      <Grid2>
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
