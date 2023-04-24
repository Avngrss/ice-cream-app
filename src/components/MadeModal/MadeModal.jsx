import React from "react";
import styles from "./mademodal.module.scss";

function MadeModal({ onclickCloseModal }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.closeModal}>
          <img src="/img/closeModal.png" alt="close" onClick={onclickCloseModal} />
        </div>
        <div className={styles.modalContent}>
          <h2>How it’s made?</h2>
          <div className="video">
            <img src="/img/videobg.png" alt="video" />
            <img className={styles.play} src="/img/play.png" alt="play" />
          </div>
          <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</div>
        </div>
      </div>
    </div>
  );
}

export default MadeModal;
