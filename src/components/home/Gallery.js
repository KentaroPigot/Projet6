import React, { useContext } from "react";
import LocationCard from "./LocationCard";
import PropTypes from "prop-types";
import styles from "./Gallery.module.css";
import LocationsContext from "../../context/locations-context";

function Gallery(props) {
  const locations = useContext(LocationsContext);

  return (
    <div className={`${styles.gallery} ${props.className}`}>
      {locations.map((location) => {
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
