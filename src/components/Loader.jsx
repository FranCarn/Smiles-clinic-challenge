import React from "react";
import { ClipLoader } from "react-spinners";
import styles from "../index.module.css";
export const Loader = ({ width }) => {
  return (
    <div className={styles.loader}>
      <ClipLoader size={width} color={"#000"} />
    </div>
  );
};
