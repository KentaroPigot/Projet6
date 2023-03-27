import React from "react";
import bannerImgHome from "../../assets/bannerHome.webp";
import Gallery from "./Gallery.js";
import Banner from "../Banner.js";
import PropTypes from "prop-types";

import Section from "../UI/Section";

function Home() {
  return (
    <Section>
      <Banner
        bannerimg={bannerImgHome}
        message={"Chez vous, partout et ailleurs"}
      />
      <Gallery />
    </Section>
  );
}

Home.propTypes = {
  locations: PropTypes.array,
};

export default Home;
