import React from "react";
import styles from "./Location.module.css";
import Carousel from "./Carousel/Carousel";
import Dropdown from "../UI/Dropdown";
import Tag from "./Tag";
import { useLoaderData } from "react-router-dom";
import Section from "../UI/Section";

function Location() {
  const location = useLoaderData();

  return (
    <Section>
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
            <img src={location.host.picture} alt="Propriétaire" />
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
        <Dropdown title={"Description"} text={<p>{location.description}</p>} />
        <Dropdown
          title={"Equipements"}
          text={
            <ul>
              {location.equipments.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          }
        />
      </div>
    </Section>
  );
}

export default Location;
