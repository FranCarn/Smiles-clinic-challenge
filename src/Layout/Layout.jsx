import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      {/* <Sidebar /> */}
      <div className={styles.layout}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};
