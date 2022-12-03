import React from "react";
import styles from "./cards.module.css";
export const SalesCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <div>Last 30 days</div>
        <div className={styles.cardTitle}>2.300</div>
        <div>On going sales</div>
      </div>
      <div>
        <div>FLECHITA</div>
        <div>+90%</div>
      </div>
    </div>
  );
};
