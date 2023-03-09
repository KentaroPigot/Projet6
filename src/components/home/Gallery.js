import React from "react";
import LocationCard from "./LocationCard";
import PropTypes from "prop-types";

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

LocationCard.propTypes = {
  className: PropTypes.string,
  locations: PropTypes.array,
};

export default Gallery;
