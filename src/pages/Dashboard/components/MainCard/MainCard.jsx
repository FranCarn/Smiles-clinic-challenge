import React from "react";
import { CreateRole } from "../../../../modals/CreateRole";
import { CreateUser } from "../../../../modals/CreateUser";
import { Gradient } from "./Gradient";
import styles from "./mainCard.module.css";

export const MainCard = ({ title, listTitle, list, getData, roleList }) => {
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
        {list?.map((item, index) => (
          <div key={index} className={styles.mainCardInfo}>
            <span>{item.fullName || item.englishRole}</span>
            <span>{item.created}</span>
          </div>
        ))}
      </div>
      <div className={styles.mainCardAddButton}>
        {title === "Users" ? (
          <CreateUser getData={getData} roleList={roleList} />
        ) : (
          <CreateRole getData={getData} />
        )}
      </div>
    </div>
  );
};
