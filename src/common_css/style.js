import { css } from "styled-components";

const Button = css`
  font-size: 13px;
  border: none;
  border-radius: 5px;
  color: white;
  text-align: center;
  box-sizing: border-box;
  padding: 12px 16px;
  font-weight: bold;
`;

export const ThemeBtnColor = css`
  background-color: rgb(114, 203, 128);
  ${Button}
`;

export const NormalBtnColor = css`
  background-color: rgb(94, 94, 94);
  ${Button}
`;

export const PageTitle = css`
  font-size: 2.4em;
`;

export const InputStyle = css`
  border-radius: 5px;
  box-sizing: border-box;
  padding: 12px;
  border: 1px solid gray;
`;

export const NormalFooter = css`
  background-color: rgb(190, 190, 190);
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  font-size: 40px;
  justify-content: space-evenly;
  align-items: center;
`;

export const IconStyle = {
  width: "50px",
  height: "50px",
  color: "white",
  cursor: "pointer",
};
