import React from "react";
import { Clock } from "../../../../components/Clock";
import styles from "./cards.module.css";
import moment from "moment";
import { Weather } from "../../../../components/Weather";

export const DateCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <Clock style={styles.cardTitle} />
        <div>{moment().format("MMMM D | ddd")}</div>
      </div>
      <Weather />
    </div>
  );
};
