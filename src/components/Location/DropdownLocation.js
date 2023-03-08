import React from "react";
import styles from "./DropdownLocation.module.css";
import { useState } from "react";

function DropdownLocation(props) {
  const [isDropped, setIsDropped] = useState(false);

  const onClickHandler = () => {
    setIsDropped((prev) => !prev);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.header} onClick={onClickHandler}>
        <h2>{props.title}</h2>
        <i
          className={`${"fa-solid fa-chevron-down fa-1x"} ${
            isDropped && "fa-flip-vertical"
          }`}
        ></i>
      </div>
      {isDropped && (
        <div className={styles.message}>
          {Array.isArray(props.text) ? (
            <ul>
              {props.text.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          ) : (
            <p>{props.text}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DropdownLocation;
