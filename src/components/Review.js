import React, { useEffect } from "react";
import styled from "styled-components";
import ReviewWrite from "./ReviewWrite";
import UserReview from "./UserReview";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/review";

const Review = () => {
  const review_list = useSelector((state) => state.review.review_list);
  const user_info = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getReviewDB());
  }, []);

  const handleAddReview = (review) => {
    console.log(review);
    dispatch(actionCreators.addReviewDB(review));
  };

  const handleDeleteReview = (id) => {
    dispatch(actionCreators.deleteReviewDB(id));
  };
  return (
    <>
      <ReviewWrite handleAddReview={handleAddReview}></ReviewWrite>
      <ReviewContainer>
        {review_list?.map(({ reviewId, reviewContent, reviewRate }) => {
          return (
            <UserReview
              key={reviewId}
              id={reviewId}
              dogName={user_info.dogName}
              reviewContent={reviewContent}
              hospitalRate={reviewRate}
              handleDeleteReview={handleDeleteReview}
            ></UserReview>
          );
        })}
      </ReviewContainer>
    </>
  );
};

const ReviewContainer = styled.div`
  height: 35vh;
  overflow-y: scroll;
`;

export default Review;
