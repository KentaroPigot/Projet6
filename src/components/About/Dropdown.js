import React from "react";
import styles from "./Dropdown.module.css";
import { useState } from "react";

function Dropdown(props) {
  const [isDropped, setIsDropped] = useState(false);

  const onClickHandler = () => {
    setIsDropped((prev) => !prev);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.header} onClick={onClickHandler}>
        <h2>{props.title}</h2>
        <i
          className={`${"fa-solid fa-chevron-down fa-3x"} ${
            isDropped && "fa-flip-vertical"
          }`}
        ></i>
      </div>
      {isDropped && (
        <div className={styles.message}>
          <p>{props.text}</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
