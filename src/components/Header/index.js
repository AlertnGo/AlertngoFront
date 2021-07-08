import { withRouter, Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import "./style.scss";


function Header(props) {
  return (
    <header>
      <div>
        <Link to="/">
          <div>
            <HomeOutlinedIcon />
            <p>Home</p>
          </div>
        </Link>

        <Link to="/me">
          <div>
            <FaceOutlinedIcon />
            <p>Me</p>
          </div>
        </Link>
      
      </div>
    </header>
  );
}
export default Header;
