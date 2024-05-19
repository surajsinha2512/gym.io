import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import * as CONSTANTS from "./../Constants";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);

  const navigate = useHistory();

  const handleSignUp = () => {
    if (userName !== "" && password !== "" && repeatPassword !== "") {
      if (password === repeatPassword) {
        axios
          .post("http://localhost:8888/signup", {
            emailOrPhone: userName,
            password: password,
            rememberMe: rememberMe,
          })
          .then((resp) => {
            localStorage.setItem(
              CONSTANTS.LOCAL_STORAGE_LOGIN_KEY,
              JSON.stringify(resp.data)
            );
            console.log(resp);
            navigate.replace("/home");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        toast.warn("password not matching");
      }
    } else {
      toast.warn("Fill mandatory fields");
    }
  };
  return (
    <>
      <ToastContainer
        type="warning"
        style={{ width: "40%" }}
        bodyStyle={{ width: "100%" }}
      />
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="email">
          <b>emailOrPhone</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email or phone"
          name="email"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        ></input>

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        ></input>

        <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          value={repeatPassword}
          onChange={(e) => {
            setRepeatPassword(e.target.value);
          }}
          required
        ></input>

        <label>
          <input
            type="checkbox"
            name="remember"
            checked={rememberMe}
            onChange={() => setRememberMe((prev) => !prev)}
          ></input>
          Remember me
        </label>

        <div className="clearfix">
          <button type="submit" className="signupbtn" onClick={handleSignUp}>
            Sign Up
          </button>
          <p style={{ textAlign: "right", color: "#808080", marginTop: "0px" }}>
            By creating an account you agree to our <a>Terms & Privacy</a>.
          </p>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate.replace("/");
            }}
          >
            Already have an account?
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
