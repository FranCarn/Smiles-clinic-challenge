import React, { useState } from "react";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${isOpen && styles.sidebarOpen} ${styles.sidebarContainer} `}
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        <i className="fa-solid fa-bars" />
      </button>

      <button className={styles.logoutContainer}>
        <span className={!isOpen && styles.showlogoutText}>Log out</span>
        <i className="fa-solid fa-right-from-bracket" />
      </button>
    </div>
  );
};
