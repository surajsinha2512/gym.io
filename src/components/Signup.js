import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import * as CONSTANTS from './../Constants'

const Signup = () => {
  

    const navigate = useHistory();

    const handleSignUp = () => {
        axios.post('http://localhost:8888/signup', {
                emailOrPhone: "suraj",
                password: "1234",
                rememberMe: false,
        }).then((resp) => {
          localStorage.setItem(CONSTANTS.LOCAL_STORAGE_LOGIN_KEY, JSON.stringify(resp.data))
            console.log(resp)
            navigate.replace('/home');
        }).catch((err) => {
            console.log(err)
        })
    }
  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        ></input>

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        ></input>

        <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        ></input>

        <label>
          <input type="checkbox" checked="checked" name="remember"></input>
          Remember me
        </label>

        <div className="clearfix">
          <button type="submit" className="signupbtn" onClick={handleSignUp}>
            Sign Up
          </button>
          <p style={{textAlign: "right", color: "#808080", marginTop: "0px"}}>
            By creating an account you agree to our <a>Terms & Privacy</a>.
          </p>
          <div style={{ cursor: "pointer" }} onClick={()=> {navigate.replace('/')}}>Already have an account?</div>
        </div>
      </div>
    </>
  );
};

export default Signup;
