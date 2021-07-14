import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

const GET_HOSPITALS = "GET_HOSPITALS";

const getHospitals = createAction(GET_HOSPITALS, (hospitals) => ({
  hospitals,
}));

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

const getHospitalsDB = () => {
  return function (dispatch, getState, { history }) {
    axios.get(serverIP + "/hospitals").then((result) => {
      console.log(result.data);
      dispatch(getHospitals(result.data));
    });
  };
};

export default handleActions(
  {
    [GET_HOSPITALS]: (state, action) => {
      return produce(state, (draft) => {
        draft.hospital_list = action.payload.hospitals;
      });
    },
  },
  initialState
);

const actionCreators = {
  getHospitals,
  getHospitalsDB,
};

export { actionCreators };
