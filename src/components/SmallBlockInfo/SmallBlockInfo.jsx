import React from "react";
import styles from "./smallblockinfo.module.scss";

function SmallBlockInfo({ icon, number, text }) {
  return (
    <div className={styles.SmallBlockInfo}>
      <img src={icon} alt="icon" />
      <div className={styles.number}>{number}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default SmallBlockInfo;
