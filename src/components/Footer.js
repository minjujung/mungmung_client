import React from "react";
import styled from "styled-components";
import { NormalFooter, IconStyle } from "../common_css/style";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";

const Footer = (props) => {
  return (
    <FooterStyle>
      <HomeIcon style={IconStyle} />
      <PersonIcon style={IconStyle} />
      <SearchIcon style={IconStyle} />
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  ${NormalFooter}
`;
export default Footer;
