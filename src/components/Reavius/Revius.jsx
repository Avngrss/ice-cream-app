import React from "react";
import style from "./revius.module.scss";
import Slider from "../Slider/Slider";

function Revius() {
  return (
    <div className={style.revius}>
      <img className={style.moreice} src="/img/moreeice.jpg" alt="moreice" />
      <Slider />
    </div>
  );
}

export default Revius;
