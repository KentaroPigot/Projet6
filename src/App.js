import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Location from "./components/Location/Location.js";
import About from "./components/About/About.js";
import Home from "./components/home/Home.js";

import styles from "./App.module.css";

import locationsData from "./assets/data.json";

function App() {
  const [locations, setLocations] = useState(locationsData);
  const [route, setRoute] = useState("home");

  return (
    <>
      <header>
        <Navbar className={styles.section} route={route} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home locations={locations} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/locations/:id"
            element={<Location locations={locations} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
