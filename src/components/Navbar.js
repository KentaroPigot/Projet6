import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/LOGO.png";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar(props) {
  const location = useLocation();

  return (
    <div className={`${styles.navbar} ${props.className}`}>
      <Link to="/">
        <img src={logo} alt="Logo kasa" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              className={location.pathname === "/" ? styles.active : ""}
              to="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/about" ? styles.active : ""}
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

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
