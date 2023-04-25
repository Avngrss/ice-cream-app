import React from "react";
import style from "./footer.module.scss";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerL}>
        <p>homemade ice cream made </p>
        <h2>with passion</h2>
      </div>
      <div className={style.footerR}>
        <div className={style.social}>
          <img src="/img/github.svg" alt="github" />
          <img src="/img/telegram.svg" alt="telegram" />
          <img src="/img/facebook.svg" alt="facebook" />
        </div>
        <div className={style.contacts}>
          <p>
            Feel free to contact <a href="tel: +61 (0) 383 766 284">+61 (0) 383 766 284</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
