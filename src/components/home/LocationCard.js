import React from "react";
import styles from "./LocationCard.module.css";
import { Link } from "react-router-dom";

function LocationCard(props) {
  const img = props.img;

  return (
    <div className={styles.location} style={{ backgroundImage: `url(${img})` }}>
      <Link className={styles.container} to={props.id}>
        <h2>{props.name}</h2>
      </Link>
    </div>
  );
}

export default LocationCard;
