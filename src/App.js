import styled from "styled-components";
import {
  InputStyle,
  NormalBtnColor,
  PageTitle,
  ThemeBtnColor,
} from "./common_css/style";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import HospitalDetail from "./pages/HospitalDetail";
function App() {
  return (
    <div className="App" style={{ paddingBottom: "100px" }}>
      <Route path="/hospitals/:id" component={HospitalDetail}></Route>
      <Footer />
    </div>
  );
}

export default App;
