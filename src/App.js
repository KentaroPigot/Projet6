import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Location from "./components/Location/Location.js";
import About from "./components/About/About.js";
import Home from "./components/home/Home.js";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";

import styles from "./App.module.css";

import locationsData from "./assets/data.json";

function App() {
  const [locations, setLocations] = useState(locationsData);

  const [route, setRoute] = useState("home");

  const updateRoute = (route) => {
    setRoute(route);
  };

  return (
    <>
      <header>
        <Navbar className={styles.section} route={route} />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home locations={locations} routeChange={updateRoute} />}
          />
          <Route path="/about" element={<About routeChange={updateRoute} />} />
          <Route
            path="/locations/:id"
            element={
              <Location locations={locations} routeChange={updateRoute} />
            }
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
