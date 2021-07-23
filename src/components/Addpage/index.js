import React, { useState, useEffect } from "react";
import "./style.scss";

function Addpage(props) {
  return (
    <section className="flyingpage">
      <form onSubmit={props.handleSubmit}>
        <label>
          <p>JLDS</p>
          <input type="text" name="name" placeholder="Name" />
        </label>
      </form>
    </section>
  );
}
export default Login;
