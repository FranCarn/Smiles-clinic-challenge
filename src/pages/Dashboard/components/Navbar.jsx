import React from "react";
import styles from "./navbar.module.css";
export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.titleContainer}>
        <h3>Welcome back!</h3>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.profileContainer}>
        <i className="fa-solid fa-bell" />
        <div className={styles.profilePictureContainer}>
          <div className={styles.profilePicture}></div>
          <i className="fa-solid fa-chevron-down" />
        </div>
      </div>
    </div>
  );
};
