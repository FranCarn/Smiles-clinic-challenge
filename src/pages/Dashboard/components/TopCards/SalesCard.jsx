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
      <div className={styles.rightIcons}>
        <i className={`fa-solid fa-arrow-up fa-xl ${styles.saleArrow}`} />
        <div className={styles.saleNumberBox}>+90%</div>
      </div>
    </div>
  );
};
