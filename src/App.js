import styled from "styled-components";
import "./App.css";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./redux/configureStore";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Route exact path="/start" component={Start} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </ConnectedRouter>
    </div>
  );
}

{
  /* <Button>깃 테스트2</Button>
<NormBtn>나는 버튼2다</NormBtn>
<Title>로그인</Title>
<Input type="text" placeholder="내용을 입력해주세요"></Input>
<Footer />

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
`; */
}

export default App;
