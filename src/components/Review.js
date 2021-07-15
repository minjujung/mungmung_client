import React, { useEffect } from "react";
import styled from "styled-components";
import ReviewWrite from "./ReviewWrite";
import UserReview from "./UserReview";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/review";
import { useParams } from "react-router-dom";

const Review = () => {
  const review_list = useSelector((state) => state.review.review_list);
  const user_info = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(actionCreators.getReviewDB(id));
  }, []);

  const handleAddReview = (review) => {
    dispatch(actionCreators.addReviewDB(id, review));
  };

  const handleDeleteReview = (id) => {
    dispatch(actionCreators.deleteReviewDB(id));
  };

  return (
    <>
      {user_info === null || Object.keys(user_info).length === 0 ? null : (
        <ReviewWrite handleAddReview={handleAddReview}></ReviewWrite>
      )}
      <ReviewContainer>
        {review_list.map(
          ({
            reviewId,
            reviewContent,
            hospitalRate,
            dogImage,
            modifiedAt,
            dogName,
          }) => {
            return (
              <UserReview
                key={reviewId}
                id={reviewId}
                dogImage={dogImage}
                dogName={dogName}
                reviewContent={reviewContent}
                hospitalRate={hospitalRate}
                modifiedAt={modifiedAt}
                handleDeleteReview={handleDeleteReview}
              ></UserReview>
            );
          }
        )}
        {review_list.length === 0 && <div>현재 작성된 리뷰가 없습니다.</div>}
      </ReviewContainer>
    </>
  );
};

const ReviewContainer = styled.div`
  height: auto;
  padding: 10px;
  margin: auto;
`;

export default Review;
