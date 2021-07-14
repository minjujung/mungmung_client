import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import StarIcon from "@material-ui/icons/Star";

const SearchResult = ({ data }) => {
  return (
    <Container>
      {data.map((d) => (
        <Grid
          key={d.hospitalId}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={() => {
            history.push(`/hospitals/${d.hospitalId}`);
          }}
        >
          <img
            src={d.hospitalImageList && d.hospitalImageList[0].hospitalImageUrl}
            alt="hospital"
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "20px 20px 0 0",
            }}
          />
          <h3>{d.hospitalName}</h3>
          <Info>{d.hospitalContent}</Info>
          <H4>
            <StarIcon
              style={{ color: "#ECBA11", width: "20px", height: "20px" }}
            />{" "}
            {d.hospitalRate}{" "}
            <Numbers>총 {d.howManyReviews}명이 평가했습니다.</Numbers>
          </H4>
        </Grid>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 80px;
`;

const Grid = styled.div`
  display: flex;
  border: 0.1em outset #d3d3d3;
  flex-direction: column;
  margin: 20px auto;
  width: 80%;
  color: black;
  background-color: #ffffff;
  height: auto;
  border-radius: 20px;
  border: none;
  box-shadow: 5px 5px #e5e5e3;
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

const Info = styled.p`
  padding: 0 10px;
`;

export default SearchResult;
