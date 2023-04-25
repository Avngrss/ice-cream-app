import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import style from "./locationmodal.module.scss";
import YellowBtn from "../YellowBtn/YellowBtn";

function LocationModal({ onclickCloseModal }) {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div className={style.closeModal} onClick={onclickCloseModal}>
          <img src="/img/closeModal.png" alt="close" />
        </div>
        <div className={style.map}>
          <h3>Our Locations</h3>
          <YMaps>
            <div>
              <Map defaultState={{ center: [40.7143, -74.006], zoom: 6 }} />
            </div>
          </YMaps>
        </div>
        <div className={style.btn}>
          <YellowBtn text="Open map" />
        </div>
      </div>
    </div>
  );
}

export default LocationModal;
