import React from "react";
import styled from "styled-components";
import { NormalFooter, IconStyle } from "../common_css/style";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import dogProfile from "../image/강아지프로필.png";

import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";

const Footer = (props) => {
  const user_info = useSelector((state) => state.user.user);
  return (
    <FooterStyle>
      <HomeIcon
        style={IconStyle}
        onClick={() => {
          history.push("/pages/mainpage");
        }}
      />
      {Object.keys(user_info).length === 0 ? (
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
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          onClick={() => {
            history.push("/pages/mypage");
          }}
        />
      )}
      <SearchIcon
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
