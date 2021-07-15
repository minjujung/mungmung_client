import React, { useState, useEffect } from "react";
import { ThemeBtnColor } from "../common_css/style";

import styled from "styled-components";

import { PageTitle } from "../common_css/style";
import Footer from "../components/Footer";

import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as reservationActions } from "../redux/modules/reservation";

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
    dispatch(reservationActions.getReservationDB());
  }, []);
  return (
    <>
      <div>
        <Title>마이페이지</Title>
        <ImageUpload />

        <Name>{user_info.dogName}</Name>
        <LogoutBtn
          onClick={() => {
            dispatch(userActions.logoutDB());
            window.alert("로그아웃이 완료되었습니다!");
          }}
        >
          로그아웃
        </LogoutBtn>
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
    </>
  );
};

const Title = styled.h1`
  text-align: center;
  ${PageTitle};
`;

const Name = styled.div`
  padding: 5px 10px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const LogoutBtn = styled.button`
  display: block;
  margin: 0px auto;
  border: none;
  padding: 8px;
  background-color: grey;
  color: white;
  font-family: "Poor Story", cursive;
  border-radius: 8px;
`;

const Text = styled.div`
  padding: 0 15px 10px 15px;
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
  height: auto;
  line-height: 30px;
`;

export default MyPage;
