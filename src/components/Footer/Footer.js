import React from "react";
import logo from "../../assets/LOGOblanc.png";
import "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo kasa en blanc sur noir" />
      <h2>© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

export default Footer;
