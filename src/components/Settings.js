import React from "react";
import { Switch, Route, Redirect, } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { StateContext } from "../Context/StateContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as CONSTANTS from "../Constants";

const Settings =() => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useHistory();
  const {userInfo, setUserInfo }  = React.useContext(StateContext)

  const handleSignIn = () => {
    console.log("handle sign in ")
    try {
      axios
        .get("http://localhost:8888/login", {
          headers: { emailOrPhone: userName, password: password, rememberMe: false },
        })
        .then((resp) => {
          console.log(resp);
          localStorage.setItem(CONSTANTS.LOCAL_STORAGE_LOGIN_KEY, JSON.stringify(resp.data))
          if(resp.data?.data?.userName){
            console.log()
            setUserInfo(resp.data)
            toast.success("Login successfully");
            localStorage.setItem(CONSTANTS.LOCAL_STORAGE_LOGIN_KEY, JSON.stringify(resp.data))
            navigate.replace('/home');
          }
          else {
            toast.error("Incorrect User name or Password");
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h2>Login Form</h2>
      <div onClick={()=> {navigate.replace('/signup');}} style={{cursor: "pointer", textAlign: "right", marginRight: "15px"}}>
          Create new account
        </div>
      <div className="imgcontainer"></div>

      <div className="container">
        <label for="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        />

        <label for="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />

        <button type="submit" onClick={handleSignIn}>
          Login
        </button>
        <label >
          <input type="checkbox" checked="checked" name="remember"></input>
          Remember me 
        </label>
      </div>
   
      <div className="container" style={{ backgroundColor: "#f1f1f1", textAlign: "center" }}>
        <span className="password" style={{}} onClick={() => { navigate.replace('/forgot')}}>
          Forgot <a href="">password?</a>
        </span>
      </div>
      <ToastContainer type="warning"  style={{width: "40%"}} bodyStyle={{width: "100%"}}  />
    </div>
  );
}

export default Settings;
