import React, { useState, useEffect } from "react";
import "./style.scss";

function Addpage(props) {
  return (
    <section className="addSection">
      <form onSubmit={props.addeSubmit}>
        <label>
          <p>{props.lable}</p>
          <input type="text" name={props.lable} placeholder={props.placeholder} onChange={props.change}/>
        </label>
        <button type="submit"className="button">Done</button>
      </form>
    </section>
  );
}
export default Addpage;
