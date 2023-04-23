import React from "react";
import styles from "./header.module.scss";
import YellowBtn from "../YellowBtn/YellowBtn";
import Menu from "../Menu/Menu";
import HeaderContentLeft from "../HeaderContentLeft/HeaderContentLeft";
import HeaderContentRight from "../HeaderContentRight/HeaderContentRight";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-top"]}>
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <Menu />
        <div className="header-button">
          <YellowBtn text="Buy now" />
        </div>
      </div>
      <div className={styles.headerContent}>
        <HeaderContentLeft />
        <HeaderContentRight />
      </div>
      <div className={styles.headerBottom}>
        <img src="/img/icecream.png" alt="icecream" />
        <div className={styles.headerBottomText}>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
          <img className={styles.ArrowImg} src="/img/Arrow.png" alt="arrow" />
        </div>
      </div>
    </header>
  );
}

export default Header;
