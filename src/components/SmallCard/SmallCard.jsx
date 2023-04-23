import React from "react";
import style from "./smallcard.module.scss";

function SmallCard({ img, title, border }) {
  return (
    <div className={style.smallCard}>
      <div className={style.smallCardBody} style={{ border: `2px solid ${border}` }}>
        <img src={img} alt="smallice" />
        <h5 className={style.smallcardTitle}>{title}</h5>
      </div>
    </div>
  );
}

export default SmallCard;
