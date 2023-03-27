import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/LOGO.png";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Section from "../UI/Section";

function Navbar() {
  const location = useLocation();

  return (
    <Section className={styles.navbar}>
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
    </Section>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
