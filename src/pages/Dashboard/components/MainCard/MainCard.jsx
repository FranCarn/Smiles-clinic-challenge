import React from "react";
import { CardModal } from "./components/CardModal/CardModal";
import { Gradient } from "./components/Gradient";
import styles from "./mainCard.module.css";

export const MainCard = ({ title, listTitle, buttonText }) => {
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
        <div className={styles.mainCardInfo}>
          <span>Admin</span>
          <span>99/9/9</span>
        </div>
      </div>
      <div className={styles.mainCardAddButton}>
        <CardModal buttonText={buttonText} title={title} />
      </div>
    </div>
  );
};

// TODO tiene que recibir un array para poder mostrar los roles y tmbn para los usuarios entonces con ese arr se mapea y ta
