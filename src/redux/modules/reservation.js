import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";

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
    axios
      .post("/reservations", new_reservation)
      .then((response) => {
        switch (response.data.msg) {
          case "success":
            dispatch(addReservation(new_reservation));
            window.alert(
              "예약이 완료되었습니다. 마이페이지에서 예약 목록을 확인해 보세요 :)"
            );
            break;
          case "not_login":
            window.alert("로그인이 필요합니다!");
            history.replace("/login");
            break;
          default:
            window.alert("예약 신청 중 오류가 생겼네요! 다시 부탁드려요!");
            break;
        }
      })
      .catch((error) => {
        console.log("예약 저장 중 오류 발생!", error);
      });
  };
};

export default handleActions(
  {
    [ADD_RESERVATION]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.reservation);
      }),
  },
  initialState
);

const actionCreators = {
  addReservationDB,
};

export { actionCreators };
