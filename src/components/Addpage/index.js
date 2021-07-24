import React, { useState, useEffect } from "react";
import "./style.scss";

function Addpage(props) {
  return (
    <section className="flyingpage">
      <form onSubmit={props.addeSubmit}>
        <label>
          <p>{props.lable}</p>
          <input type="text" name={props.lable} placeholder={props.placeholder} onChange={props.change}/>
        </label>
        <button type="submit">Done</button>
      </form>
    </section>
  );
}
export default Addpage;
