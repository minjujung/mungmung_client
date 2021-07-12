import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie } from "../../shared/Cookie";
import axios from "axios";

//actions
const SET_USER = "SET_USER";
const ADD_USER = "ADD_USER";

//action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const addUser = createAction(ADD_USER, (user) => ({ user }));

//initial state
const initialState = {
  user: null,
  is_login: false,
};

//middleware
const signupDB = (userName, dogName, password, confirmPassword) => {
  return function (dispatch, getState, { history }) {
    const new_user = {
      userName,
      dogName,
      password,
      confirmPassword,
    };

    axios
      .post("/user/regist", new_user)
      .then((response) => {
        if (response.data.msg === "success") {
          dispatch(setUser(new_user));
          window.alert("회원가입이 완료되었습니다!");
          history.replace("/");
        } else {
          window.alert("가입 실패ㅜㅜ");
        }
      })
      .catch((error) =>
        console.log("회원가입 내용 db에 저장하는 데 오류 발생!", error)
      );
  };
};

const loginDB = (userName, password) => {
  return function (dispatch, getState, { history }) {};
};

const logoutDB = () => {
  return function (dispatch, getState, { history }) {};
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);
