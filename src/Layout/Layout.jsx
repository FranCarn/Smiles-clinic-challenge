import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layout}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};
