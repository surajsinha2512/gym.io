import React from "react";
import { Switch, Route, Redirect, } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { StateContext } from "../Context/StateContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as CONSTANTS from "../Constants";

const Settings = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useHistory();

  const handleSignIn = () => {
    console.log("handle sign in ")
    try {
      axios
        .post("http://localhost:8888/login", {
          emailOrPhone: userName, password: password,
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data?.data?.accessToken) {
            localStorage.setItem(CONSTANTS.LOCAL_STORAGE_USER_INFO, JSON.stringify({ emailOrPhone: userName }));
            localStorage.setItem(CONSTANTS.LOCAL_STORAGE_LOGIN_KEY, JSON.stringify(resp.data?.data?.accessToken))
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
    <div className="App mx-auto flex min-h-screen w-full items-center justify-center bg-black text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <h2 className="text-center text-4xl font-medium">Login Form</h2>

        <div className="imgcontainer"></div>

        <div className="container flex justify-center flex-col gap-5 ">
          {/* <label for="username">
          <b>Username</b>
        </label> */}
          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              name="username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
          </div>

          {/* <label for="password">
          <b>Password</b>
        </label> */}
          <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="password" placeholder="Password" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>


          <button className="inline-block text-base font-medium px-12 py-2 border border-accent-400 rounded-lg text-accent-400 cursor-pointer bg-gray-50/10 backdrop-blur-3xl" type="submit" onClick={handleSignIn}>
            Login
          </button>
          {/* <label >
          <input type="checkbox" checked="checked" name="remember"></input>
          Remember me 
        </label> */}
        </div>
        <div className="flex justify-between items-center">
          <div className="font-medium text-orange-600 underline-offset-4 hover:underline" onClick={() => { navigate.replace('/signup'); }}>
            Create new account
          </div>
          <div className="font-medium text-orange-600 underline-offset-4 hover:underline" onClick={() => { navigate.replace('/forgot') }}>
            Forgot Password?
          </div>
        </div>
      </section>
      <ToastContainer type="warning" style={{ width: "40%" }} bodyStyle={{ width: "100%" }} />
    </div>
  );
}

export default Settings;
