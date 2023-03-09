import React from "react";
import styles from "./LocationCard.module.css";
import { Link } from "react-router-dom";

function LocationCard(props) {
  const img = props.img;

  return (
    <div className={styles.location}>
      <img src={props.img} alt="Location"></img>
      <Link className={styles.container} to={`/locations/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
    </div>
  );
}

export default LocationCard;
