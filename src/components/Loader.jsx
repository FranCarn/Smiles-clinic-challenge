import React from "react";
import { ClipLoader } from "react-spinners";
import styles from "../index.module.css";
import PropTypes from "prop-types";

export const Loader = ({ width }) => {
  return (
    <div className={styles.loader}>
      <ClipLoader size={width} color={"#000"} />
    </div>
  );
};

Loader.propTypes = {
  width: PropTypes.number.isRequired,
};
