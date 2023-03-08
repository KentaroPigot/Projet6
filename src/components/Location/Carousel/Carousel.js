import React from "react";
import styles from "./Carousel.module.css";
import ButtonCarousel from "./ButtonCarousel";
import { useState } from "react";

function Carousel(props) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== props.pics.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === props.pics.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(props.pics.length);
    }
  };

  return (
    <div className={styles.carousel}>
      {props.pics.map((pic, index) => {
        return (
          <div
            key={index}
            className={
              slideIndex === index + 1
                ? `${styles.slide} ${styles.active}`
                : `${styles.slide}`
            }
          >
            <img src={pic} alt="Plusieurs images du lieu" />
          </div>
        );
      })}
      <ButtonCarousel moveSlide={prevSlide} direction={"prev"} />
      <ButtonCarousel moveSlide={nextSlide} direction={"next"} />
      <span>{`${slideIndex}/${props.pics.length}`}</span>
    </div>
  );
}

export default Carousel;
