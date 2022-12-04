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
      <div className={styles.sidebarTopButtons}>
        <span className={`${!isOpen && styles.showText} ${styles.brandTitle}`}>
          Smiles clinic panel
        </span>
        <button onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars fa-xl" />
        </button>
      </div>

      <button
        className={`${styles.logoutContainer} ${styles.sidebarBottomButtons}`}
        onClick={() => logout()}
        disabled={!isOpen}
      >
        <span
          className={`${!isOpen && styles.showText} ${
            styles.sidebarLogoutText
          }`}
        >
          Logout
        </span>
        <i className="fa-solid fa-right-from-bracket" />
      </button>
    </div>
  );
};
