import React from "react";
import style from "./adresscard.module.scss";

function AdressCard({ label, city, adress }) {
  return (
    <div className={style.AdressCard}>
      <div className={style.card}>
        <span>{label}</span>
        <p className={style.city}>{city}</p>
        <p className={style.adress}>{adress}</p>
        <hr />
        <div className={style.worktime}>
          <p className={style.day}>Monday - Friday</p>
          <p className={style.time}>06:00 AM - 10:00 PM</p>
        </div>
        <div className={style.worktime}>
          <p className={style.day}>Saturday - Sunday</p>
          <p className={style.time}>08:00 AM - 16:00 PM</p>
        </div>
        <hr />
        <div className={style.contacts}>
          <p className={style.phone}>+61(0) 383 766 284 </p>
          <p className={style.mail}>noreply@envato.com</p>
        </div>
      </div>
    </div>
  );
}

export default AdressCard;
