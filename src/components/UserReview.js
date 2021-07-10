import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styled from "styled-components";

import StarIcon from "@material-ui/icons/Star";

const UserReview = () => {
  return (
    <ReviewContainer>
      <ProfileBox>
        <AccountCircleIcon style={{ fontSize: "3.3rem" }}></AccountCircleIcon>
        <NickName>닉네임</NickName>
      </ProfileBox>
      <ReviewInfo>
        <StarAndControll>
          <StarBox>
            <StarIcon style={{ color: "#ECBA11" }}></StarIcon>
            <StarIcon style={{ color: "#ECBA11" }}></StarIcon>
            <StarIcon style={{ color: "#ECBA11" }}></StarIcon>
            <StarIcon style={{ color: "#ECBA11" }}></StarIcon>
            <StarIcon style={{ color: "#ECBA11" }}></StarIcon>
          </StarBox>
          <ControllBox>
            <span>수정 </span>
            <span>/</span>
            <span> 삭제</span>
          </ControllBox>
        </StarAndControll>
        <Content>
          여기 병원 너무 좋습니다!! 완전 강추해요여기 병원 너무 좋습니다!! 완전
          강추해요 여기 병원 너무 좋습니다!! 완전 강추해요 여기 병원 너무
          좋습니다!! 완전 강추해요
        </Content>
      </ReviewInfo>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  justify-content: space-between;
  align-items: center;
`;

const NickName = styled.div`
  margin-top: 3px;
`;

const ReviewInfo = styled.div`
  width: 75%;
`;

const StarAndControll = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StarBox = styled.div``;
const ControllBox = styled.div``;
const Content = styled.div``;

export default UserReview;
