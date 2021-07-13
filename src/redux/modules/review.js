import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import axios from "axios";
import { result } from "lodash";
import { getCookie } from "../../shared/Cookie";

const GET_REVIEW = "GET_REVIEW";
const ADD_REVIEW = "ADD_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";
const UPDATE_REVIEW = "UPDATE_REVIEW";

const getReview = createAction(GET_REVIEW, (review) => ({ review }));
const addReview = createAction(ADD_REVIEW, (review) => ({ review }));
const deleteReview = createAction(DELETE_REVIEW, (review) => ({ review }));
const updateReview = createAction(UPDATE_REVIEW, (review) => ({ review }));

const serverIP = "http://52.79.234.172";
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
    axios.get(serverIP + "/hospitals/1/reviews").then((result) => {
      dispatch(getReview(result.data));
    });
  };
};

const addReviewDB = (review) => {
  return function (dispatch, getState, { history }) {
    const token = getCookie();
    axios.defaults.headers.common["Authorization"] = `${token}`;
    const { reviewContent, reviewRate } = review;
    const new_review = {
      reviewContent,
      reviewRate,
    };
    axios.post(serverIP + "/hospitals/1/reviews", new_review).then((result) => {
      const user_info = getState().user.user;
      console.log(result);
      dispatch(addReview({ ...new_review, dogName: user_info.dogName }));
    });
  };
};

const deleteReviewDB = (review) => {
  return function (dispatch, getState, { history }) {
    axios.delete(serverIP + `/review_list/${review}`).then((result) => {
      dispatch(getReviewDB());
    });
  };
};

const updateReviewDB = (review) => {
  return function (dispatch, getState, { history }) {
    const { id, dogName, reviewContent, hospitalRate } = review;
    axios
      .put(serverIP + `/review_list/${id}`, {
        dogName,
        reviewContent,
        hospitalRate,
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
    [ADD_REVIEW]: (state, action) => {
      return produce(state, (draft) => {
        draft.review_list.unshift(action.payload.review);
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
