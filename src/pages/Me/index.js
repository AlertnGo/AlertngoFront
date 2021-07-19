import React, { useState, useEffect } from "react";
import "./style.scss";
//components
import Login from "../../components/Login";
import MyProfile from "../../components/MyProfile";
import Notification from "../../components/Notification";

const Me = (props) => {
  return (
    <main>
      <Login />
      <MyProfile />
    </main>
  );
};

export default Me;
