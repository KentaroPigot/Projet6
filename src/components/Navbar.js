import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className={`${styles.navbar} ${props.className}`}>
      <Link to="/">
        <img src={logo} alt="Logo kasa" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              className={props.route === "home" ? styles.active : ""}
              to="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={props.route === "about" ? styles.active : ""}
              to="/about"
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
