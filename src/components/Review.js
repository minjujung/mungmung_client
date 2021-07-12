import React from "react";
import ReviewWrite from "./ReviewWrite";
import UserReview from "./UserReview";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/review";
import { useEffect } from "react";
const Review = () => {
  const review_list = useSelector((state) => state.review.review_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getReviewDB());
  }, []);

  const handleAddReview = (review) => {
    dispatch(actionCreators.addReviewDB(review));
  };

  const handleDeleteReview = (id) => {
    dispatch(actionCreators.deleteReviewDB(id));
  };
  return (
    <>
      <ReviewWrite handleAddReview={handleAddReview}></ReviewWrite>
      {review_list.map(({ id, dogName, reviewContent, hospitalRate }) => {
        return (
          <UserReview
            key={id}
            id={id}
            dogName={dogName}
            reviewContent={reviewContent}
            hospitalRate={hospitalRate}
            handleDeleteReview={handleDeleteReview}
          ></UserReview>
        );
      })}
    </>
  );
};

export default Review;
