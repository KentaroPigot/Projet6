import React from "react";
import styles from "./Location.module.css";
import Carousel from "./Carousel/Carousel";
import DropdownLocation from "./DropdownLocation.js";
import Tag from "./Tag";
import { useState } from "react";

function Location(props) {
  const [location, setLocation] = useState(props.props);

  return (
    <div className={props.className}>
      <Carousel pics={location.pictures} />
      <div className={styles.header}>
        <div className={styles.header__p1}>
          <h1>{location.title}</h1>
          <h2>{location.location}</h2>
          <div className={styles.tags}>
            {location.tags.map((tag, i) => {
              return <Tag key={i} tag={tag} />;
            })}
          </div>
        </div>
        <div className={styles.header__p2}>
          <div className={styles.host}>
            <h3>{location.host.name}</h3>
            <img src={location.host.picture} />
          </div>
          <div className={styles.stars}>
            {Array(+location.rating)
              .fill()
              .map((n, i) => {
                return <i key={i} className="fa-solid fa-star fa-3x"></i>;
              })}
            {+location.rating < 5 &&
              Array(5 - Number(location.rating))
                .fill()
                .map((n, i) => {
                  return <i key={i} className="fa-regular fa-star fa-3x"></i>;
                })}
          </div>
        </div>
      </div>
      <div className={styles.dropdowns}>
        <DropdownLocation title={"Description"} text={location.description} />
        <DropdownLocation title={"Equipements"} text={location.equipments} />
      </div>
    </div>
  );
}

export default Location;
