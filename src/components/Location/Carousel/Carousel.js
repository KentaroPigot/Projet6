import React from "react";
import styles from "./Carousel.module.css";
import ButtonCarousel from "./ButtonCarousel";
import { useState } from "react";

function Carousel({ pics }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== pics.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === pics.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(pics.length);
    }
  };

  return (
    <div className={styles.carousel}>
      {pics.map((pic, index) => {
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

      {pics.length > 1 ? (
        <>
          <ButtonCarousel moveSlide={prevSlide} direction={"prev"} />
          <ButtonCarousel moveSlide={nextSlide} direction={"next"} />
          <span>{`${slideIndex}/${pics.length}`}</span>
        </>
      ) : null}
    </div>
  );
}

export default Carousel;
