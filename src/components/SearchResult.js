import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const SearchResult = ({ data }) => {
  return (
    <Container>
      {data.map((d) => (
        <div
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
            style={{ width: "200px", height: "150px" }}
          />
          <h3>{d.hospitalName}</h3>
          <p>{d.hospitalContent}</p>
          <p>{d.hospitalRate}</p>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div``;

export default SearchResult;
