import React from "react";
import style from "./interestmodal.module.scss";
import YellowBtn from "../YellowBtn/YellowBtn";

function InterestModal({ onclickCloseModal }) {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div className={style.closeModal} onClick={onclickCloseModal}>
          <img src="/img/closeModal.png" alt="close" />
        </div>
        <h3>
          Thank you for <br /> your interest in owning an <br /> Ice Cream shop
        </h3>
        <p>Due to the overwhelming volume of franchise requests we are not accepting new franchisee applications at this time. Once the application process resumes, we will contact you for further information. Please fill out the contact information below and we will reach out for additional information. We appreciate your patience.</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone" />
          <input type="email" placeholder="Email" />
          <textarea cols="35" rows="5" placeholder="Comment"></textarea>
          <div className={style.btn}>
            <YellowBtn text="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default InterestModal;
