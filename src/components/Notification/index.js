import React, { useState, useEffect } from "react";
import "./style.scss";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

function Notification(props) {
  return (
    <div className="notification">
      <p>{props.notif}</p>
      <p  className="close" onClick={props.unsetfunction}><CloseOutlinedIcon/></p>
    </div>
  );
}
export default Notification;
