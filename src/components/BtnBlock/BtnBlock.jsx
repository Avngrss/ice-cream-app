import React from "react";
import YellowBtn from "../YellowBtn/YellowBtn";
import OutLineBtn from "../OutLineBtn/OutLineBtn";
import style from "./btnblock.module.scss";

function BtnBlock({ onClickLocation }) {
  return (
    <div className={style.btnBlock}>
      <div onClick={onClickLocation}>
        <YellowBtn text="Our Locations" />
      </div>
      <OutLineBtn text="Franchise" />
    </div>
  );
}

export default BtnBlock;
