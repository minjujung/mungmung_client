import styled from "styled-components";
import "./App.css";
import {
  InputStyle,
  NormalBtnColor,
  PageTitle,
  ThemeBtnColor,
} from "./common_css/style";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Button>나는 버튼이다</Button>
      <NormBtn>나는 버튼2다</NormBtn>
      <Title>로그인</Title>
      <Input type="text" placeholder="내용을 입력해주세요"></Input>
      <Footer />
    </div>
  );
}

const Button = styled.button`
  ${ThemeBtnColor}
`;

const NormBtn = styled.button`
  ${NormalBtnColor}
`;

const Title = styled.h1`
  ${PageTitle}
`;

const Input = styled.input`
  ${InputStyle}
`;

export default App;
