import React from 'react'
import Footer from "../components/Footer";
import styled from 'styled-components';

const MainPage = () => {
    return (
        <div>
            <Grid2></Grid2>
            <Footer></Footer>
        </div>
    )
}

const Grid2 = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 53px;
  width: 70vw;
  min-height: 120px;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  background-color: #eef2f3;
`;

export default MainPage
