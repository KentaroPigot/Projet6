import React from "react";
import styles from "./Banner.module.css";

function Banner(props) {
  return (
    <div className={`${styles.banner} ${props.className}`}>
      <img src={props.bannerimg} alt="Paysage" />
      <h1>{props.message}</h1>
    </div>
  );
}

export default Banner;
