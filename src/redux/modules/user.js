import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { deleteCookie, getCookie, setCookie } from "../../shared/cookie";
import instance from "../../shared/config";
import defaultImage from "../../image/강아지프로필.png";
import { actionCreators as reservationActions } from "./reservation";

//actions
const SET_USER = "SET_USER";
const EDIT_USER = "EDIT_USER";
const LOGOUT = "LOGOUT";

//action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const editUser = createAction(EDIT_USER, (image_url) => ({ image_url }));
const logout = createAction(LOGOUT, () => {});

//initial state
const initialState = {
  user: {},
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

    instance
      .post("/user/regist", new_user)
      .then((response) => {
        console.log(response);
        window.alert("회원가입이 완료되었습니다!");
        history.push("/login");
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
    console.log("login_info : ", login_info);
    instance
      .post("/user", login_info)
      .then((response) => {
        console.log(response);
        const accessToken = response.data;

        // API 요청하는 콜마다 해더에 accessTocken 담아 보내도록 설정
        // instance.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${accessToken}`;

        //받은 token 쿠키에 저장
        setCookie("token", accessToken);
        dispatch(setUser(login_info));
        history.push("/pages/mainpage");
      })
      .catch((error) => console.log("로그인 중 에러가 발생했어요!", error));
  };
};

const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie("token");
    instance.defaults.headers.common["Authorization"] = null;
    delete instance.defaults.headers.common["Authorization"];
    dispatch(logout());
    history.push("/pages/mainpage");
  };
};

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    // if (!getCookie("token")) {
    //   window.alert("로그인을 해주세요");
    //   history.replace("/login");
    //   return;
    // }
    if (getCookie("token")) {
      const token = getCookie("token");
      instance.defaults.headers.common["Authorization"] = `${token}`;
      instance.get("/userinfo").then((response) => {
        console.log(response);
        const _user = response.data.user;
        const user_info = {
          dogName: _user.dogName,
          dogImage: `${_user.dogImage ? _user.dogImage : defaultImage}`,
          userId: _user.userId,
        };
        console.log(user_info);
        dispatch(setUser(user_info));
        dispatch(reservationActions.getReservation(response.data.reservation));
      });
    }
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [EDIT_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user.dogImage = action.payload.image_url;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
      }),
  },
  initialState
);

const actionCreators = {
  editUser,
  signupDB,
  loginDB,
  loginCheckDB,
  logoutDB,
};

export { actionCreators };
