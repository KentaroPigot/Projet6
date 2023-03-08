import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(props) {
  const [route, setRoute] = useState("home");

  const onChangeHandler = (e) => {
    setRoute(e.target.innerHTML);
  };

  return (
    <div className={`${styles.navbar} ${props.className}`}>
      <Link to="/">
        <img src={logo} alt="Logo kasa" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              className={route === "Accueil" ? styles.active : ""}
              to="/"
              onClick={onChangeHandler}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={route === "A Propos" ? styles.active : ""}
              to="/about"
              onClick={onChangeHandler}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
