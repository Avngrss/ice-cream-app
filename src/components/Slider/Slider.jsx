import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper";
import { Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-flip";
import "swiper/scss/autoplay";
import styles from "./slider.module.scss";

function Slider() {
  return (
    <Swiper
      modules={[EffectFlip, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      className={styles.slider}
      effect={"flip"}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className={styles.slide}>
        <img src="/img/slide1.png" alt="slide" />
        <p className={styles.text}>I love visiting your cafe. You prepare the most delicious ice cream in Los Angeles! In addition, you have beautiful serving, cozy atmosphere and polite staff.</p>
        <span className={styles.badge}>Emily, Los Angeles</span>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img src="/img/slide2.png" alt="slide" />
        <p className={styles.text}>I love eating popsicles on a hot day. Yours is always delicious. I recommend your cafe to everyone I know.</p>
        <span className={styles.badge}>Sam, Los Angeles</span>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img src="/img/slide3.png" alt="slide" />
        <p className={styles.text}>Ice cream is my passion! I love your chocolate hazelnut ice cream! And I really like the excellent service - always served politely and quickly!</p>
        <span className={styles.badge}>Diana, Chicago</span>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
