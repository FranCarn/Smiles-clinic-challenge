import React from "react";
import styles from "./cards.module.css";
export const UsersCard = ({ totalUsers = 0 }) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <div>Last 30 days</div>
        <div className={styles.cardTitle}>{totalUsers}</div>
        <div>New users</div>
      </div>
      <div className={styles.rightIcons}>
        <i
          className={`fa-solid fa-arrow-right fa-xl ${styles.cardArrowUser}`}
        />
        <div>Stable</div>
      </div>
    </div>
  );
};
