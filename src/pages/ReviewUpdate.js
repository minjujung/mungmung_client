import React from "react";
import ReviewWrite from "../components/ReviewWrite";
import { actionCreators } from "../redux/modules/review";
import { useDispatch } from "react-redux";

const ReviewUpdate = ({ match }) => {
  const dispatch = useDispatch();
  const handleUpdateReview = (id, nick_name, review_content, review_score) => {
    const review = { id, nick_name, review_content, review_score };
    dispatch(actionCreators.updateReviewDB(review));
  };

  return (
    <div style={{ padding: "15px" }}>
      <ReviewWrite
        handleUpdateReview={handleUpdateReview}
        update_id={match.params.id}
        type="update"
      ></ReviewWrite>
    </div>
  );
};

export default ReviewUpdate;
