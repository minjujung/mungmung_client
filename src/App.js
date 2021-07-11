import "./App.css";
import Search from "./pages/Search";
import MyPage from "./pages/MyPage";
import MainPage from "./pages/MainPage";
import { ConnectedRouter} from "connected-react-router";
import {history} from "./redux/configureStore";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
      <Route path="/pages/search" component={Search}/>
      <Route path="/pages/mypage" component={MyPage}/>
      <Route path="/pages/mainpage" component={MainPage}/>
      </ConnectedRouter>
    </div>
  );
}


export default App;