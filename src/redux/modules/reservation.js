import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import instance from "../../shared/config";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// actions
const ADD_RESERVATION = "ADD_RESERVATION";
const GET_RESERVATION = "GET_RESERVATION";

// action creators
const addReservation = createAction(ADD_RESERVATION, (reservation) => ({
  reservation,
}));
const getReservation = createAction(GET_RESERVATION, (reservation_list) => ({
  reservation_list,
}));

const initialState = {
  list: [],
};

// {hospitalId = "병원 id",
// dogName = "반려견이름",
// reservationDate = "예약시간",
//  reservationDetail = "요청사항"}

const addReservationDB = (
  hospitalId,
  dogName,
  reservationDate,
  reservationDetail
) => {
  return function (dispatch, getState, { history }) {
    let new_reservation = {
      hospitalId,
      dogName,
      reservationDate,
      reservationDetail,
    };
    const token = getCookie("token");
    instance.defaults.headers.common["Authorization"] = `${token}`;

    instance
      .post(
        "/reservations",
        new_reservation
        // ... add other header lines like: 'Content-Type': 'application/json'
      )
      .then((response) => {
        switch (response.data.msg) {
          case "success":
            dispatch(addReservation(new_reservation));
            window.alert(
              "예약이 완료되었습니다. 마이페이지에서 예약 목록을 확인해 보세요 :)"
            );
            history.push("/pages/mypage");
            break;
          case "not_login":
            window.alert("로그인이 필요합니다!");
            history.replace("/login");
            break;
          default:
            // window.alert("예약 신청 중 오류가 생겼네요! 다시 부탁드려요!");
            dispatch(addReservation(new_reservation));
<<<<<<< HEAD
            window.alert("예약이 완료되었습니다!");
=======
            window.alert("예약이 완료되었습니다.");
>>>>>>> 9db6b37880cd16a31828991ffb2a082515e1237c
            history.push("/pages/mypage");
            break;
        }
      })
      .catch((error) => {
        console.log("예약 저장 중 오류 발생!", error);
      });
  };
};

const getReservationDB = () => {
  return function (dispatch, getState, { history }) {
    const token = getCookie("token");
    instance.defaults.headers.common["Authorization"] = `${token}`;
    instance
      .get("/userinfo")
      .then((response) => {
        dispatch(getReservation(response.data.reservation));
      })
      .catch((error) => {
        console.log(error.response);
        window.alert("병원정보를 불러오는데 오류가 발생했습니다!");
      });
  };
};

export default handleActions(
  {
    [ADD_RESERVATION]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.reservation);
      }),
    [GET_RESERVATION]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.reservation_list;
      }),
  },
  initialState
);

const actionCreators = {
  addReservationDB,
  getReservationDB,
};

export { actionCreators };
