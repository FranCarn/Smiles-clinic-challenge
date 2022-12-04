import React from "react";
import { CardModal } from "./CardModal/CardModal";
import { Gradient } from "./Gradient";
import styles from "./mainCard.module.css";

export const MainCard = ({ title, listTitle, buttonText, list }) => {
  return (
    <div className={styles.mainCardContainer}>
      {title === "Users" ? (
        <Gradient style={styles.userGradient} />
      ) : (
        <Gradient style={styles.roleGradient} />
      )}
      <h2 className={styles.mainCardTitle}>{title}</h2>
      <div className={styles.mainCardInfoContainer}>
        <div className={styles.mainCardInfo}>
          <span>{listTitle}</span>
          <span>CREATED</span>
        </div>
      </div>
      <div className={styles.mainCardInfoContainer}>
        {list?.map((item) => (
          <div className={styles.mainCardInfo}>
            <span>{item.name}</span>
            <span>{item.created}</span>
          </div>
        ))}
      </div>
      <div className={styles.mainCardAddButton}>
        <CardModal buttonText={buttonText} title={title} />
      </div>
    </div>
  );
};
