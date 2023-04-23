import React from "react";
import styles from "./icecard.module.scss";

function IceCard({ urlImg, title, text, bg }) {
  return (
    <div className={styles.card}>
      <img src={urlImg} alt="ice-cream" />
      <div className={styles.cardBody} style={{ backgroundColor: bg }}>
        <div className={styles.title}>{title}</div>
        <div className={styles.cardText}>{text}</div>
        <img className={styles.img} src="../../../public/img/Arrow.png" alt="arrow" />
      </div>
    </div>
  );
}

export default IceCard;
