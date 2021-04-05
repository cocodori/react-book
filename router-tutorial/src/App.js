import React from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import About from "./About";
import HistorySample from "./HistorySample";
import Home from "./Home";
import Profiles from "./Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">profiles</Link>
        </li>
        <li>
          <Link to="/history">history</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path={["/about", "/info"]} component={About}></Route>
        <Route path="/profiles" component={Profiles}></Route>
        <Route path="/history" component={HistorySample}></Route>
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
