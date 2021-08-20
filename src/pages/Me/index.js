import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
//components
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import MyProfile from "../../components/MyProfile";
import Notification from "../../components/Notification";

const Me = (props) => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
  if (token) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }
  }, []);


  return (
    <main>
      {isLoggedIn ? <MyProfile /> : history.push("/me/login")}
    </main>
  );
};

export default Me;
