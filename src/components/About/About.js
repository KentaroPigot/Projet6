import React from "react";
import bannerImgAbout from "../../assets/bannerAbout.webp";
// import Dropdown from "./components/About/Dropdown.js";
import Dropdown from "./Dropdown.js";
import aboutInfos from "../../assets/aboutInfos.json";
import styles from "./About.module.css";
import Banner from "../Banner.js";

function About(props) {
  return (
    <>
      <Banner className={styles.section} bannerimg={bannerImgAbout} />
      <div className={styles.dropdowns}>
        {aboutInfos.map((info, i) => {
          return <Dropdown key={i} title={info.title} text={info.text} />;
        })}
      </div>
    </>
  );
}

export default About;
