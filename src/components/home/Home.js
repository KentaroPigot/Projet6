import React from "react";
import styles from "./Home.module.css";
import bannerImgHome from "../../assets/bannerHome.webp";
import Gallery from "./Gallery.js";
import Banner from "../Banner.js";
import PropTypes from "prop-types";
import { useEffect } from "react";

function Home({ locations, routeChange }) {
  useEffect(() => {
    routeChange("home");
  }, [routeChange]);

  return (
    <>
      <Banner
        className={styles.section}
        bannerimg={bannerImgHome}
        message={"Chez vous, partout et ailleurs"}
      />
      <Gallery className={styles.section} locations={locations} />
    </>
  );
}

Home.propTypes = {
  locations: PropTypes.array,
};

export default Home;
