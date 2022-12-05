import React from "react";
import styles from "./cards.module.css";
import PropTypes from "prop-types";

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
        <div className={styles.userNumberBox}>Stable</div>
      </div>
    </div>
  );
};

UsersCard.propTypes = {
  totalUsers: PropTypes.number,
};
