import React, { useState, useEffect } from "react";
import "./style.scss";

function Addpage(props) {
  return (
    <section className="addSection">
      <form onSubmit={props.addeSubmit}>
        <label>
          <p>{props.lable}</p>
          <input type="text" name={props.lable} placeholder={props.placeholder} onChange={props.change} maxLength={props.max}/>
        </label>
        <button type="submit"className="button">Done</button>
      <button onClick={props.cancel} className="button">Cancel</button>
      </form>
    </section>
  );
}
export default Addpage;
