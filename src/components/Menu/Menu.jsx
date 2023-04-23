import React from "react";
import styles from "./menu.module.scss";

function Menu() {
  return (
    <nav>
      <ul className={styles.menu}>
        <li className="menu-item">Home</li>
        <li className="menu-item">How it’s made?</li>
        <li className="menu-item">Our products</li>
        <li className="menu-item">Contact</li>
      </ul>
    </nav>
  );
}

export default Menu;
