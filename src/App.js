import "./App.css";
import styled from "styled-components";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./redux/configureStore";

import Search from "./pages/Search";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reservation from "./pages/Reservation";
import HospitalDetail from "./pages/HospitalDetail";
import ReviewUpdate from "./pages/ReviewUpdate";

function App() {
  return (
    <Container>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/reservation" component={Reservation} />
        <Route path="/hospitals/:id" component={HospitalDetail}></Route>
        <Route path="/review/update/:id" component={ReviewUpdate}></Route>
        <Route path="/pages/search" component={Search} />
        <Route path="/pages/mypage" component={MyPage} />
        <Route path="/pages/mainpage" component={MainPage} />
      </ConnectedRouter>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding-bottom: 80px;
  @media screen and (min-width: 450px) {
    width: 450px;
    margin: 0 auto;
    position: relative;
  }
`;

export default App;
