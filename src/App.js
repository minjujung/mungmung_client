import styled from "styled-components";
import "./App.css";
import { flexCenterAlign } from "./common_css/style";

function App() {
  return (
    <div className="App">
      <Test>Hello</Test>
    </div>
  );
}

const Test = styled.div`
  ${flexCenterAlign}
`;

export default App;
