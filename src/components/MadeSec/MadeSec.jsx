import React from "react";
import YellowBtn from "../YellowBtn/YellowBtn";
import SmallBlockInfo from "../SmallBlockInfo/SmallBlockInfo";
import style from "./madesec.module.scss";

const info = [
  { icon: "/img/cowicon.png", number: 721, text: "Aliquam ac dui vel dui vulputate consectetur. Mauris massa." },
  { icon: "/img/hard.png", number: "16kg", text: "Aliquam ac dui vel dui vulputate consectetur. Mauris massa." },
  { icon: "/img/icecrema.png", number: 84, text: "Aliquam ac dui vel dui vulputate consectetur. Mauris massa." },
];

function MadeSec({ onClickOpenModalMade }) {
  return (
    <div className={style.made}>
      <h2 className={style.madetitle}>
        tradition and love <br /> <span>how it’s made?</span>
      </h2>
      <div className={style.madeInfo}>
        <img src="/img/cow.png" alt="cow" />
        <div className="madeInfotext">
          <p className={style.madeText}>Ice is a place where you will become not only a little happier, but also healthier. Health is the main value for us, and we follow it when creating our handmade desserts.</p>
          <p className={style.madeText}>We use traditional recipes and 100% natural ingredients. Our products are so natural that they can be given to children from the age of three years. Sweets lovers can expect 55 types of ice cream, 15 types of coffee and 23 milkshakes. This is enough to choose ice cream and coffee for any mood!</p>
          <div onClick={onClickOpenModalMade}>
            <YellowBtn text="Read more" />
          </div>
        </div>
      </div>
      <div className={style.info}>
        {info.map((elem) => (
          <SmallBlockInfo icon={elem.icon} number={elem.number} text={elem.text} />
        ))}
      </div>
    </div>
  );
}

export default MadeSec;
