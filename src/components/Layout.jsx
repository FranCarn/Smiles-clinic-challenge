import React from "react";
import { Navbar } from "./Navbar/Navbar";
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
