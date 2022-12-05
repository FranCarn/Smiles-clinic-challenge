import React, { useContext, useState } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import { Sidebar } from "../Sidebar/Sidebar";
import styles from "./navbar.module.css";
export const Navbar = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(true);
  const { logout } = useContext(AuthContext);
  return (
    <div className={styles.navbar}>
      <Sidebar />
      <div className={styles.titleContainer}>
        <h3>Welcome back!</h3>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.profileContainer}>
        <i className="fa-solid fa-bell" />
        <div className={styles.profilePictureContainer}>
          <div className={styles.profilePicture}></div>
          {isOpenDropdown ? (
            <button onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
              <i className="fa-solid fa-chevron-down" />
            </button>
          ) : (
            <button onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
              <i className="fa-solid fa-chevron-up" />
            </button>
          )}

          <div
            className={`${styles.profileDropdown} ${
              isOpenDropdown && styles.showDropdown
            }`}
          >
            <div>
              <i className="fa-solid fa-user" />
              <span>Profile</span>
            </div>
            <div>
              <i className="fa-solid fa-gear" />
              <span>Settings</span>
            </div>
            <div>
              <i className="fa-solid fa-question" />
              <span>Help</span>
            </div>
            <div>
              <i className="fa-solid fa-right-from-bracket" />
              <button onClick={() => logout()}>Logout </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
