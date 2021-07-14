import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { PageTitle } from "../common_css/style";
import Footer from "../components/Footer";

import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import ImageUpload from "../components/ImageUpload";

const MyPage = (props) => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation.list);
  const user_info = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user_info) {
      window.alert("로그인이 필요합니다!");
      history.replace("/login");
    }
    dispatch(userActions.loginCheckDB());
  }, []);
  return (
    <div>
      <Title>마이페이지</Title>
      <ImageUpload />

      <Name>{user_info.dogName}</Name>
      <Text bold>예약내역</Text>

      <RevContainer>
        {reservations.map((r, idx) => (
          <Grid2
            key={r.reservationId}
            onClick={() => history.push(`/hospitals/${r.hospitalId}`)}
          >
            <Hospital>{r.hospitalName}</Hospital>
            <Date>{r.reservationDate}</Date>
            <Detail>{r.reservationDetail}</Detail>
          </Grid2>
        ))}
      </RevContainer>

      <Footer />
    </div>
  );
};

const Title = styled.h1`
  display: flex;
  justify-content: center;
  ${PageTitle}
`;

const Name = styled.div`
  padding: 10px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const Text = styled.div`
  padding: 15px;
  font-size: 1.3em;
  display: flex;
  align-items: flex-start;
  margin-left: 30px;
  font-weight: bold;
`;

const Grid2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 75%;
  height: 90px;
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(250, 250, 250);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Hospital = styled.p`
  margin: 5px 0;
  font-weight: bold;
  font-size: 18px;
`;
const Date = styled.p`
  margin: 5px 0;
  color: grey;
`;
const Detail = styled.p`
  margin: 5px 0;
`;

const RevContainer = styled.div`
  height: 40vh;
  overflow-y: scroll;
`;

export default MyPage;
