import React from "react";
import styles from "./Home.module.css";
import bannerImgHome from "../../assets/bannerHome.webp";
import Gallery from "./Gallery.js";
import Banner from "../Banner.js";

function Home(props) {
  return (
    <>
      <Banner
        className={styles.section}
        bannerimg={bannerImgHome}
        message={"Chez vous, partout et ailleurs"}
      />
      <Gallery className={styles.section} locations={props.locations} />
    </>
  );
}

export default Home;
