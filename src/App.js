import "./App.css";
import styled from "styled-components";

import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./redux/configureStore";

import Start from "./pages/Start";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reservation from "./pages/Reservation";
import HospitalDetail from "./pages/HospitalDetail";

function App() {
  return (
    <Container>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Start} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/reservation" component={Reservation} />
        <Route path="/hospitals/:id" component={HospitalDetail}></Route>
      </ConnectedRouter>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

export default App;
