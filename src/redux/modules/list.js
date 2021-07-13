import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import axios from "axios";
import { result } from "lodash";

const GET_HOSPITAL = "GET_HOSPITAL";

const getHospital = createAction(GET_HOSPITAL, (hospital) => ({ hospital }));

const serverIP = "http://52.79.234.172";
const initialState = {
  hospital_list: [
    {
      hospitalId: "1",
      hospitalName: "아프지멍 병원",
      hospitalImage:
        "https://hyunjung.s3.ap-northeast-2.amazonaws.com/hospital.jpeg",
      hospitalContent: "여기 너무 좋아요",
      hospitalRate: "5.0",
    },
  ],
};

const getHospitalDB = () => {
  return function (dispatch, getState, { history }) {
    axios.get(serverIP + "/hospitals").then((result) => {
      dispatch(getHospital(result.data));
    });
  };
};

export default handleActions(
  {
    [GET_HOSPITAL]: (state, action) => {
      return produce(state, (draft) => {
        draft.hospital_list = action.payload.hospital;
      });
    },
  },
  initialState
);

const actionCreators = {
  getHospital,
  getHospitalDB,
};

export { actionCreators };
