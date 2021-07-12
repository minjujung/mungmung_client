import React from "react";
import styled from "styled-components";
import { NormalFooter, IconStyle } from "../common_css/style";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";

import { history } from "../redux/configureStore";

const Footer = (props) => {
  return (
    <FooterStyle>
      <HomeIcon
        style={IconStyle}
        onClick={() => {
          history.push("/pages/mainpage");
        }}
      />
      <PersonIcon
        style={IconStyle}
        onClick={() => {
          history.push("/pages/mypage");
        }}
      />
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
