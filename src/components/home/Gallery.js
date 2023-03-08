import React from "react";
import LocationCard from "./LocationCard";

import styles from "./Gallery.module.css";

function Gallery(props) {
  return (
    <div className={`${styles.gallery} ${props.className}`}>
      {props.locations.map((location) => {
        return (
          <LocationCard
            key={location.id}
            id={location.id}
            img={location.cover}
            name={location.title}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
