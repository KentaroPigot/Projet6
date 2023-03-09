import React from "react";
import styles from "./Tag.module.css";
import PropTypes from "prop-types";

function Tag(props) {
  return (
    <div className={styles.tag}>
      <span>{props.tag}</span>
    </div>
  );
}

Tag.propTypes = {
  tag: PropTypes.string,
};

export default Tag;
