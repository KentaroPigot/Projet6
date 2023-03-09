import React from "react";
import bannerImgAbout from "../../assets/bannerAbout.webp";
import Dropdown from "../UI/Dropdown";
import aboutInfos from "../../assets/aboutInfos.json";
import styles from "./About.module.css";
import Banner from "../Banner.js";
import { useEffect } from "react";

function About({ routeChange }) {
  useEffect(() => {
    routeChange("about");
  }, [routeChange]);

  return (
    <>
      <Banner className={styles.section} bannerimg={bannerImgAbout} />
      <div className={styles.dropdowns}>
        {aboutInfos.map((info) => {
          return (
            <Dropdown
              className={"about"}
              key={info.id}
              title={info.title}
              text={info.text}
            />
          );
        })}
      </div>
    </>
  );
}

export default About;
