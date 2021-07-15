import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { storage } from "../../shared/firebase";
import instance from "../../shared/config";
import { actionCreators as userActions } from "./user";

//actions
const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";

//action creator
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));

//initialState
const initialState = {
  uploading: false,
  preview: null,
  image_url: "",
};

//Middleware
const uploadImageFB = (image) => {
  return function (dispatch, getState, { history }) {
    dispatch(uploading(true));
    const _upload = storage.ref(`images/${image.name}`).put(image);

    _upload.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        dispatch(uploadImage(url));
        instance.post("/userinfo/image", { dogImage: url }).then((response) => {
          dispatch(userActions.editUser(url));
        });
      });
    });
  };
};

//reducer
export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
  },
  initialState
);

const actionCreators = {
  uploadImage,
  uploading,
  uploadImageFB,
};

export { actionCreators };
