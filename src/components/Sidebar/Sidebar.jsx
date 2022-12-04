import React, { useState, useContext } from "react";
import styles from "./sidebar.module.css";
import { AuthContext } from "../../auth/context/AuthContext";
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  return (
    <div
      className={`${isOpen && styles.sidebarOpen} ${styles.sidebarContainer} `}
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        <i className="fa-solid fa-bars" />
      </button>

      <button className={styles.logoutContainer} onClick={() => logout()}>
        <span className={!isOpen && styles.showlogoutText}>Log out</span>
        <i className="fa-solid fa-right-from-bracket" />
      </button>
    </div>
  );
};
