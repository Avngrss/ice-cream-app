import React from "react";
import styles from "./buymodal.module.scss";
import YellowBtn from "../YellowBtn/YellowBtn";
import SmallCard from "../SmallCard/SmallCard";

const ice = [
  { img: "/img/smallice1.png", title: "ice cream", border: "#96AF8C" },
  { img: "/img/smallice2.png", title: "ice coffee", border: "#EFD478" },
  { img: "/img/smallice3.png", title: "milkshake", border: "#D6936D" },
];

function BuyModal({ onclickCloseModal }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.closeModal} onClick={onclickCloseModal}>
          <img src="/img/closeModal.png" alt="close" />
        </div>
        <div className={styles.modalTitle}>Buy now</div>
        <div className={styles.modalContent}>
          <div className={styles.smallCard}>
            {ice.map((ice) => (
              <SmallCard img={ice.img} title={ice.title} border={ice.border} />
            ))}
          </div>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
            <textarea cols="35" rows="5" placeholder="Comment"></textarea>
          </form>
          <YellowBtn text="Submit" />
        </div>
      </div>
    </div>
  );
}

export default BuyModal;
