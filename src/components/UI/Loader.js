import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.container}>
      <svg
        width="100"
        height="100"
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 98.81 116.14"
      >
        <polygon
          className={styles.roofRight}
          points="25.85 0 98.81 42.51 94.4 47.3 73.91 35.04 25.85 0"
          fill="#ec6063"
        />
        <polygon
          className={styles.roofLeft}
          points="25.85 0 0 45.19 50.55 72.19 73.91 35.04 25.85 0"
          fill="#ec6063"
        />
        <polygon
          className={styles.wallLeft}
          points="0 45.19 0 87.51 47.49 116.14 51.13 113.36 50.55 72.19 0 45.19"
          fill="#ec6063"
        />
        <polygon
          className={styles.wallRight}
          points="98.81 42.51 98.81 84.83 94.98 87.51 94.4 47.3 98.81 42.51"
          fill="#ec6063"
        />
        <polygon
          className={styles.door}
          points="67.6 76.6 78.32 70.47 78.32 97.47 67.6 103.79 67.6 76.6"
          fill="#ec6063"
        />
      </svg>
    </div>
  );
}

export default Loader;
