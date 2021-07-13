import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import axios from "axios";
import { result } from "lodash";
import { getCookie } from "../../shared/Cookie";
import instance from "../../shared/config";

const GET_REVIEW = "GET_REVIEW";
const ADD_REVIEW = "ADD_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";
const UPDATE_REVIEW = "UPDATE_REVIEW";

const getReview = createAction(GET_REVIEW, (review) => ({ review }));
const addReview = createAction(ADD_REVIEW, (review) => ({ review }));
const deleteReview = createAction(DELETE_REVIEW, (review) => ({ review }));
const updateReview = createAction(UPDATE_REVIEW, (review) => ({ review }));

const initialState = {
  review_list: [
    {
      id: 1,
      dogName: "타노스",
      reviewContent: "최고최고!",
      hospitalRate: 5,
    },
  ],
};

const getReviewDB = () => {
  return function (dispatch, getState, { history }) {
    instance.get("/hospitals/1/reviews").then((result) => {
      dispatch(getReview(result.data));
    });
  };
};

const addReviewDB = (review) => {
  return function (dispatch, getState, { history }) {
    const token = getCookie("token");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    const { reviewContent, hospitalRate } = review;
    const new_review = {
      reviewContent,
      hospitalRate,
    };

    instance.post("/hospitals/1/reviews", new_review).then((result) => {
      // const user_info = getState().user.user;
      dispatch(getReviewDB());
      // dispatch(addReview({ ...new_review, userId: user_info.userId }));
    });
  };
};

const deleteReviewDB = (review_id) => {
  return function (dispatch, getState, { history }) {
    const token = getCookie();
    axios.defaults.headers.common["Authorization"] = `${token}`;
    instance.delete(`/hospitals/reviews/${review_id}`).then((result) => {
      console.log("asdasdas");
      dispatch(deleteReview(review_id));
    });
  };
};

const updateReviewDB = (review) => {
  return function (dispatch, getState, { history }) {
    const token = getCookie();
    axios.defaults.headers.common["Authorization"] = `${token}`;
    const { id, reviewContent, hospitalRate } = review;

    const params = {
      reviewContent,
      hospitalRate,
    };

    instance
      .put(`/hospitals/reviews/${id}`, params)
      .then((result) => history.goBack());
  };
};

export default handleActions(
  {
    [GET_REVIEW]: (state, action) => {
      return produce(state, (draft) => {
        draft.review_list = action.payload.review;
      });
    },
    [ADD_REVIEW]: (state, action) => {
      return produce(state, (draft) => {
        draft.review_list.unshift(action.payload.review);
      });
    },
    [DELETE_REVIEW]: (state, action) => {
      return produce(state, (draft) => {
        const copy_review_list = state.review_list;
        const new_review_list = copy_review_list.filter((review) => {
          return review.reviewId !== action.payload.review;
        });
        draft.review_list = new_review_list;
      });
    },
  },
  initialState
);

const actionCreators = {
  getReview,
  getReviewDB,
  addReviewDB,
  deleteReviewDB,
  updateReviewDB,
};

export { actionCreators };
