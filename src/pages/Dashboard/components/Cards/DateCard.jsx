import React from "react";
import styles from "./cards.module.css";
export const DateCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <div className={styles.cardTitle}>08:23AM</div>
        <div>October 12 | wed</div>
      </div>
      <div>
        <div className={styles.weatherTitle}>12° C</div>
        <div>Buenos Aires</div>
      </div>
    </div>
  );
};
