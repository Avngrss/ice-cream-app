import React from "react";
import style from "./product.module.scss";
import IceCard from "../IceCard/IceCard";

const arr = [
  { urlImg: "/img/1ice.png", title: "ice cream", text: "Soft ice cream with a delicate taste for you and your friends. Made with milk, cream, sugar and natural stabilizer", bg: "#AEC6A5" },
  { urlImg: "/img/2ice.png", title: "ice coffee", text: "Fragrant invigorating drink created from 100% natural ingredients without the use of preservatives and flavor enhancers", bg: "#EFD478" },
  { urlImg: "/img/3ice.png", title: "milkshakes", text: "Sweet drinks based on milk and ice cream, supplemented with syrups, fruits, berries and other sweets of your choice", bg: "#D6936D" },
];

function Product() {
  return (
    <div className={style.product}>
      <h2 className={style.title}>
        100% natural <br /> <span>products</span>
      </h2>
      <div className={style.cardContent}>
        {arr.map((obj) => (
          <IceCard urlImg={obj.urlImg} title={obj.title} text={obj.text} bg={obj.bg} />
        ))}
      </div>
    </div>
  );
}

export default Product;
