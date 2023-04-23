import React from "react";
import styles from "./headercontentright.module.scss";
import CafeInfo from "../CafeInfo/CafeInfo";

function HeaderContentRight() {
  return (
    <div className={styles.content}>
      <CafeInfo number="16" text="cafes" />
      <CafeInfo number="23" text="food trucks" />
    </div>
  );
}

export default HeaderContentRight;
