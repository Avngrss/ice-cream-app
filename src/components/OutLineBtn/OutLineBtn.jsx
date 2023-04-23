import React from "react";
import style from "./outline.module.scss";

function OutLineBtn(props) {
  return (
    <div>
      <button className={style.outLineBtn}>{props.text}</button>
    </div>
  );
}

export default OutLineBtn;
