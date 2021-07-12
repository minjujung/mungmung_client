import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { setCookie } from "../../shared/Cookie";
import instance from "../../shared/config";

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

// {userName : "아이디",
// dogName : "반려견이름",
// password : "비밀번호",
// confirmPassword : "비밀번호확인"}
//middleware
const signupDB = (userName, dogName, password, confirmPassword) => {
  return function (dispatch, getState, { history }) {
    const new_user = {
      userName,
      dogName,
      password,
      confirmPassword,
    };

    instance
      .post("/user/regist", new_user)
      .then((response) => {
        window.alert("회원가입이 완료되었습니다!");
        history.replace("/");
        //   if (response.data.msg === "success") {
        //     dispatch(setUser(new_user));
        //     window.alert("회원가입이 완료되었습니다!");
        //     history.replace("/");
        //   } else {
        //     window.alert("가입 실패ㅜㅜ");
        //   }
      })
      .catch((error) =>
        console.log("회원가입 내용 db에 저장하는 데 오류 발생!", error)
      );
  };
};

const loginDB = (userName, password) => {
  return function (dispatch, getState, { history }) {
    let login_info = {
      userName,
      password,
    };
    instance
      .post("/user", login_info)
      .then((response) => {
        console.log(response);
        window.alert("로그인 정보 서버에 전달 완료");
      })
      .catch((error) => console.log("로그인 중 에러가 발생했어요!", error));
  };
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

const actionCreators = {
  signupDB,
  loginDB,
};

export { actionCreators };
