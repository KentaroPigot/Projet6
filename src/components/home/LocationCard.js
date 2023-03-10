import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./LocationCard.module.css";

function LocationCard(props) {
  return (
    <div className={styles.location}>
      <img src={props.img} alt="Location" />
      <Link className={styles.container} to={`/locations/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
    </div>
  );
}

// blablablablabla

LocationCard.propTypes = {
  img: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default LocationCard;
