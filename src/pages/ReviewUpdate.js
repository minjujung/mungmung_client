import React from "react";
import ReviewWrite from "../components/ReviewWrite";
import { actionCreators } from "../redux/modules/review";
import { useDispatch } from "react-redux";

const ReviewUpdate = ({ match }) => {
  const dispatch = useDispatch();
  const handleUpdateReview = (id, reviewContent, hospitalRate) => {
    const review = { id, reviewContent, hospitalRate };
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
