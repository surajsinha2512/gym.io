import React from "react";
import "../App.css";
import { StateContext } from "../Context/StateContext";

const IncorrectPsw =() => {
  const { userInfo } = React.useContext(StateContext);
  console.log(userInfo);

  React.useEffect(() => {
    console.log(userInfo);
  },[userInfo])


  return (
    <div className="App">
      <h2>Successfully Login</h2>
    </div>
  );
}

export default IncorrectPsw;
