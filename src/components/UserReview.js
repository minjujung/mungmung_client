import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styled from "styled-components";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { useHistory } from "react-router-dom";
import ReviewWrite from "./ReviewWrite";
const UserReview = ({
  id,
  nick_name,
  review_content,
  review_score,
  handleDeleteReview,
}) => {
  //임시 닉네임임, 리뷰 닉네임이 이거랑 다르면 수정 / 삭제 비노출
  const my_nick_name = "나야나";

  const history = useHistory();
  //비활성화 + 활성화된 모든 별 갯수
  const totalStarCount = 5;

  //활성화된 별 갯수
  const starCount = review_score; //나중에 여기에 평점값 출력

  //비활성화된 별 갯수
  const notValuedStartCount = totalStarCount - starCount;

  return (
    <>
      <ReviewContainer>
        <ProfileBox>
          <AccountCircleIcon style={{ fontSize: "3.3rem" }}></AccountCircleIcon>
          <NickName>{nick_name}</NickName>
        </ProfileBox>
        <ReviewInfo>
          <StarAndControll>
            <StarBox>
              {[...Array(starCount)].map((n, index) => {
                return <StarIcon style={{ color: "#ECBA11" }}></StarIcon>;
              })}
              {[...Array(notValuedStartCount)].map((n, index) => {
                return <StarBorderIcon onClick={() => {}}></StarBorderIcon>;
              })}
            </StarBox>
            {my_nick_name === nick_name && (
              <ControllBox>
                <span
                  onClick={() =>
                    history.push({
                      pathname: `/review/update/${id}`,
                    })
                  }
                >
                  수정{" "}
                </span>
                <span>/</span>
                <span onClick={() => handleDeleteReview(id)}> 삭제</span>
              </ControllBox>
            )}
          </StarAndControll>
          <Content>{review_content}</Content>
        </ReviewInfo>
      </ReviewContainer>
    </>
  );
};

const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
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
