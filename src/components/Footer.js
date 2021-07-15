import React from "react";
import styled from "styled-components";
import { NormalFooter, IconStyle } from "../common_css/style";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import dogProfile from "../image/강아지프로필.png";

import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";

const Footer = (props) => {
  const user_info = useSelector((state) => state.user.user);
  return (
    <FooterStyle>
      <HomeRoundedIcon
        style={IconStyle}
        onClick={() => {
          history.push("/pages/mainpage");
        }}
      />
      {!user_info || Object.keys(user_info).length === 0 ? (
        <img
          src={dogProfile}
          alt="dog_default"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          onClick={() => {
            window.alert("로그인이 필요합니다");
            history.push("/login");
          }}
        />
      ) : (
        <img
          src={user_info?.dogImage}
          alt="dog"
          style={{
            width: "50px",
            height: "50px",
            border: "2px solid white",
            borderRadius: "50%",
            boxSizing: "border-box",
          }}
          onClick={() => {
            history.push("/pages/mypage");
          }}
        />
      )}
      <SearchRoundedIcon
        style={IconStyle}
        onClick={() => {
          history.push("/pages/search");
        }}
      />
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  ${NormalFooter}
`;
export default Footer;
