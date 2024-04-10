import React from "react";
import { Switch, Route, Redirect, HashRouter} from "react-router-dom";
import axios from "axios";
import "./App.css";
import Settings from "./components/Settings";
import IncorrectPsw from "./components/IncorrectPsw";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Signup from "./components/Signup";
import Forgot from "./components/Forgot";

function App() {
 
  return (
    <div className="App">
  <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Settings} />
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/signup"} component={Signup} />
        <Route exact path={"/forgot"} component={Forgot} />
        {/* <Route path="*" component={Settings} /> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
