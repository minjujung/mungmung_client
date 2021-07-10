import React from "react";
import ReviewWrite from "./ReviewWrite";
import UserReview from "./UserReview";

const Review = () => {
  const [review, setReview] = React.useState({
    id: new Date(),
    nick_name: "나야나",
    review_content: "",
    review_score: 5,
  });

  const [review_list, setReviewList] = React.useState([
    {
      id: 1,
      nick_name: "타노스",
      review_content: "최고최고!",
      review_score: 5,
    },
    {
      id: 2,
      nick_name: "스파이더맨",
      review_content: "걍그랬ㅇ어여!",
      review_score: 3,
    },
    {
      id: 3,
      nick_name: "최강자",
      review_content: "ㄹㅇ최악!",
      review_score: 1,
    },
  ]);

  const handleAddReview = (review) => {
    setReviewList([review, ...review_list]);
  };

  const handleDeleteReview = (id) => {
    const filtered_review_list = review_list.filter((review) => {
      return review.id !== id;
    });

    setReviewList(filtered_review_list);
  };
  return (
    <>
      <ReviewWrite
        review={review}
        setReview={setReview}
        handleAddReview={handleAddReview}
      ></ReviewWrite>
      {review_list.map(({ id, nick_name, review_content, review_score }) => {
        return (
          <UserReview
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
