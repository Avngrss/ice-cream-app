import React from "react";
import style from "./cafeinfo.module.scss";

function CafeInfo(props) {
  return (
    <div className={style.info}>
      <span className={style.number}>{props.number}</span>
      <span className={style.text}>{props.text}</span>
    </div>
  );
}

export default CafeInfo;
