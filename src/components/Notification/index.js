import React, { useState, useEffect } from "react";
import "./style.scss";

function Notification(props) {
  return (
    <p className="notification">
      {props.notif}
    </p>
  );
}
export default Notification;
