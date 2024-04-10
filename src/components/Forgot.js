import React from "react";
import "../App.css";
import { Divider } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import * as CONSTANTS from './../Constants'

const Forgot = () => {

    const navigate = useHistory();

  const handleSubmit = () => {
    console.log(JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_LOGIN_KEY))?.data?.accessToken)
    const accessToken  = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_LOGIN_KEY))?.data?.accessToken;
    axios.get(`http://localhost:8888/`, {
      headers: {'Authorization': `Bearer ${accessToken}`}
    }).then((res) => {
      console.log(res)
    }).catch(err => console.log(err))

  }

  return (
    <>
      <div className="container">
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        ></input>
        
        <div style={{display: "flex", flexDirection: "row" ,}}>
        <button type="submit" onClick={() => {navigate.replace('/')}} style={{background: "red", marginRight: "5px"}}>
         Cancel
        </button>
        <button type="submit" onClick={() => {handleSubmit()}} style={{marginLeft: "5px"}}>
          Send OTP
        </button>
        </div>

    
        <Divider style={{marginTop: "20px"}}/>
      </div>
    </>
  );
};

export default Forgot;
