import React from "react";
import styled from "styled-components";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { InputStyle, ThemeBtnColor } from "../common_css/style";
import { useRef } from "react";

const ReviewWrite = (props) => {
  const [currentReviewScore, setCurrentReviewScore] = React.useState(5);
  const { review, setReview, handleAddReview } = props;

  //비활성화 + 활성화된 모든 별 갯수
  const totalStarCount = 5;

  //활성화된 별 갯수
  const starCount = currentReviewScore; //나중에 여기에 평점값 출력

  //비활성화된 별 갯수
  const notValuedStartCount = totalStarCount - starCount;

  //   const [review, setReview] = React.useState({
  //     id: new Date(),
  //     nick_name: "나야나",
  //     review_content: "",
  //     review_score: 5,
  //   });

  const inputRef = useRef();
  const handleReviewScore = (score) => {
    setReview({
      ...review,
      review_score: score,
    });
  };

  const handleChangeReviewContent = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <ReviewContainer>
      <ReviewStarBox>
        {[...Array(starCount)].map((n, index) => {
          return (
            <StarIcon
              style={{ color: "#ECBA11" }}
              onClick={() => {
                setCurrentReviewScore(index + 1);
                handleReviewScore(index + 1);
              }}
            ></StarIcon>
          );
        })}
        {[...Array(notValuedStartCount)].map((n, index) => {
          return (
            <StarBorderIcon
              onClick={() => {
                setCurrentReviewScore(currentReviewScore + index + 1);
                handleReviewScore(currentReviewScore + index + 1);
              }}
            ></StarBorderIcon>
          );
        })}
      </ReviewStarBox>
      <ReviewWriteBox>
        <ReviewInput
          name="review_content"
          placeholder="리뷰를 입력해주세요"
          onChange={handleChangeReviewContent}
          ref={inputRef}
        ></ReviewInput>
        <ReviewBtn
          onClick={() => {
            handleAddReview(review);
            inputRef.current.value = "";
          }}
        >
          작성
        </ReviewBtn>
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
