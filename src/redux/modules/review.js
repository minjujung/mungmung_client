import { createAction, handleActions } from "redux-actions";
import produce from "immer";
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

const getReviewDB = (id) => {
  return function (dispatch, getState, { history }) {
    const token = getCookie("token");
    instance.defaults.headers.common["Authorization"] = `${token}`;
    instance.get(`/hospitals/${id}/reviews`).then((result) => {
      dispatch(getReview(result.data));
    });
  };
};

const addReviewDB = (id, review) => {
  return function (dispatch, getState, { history }) {
    const token = getCookie("token");
    instance.defaults.headers.common["Authorization"] = `${token}`;
    const { reviewContent, hospitalRate } = review;
    const new_review = {
      reviewContent,
      hospitalRate,
    };
    instance.post(`/hospitals/${id}/reviews`, new_review).then((result) => {
      dispatch(getReviewDB(id));
    });
  };
};

const deleteReviewDB = (review_id) => {
  return function (dispatch, getState, { history }) {
    const token = getCookie("token");
    instance.defaults.headers.common["Authorization"] = `${token}`;
    instance.delete(`/hospitals/reviews/${review_id}`).then((result) => {
      dispatch(deleteReview(review_id));
    });
  };
};

const updateReviewDB = (hospitalId, review) => {
  return function (dispatch, getState, { history }) {
    const token = getCookie("token");
    instance.defaults.headers.common["Authorization"] = `${token}`;
    const { id, reviewContent, hospitalRate } = review;

    const params = {
      reviewContent,
      hospitalRate,
    };

    instance.put(`/hospitals/reviews/${id}`, params).then((result) => {
      history.push({
        pathname: `/hospitals/${hospitalId}`,
        state: {
          tabIndex: 2,
        },
      });
    });
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
