import React, { useState, useEffect } from "react";
import "./style.scss";
import Notification from "../../components/Notification";
import MyProfile from "../../components/MyProfile";

const Me = (props) => {
  return (
    <main>
      <h1>À propos de moi</h1>
      <section className="me">
        <MyProfile />
      </section>
    </main>
  );
};

export default Me;
