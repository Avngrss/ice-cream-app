import React from "react";
import styles from "./headercontentleft.module.scss";
import OutLineBtn from "../OutLineBtn/OutLineBtn";

function HeaderContentLeft() {
  return (
    <div className="headerContentLeft">
      <h1 className={styles.title}>
        ice cream <br /> made with <br /> passion
      </h1>
      <div className={styles.headerBtn}>
        <OutLineBtn text="Products" />
        <button className={styles.link}>How it’s made?</button>
      </div>
    </div>
  );
}

export default HeaderContentLeft;
