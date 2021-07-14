import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

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
            style={{ width: "100%", height: "200px" }}
          />
          <h3>{d.hospitalName}</h3>
          <Info>{d.hospitalContent}</Info>
          <Rate>★ {d.hospitalRate}</Rate>
        </Grid>
      ))}
    </Container>
  );
};

const Container = styled.div``;

const Grid = styled.div`
  display: flex;
  border: 0.1em outset #d3d3d3;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  color: black;
  background-color: #ffffff;
  height: auto;
`;

const Info = styled.p`
  padding: 0 10px;
`;

const Rate = styled.h4`
  margin: 0;
`;
export default SearchResult;
