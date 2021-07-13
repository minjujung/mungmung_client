import React, { useRef, useState } from "react";
import styled from "styled-components";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const ImageUpload = (props) => {
  const imageInput = useRef();
  const [preview, setPreview] = useState(null);

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = imageInput.current.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };
  return (
    <Container>
      <input
        type="file"
        ref={imageInput}
        style={{ display: "none" }}
        id="profile"
        onChange={selectFile}
      />
      <label htmlFor="profile">
        <PhotoCameraIcon style={{ fontSize: 40 }}></PhotoCameraIcon>
      </label>
      <Image
        src={
          preview
            ? preview
            : "http://image.dongascience.com/Photo/2018/12/2d5efe44bdd02f3e2ec4e99189d89d18.jpg"
        }
        alt="dog"
      />
      <CheckCircleIcon style={{ fontSize: 40 }}></CheckCircleIcon>
    </Container>
  );
};
const Container = styled.div`
  width: 285px;
  margin: auto; ;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export default ImageUpload;
