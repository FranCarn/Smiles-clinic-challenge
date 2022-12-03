import React from "react";
import styles from "./cards.module.css";
export const UsersCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <div>Last 30 days</div>
        <div className={styles.cardTitle}>42</div>
        <div>New users</div>
      </div>
      <div>
        <div>FLECHITA</div>
        <div>Stable</div>
      </div>
    </div>
  );
};
