import React from "react";
import styles from "./Tag.module.css";

function Tag(props) {
  return (
    <div className={styles.tag}>
      <span>{props.tag}</span>
    </div>
  );
}

export default Tag;
