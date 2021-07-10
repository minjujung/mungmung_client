import React from "react";
import styled from "styled-components";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { InputStyle, ThemeBtnColor } from "../common_css/style";

const ReviewWrite = () => {
  const [reviewScore, setReviewScore] = React.useState(5);
  const totalStarCount = 5;
  const starCount = reviewScore; //나중에 여기에 평점값 출력
  const notValuedStartCount = totalStarCount - starCount;
  return (
    <ReviewContainer>
      <ReviewStarBox>
        {[...Array(starCount)].map((n, index) => {
          return (
            <StarIcon
              style={{ color: "#ECBA11" }}
              onClick={() => setReviewScore(index + 1)}
            ></StarIcon>
          );
        })}
        {[...Array(notValuedStartCount)].map((n, index) => {
          return (
            <StarBorderIcon
              onClick={() => {
                setReviewScore(reviewScore + index + 1);
              }}
            ></StarBorderIcon>
          );
        })}
      </ReviewStarBox>
      <ReviewWriteBox>
        <ReviewInput placeholder="리뷰를 입력해주세요"></ReviewInput>
        <ReviewBtn>작성</ReviewBtn>
      </ReviewWriteBox>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  margin-bottom: 30px;
`;
const ReviewStarBox = styled.div``;
const ReviewWriteBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ReviewInput = styled.input`
  ${InputStyle}
  width:75%;
`;

const ReviewBtn = styled.div`
  ${ThemeBtnColor}
  width:23%
`;
export default ReviewWrite;
