import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import axios from "axios";
import { result } from "lodash";

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
      nick_name: "타노스",
      review_content: "최고최고!",
      review_score: 5,
    },
  ],
};

const getReviewDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://localhost:8888/review_list?_sort=id&_order=ASC")
      .then((result) => {
        dispatch(getReview(result.data));
      });
  };
};

const addReviewDB = (review) => {
  const { id, nick_name, review_content, review_score } = review;
  return function (dispatch, getState, { history }) {
    axios.post("http://localhost:8888/review_list", review).then((result) => {
      dispatch(getReviewDB());
    });
  };
};

const deleteReviewDB = (review) => {
  return function (dispatch, getState, { history }) {
    axios
      .delete(`http://localhost:8888/review_list/${review}`)
      .then((result) => {
        dispatch(getReviewDB());
      });
  };
};

const updateReviewDB = (review) => {
  return function (dispatch, getState, { history }) {
    const { id, nick_name, review_content, review_score } = review;
    axios
      .put(`http://localhost:8888/review_list/${id}`, {
        nick_name,
        review_content,
        review_score,
      })
      .then((result) => history.push("/hospitals/1"));
  };
};

export default handleActions(
  {
    [GET_REVIEW]: (state, action) => {
      return produce(state, (draft) => {
        draft.review_list = action.payload.review;
      });
    },
    [DELETE_REVIEW]: (state, action) => {
      return produce(state, (draft) => {
        draft.review_list = action.payload.review;
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
