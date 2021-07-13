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
      {review_list.map(({ id, nick_name, review_content, review_score }) => {
        return (
          <UserReview
            key={id}
            id={id}
            nick_name={nick_name}
            review_content={review_content}
            review_score={review_score}
            handleDeleteReview={handleDeleteReview}
          ></UserReview>
        );
      })}
    </>
  );
};

export default Review;
