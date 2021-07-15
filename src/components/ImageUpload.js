import React, { useRef, useState } from "react";
import styled from "styled-components";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

const ImageUpload = (props) => {
  const imageInput = useRef();
  const [preview, setPreview] = useState(null);
  const [done, setDone] = useState(false);

  const dispatch = useDispatch();
  const is_uploading = useSelector((state) => state.image.uploading);
  const user_info = useSelector((state) => state.user.user);

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = imageInput.current.files[0];
    console.log(file);

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const uploadFB = () => {
    let image = imageInput.current.files[0];
    if (!image) {
      return;
    }
    dispatch(imageActions.uploadImageFB(image));
    setTimeout(() => setDone(true), 500);
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <Container>
      <input
        type="file"
        ref={imageInput}
        style={{ display: "none" }}
        id="profile"
        onChange={selectFile}
        disabled={is_uploading}
      />
      <label htmlFor="profile">
        <PhotoCameraIcon style={{ fontSize: 40 }}></PhotoCameraIcon>
      </label>
      <Image src={preview ? preview : user_info.dogImage} alt="dog" />
      {is_uploading ? null : (
        <>
          <CheckCircleIcon
            style={{ fontSize: 40 }}
            onClick={uploadFB}
          ></CheckCircleIcon>
        </>
      )}
      {done ? (
        <p style={{ textAlign: "center" }}>업로드 완료!</p>
      ) : (
        <p style={{ textAlign: "center", margin: "10px 0 0 0" }}>
          사진을 고르고 <br />
          체크버튼을 누르면 업로드!
        </p>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 285px;
  margin: auto;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export default ImageUpload;
