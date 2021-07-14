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
    // dispatch(actionCreators.getReviewDB(id));
    dispatch(actionCreators.deleteReviewDB(id));
  };
  return (
    <>
      {Object.keys(user_info).length === 0 || (
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
      </ReviewContainer>
    </>
  );
};

const ReviewContainer = styled.div`
  height: 60vh;
  overflow-y: scroll;
`;

export default Review;
