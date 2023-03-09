import React from "react";
import styles from "./Banner.module.css";
import PropTypes from "prop-types";

function Banner(props) {
  return (
    <div className={`${styles.banner} ${props.className}`}>
      <img src={props.bannerimg} alt="Paysage" />
      <h1>{props.message}</h1>
    </div>
  );
}

Banner.propTypes = {
  className: PropTypes.string,
  bannerImg: PropTypes.string,
  message: PropTypes.string,
};

export default Banner;
