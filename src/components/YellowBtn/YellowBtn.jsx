import React from "react";
import style from "./yellowbtn.module.scss";

function YellowBtn(props) {
  return (
    <div>
      <button className={style.yellowBtn} type="submit">
        {props.text}
        <img className={style.imgArrow} src="/img/btnarrow.png" alt="arrow" />
      </button>
    </div>
  );
}

export default YellowBtn;
