import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import Gallery from "./components/home/Gallery.js";
import Dropdown from "./components/About/Dropdown.js";
import Location from "./components/Location/Location.js";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";

import styles from "./App.module.css";

import bannerImgHome from "./assets/bannerHome.webp";
import bannerImgAbout from "./assets/bannerAbout.webp";

import locationsData from "./assets/data.json";
import aboutInfos from "./assets/aboutInfos.json";

function App() {
  const [locations, setLocations] = useState(locationsData);
  const [route, setRoute] = useState("home");

  const Home = () => {
    setRoute("home");
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
  };

  const About = () => {
    setRoute("about");
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
  };

  const LocationPage = () => {
    setRoute("");
    const params = useParams();
    const location = locationsData.find((location) => {
      return location.id === params.id;
    });
    if (!location) return <ErrorPage />;
    return <Location className={styles.section} props={location} />;
  };

  return (
    <>
      <header>
        <Navbar className={styles.section} route={route} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<LocationPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
