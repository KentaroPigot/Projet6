import React from "react";
import styles from "./Dropdown.module.css";
import { useState } from "react";

function Dropdown({ text, title, className }) {
  const [isDropped, setIsDropped] = useState(false);

  const onClickHandler = () => {
    setIsDropped((prev) => !prev);
  };

  return (
    <div className={`${styles.dropdown} ${styles[className]}`}>
      {/* <div className={styles.dropdown}> */}
      <div className={styles.header} onClick={onClickHandler}>
        <h2>{title}</h2>
        <i
          className={`${"fa-solid fa-chevron-down fa-1x"} ${
            isDropped ? "fa-flip-vertical" : ""
          }`}
        ></i>
      </div>
      {isDropped && (
        <div className={styles.message}>
          {Array.isArray(text) ? (
            <ul>
              {text.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          ) : (
            <p>{text}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
