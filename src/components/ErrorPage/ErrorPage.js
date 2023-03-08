import React from "react";
import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <Link className={styles.link} to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default ErrorPage;
