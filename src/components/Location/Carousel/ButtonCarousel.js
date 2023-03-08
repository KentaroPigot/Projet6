import React from "react";
import styles from "./ButtonCarousel.module.css";

function ButtonCarousel(props) {
  const moveSlide = () => {
    props.moveSlide();
  };

  return (
    <button
      onClick={moveSlide}
      className={`${styles["btn-slide"]} ${
        props.direction === "next" ? `${styles.next}` : `${styles.prev}`
      }`}
    >
      {props.direction === "next" ? (
        <i className="fa-solid fa-chevron-right fa-5x"></i>
      ) : (
        <i className="fa-solid fa-chevron-left fa-5x"></i>
      )}
    </button>
  );
}

export default ButtonCarousel;
