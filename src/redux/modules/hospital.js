import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import moment from "moment";
import axios from "axios";
import { result } from "lodash";
import { getCookie } from "../../shared/Cookie";
import instance from "../../shared/config";

const GET_HOSPITAL = "GET_HOSPITAL";

const initialState = {
  hospital: {
    hospitalName: "",
    hospitalImageSource: "",
    hospitalContent: "",
    hospitalRate: "",
    hospitalSubject: "",
    hospitalId: "",
    hospitalLocation: "",
    subjectList: [],
  },
};

const getHospital = createAction(GET_HOSPITAL, (hospital) => ({ hospital }));

export const getHospitalDB = (id) => {
  return function (dispatch, getState, { history }) {
    instance.get(`/hospitals/${id}`).then((result) => {
      dispatch(getHospital(result.data));
    });
  };
};

export default handleActions(
  {
    [GET_HOSPITAL]: (state, action) =>
      produce(state, (draft) => {
        draft.hospital = action.payload.hospital;
      }),
  },
  initialState
);
