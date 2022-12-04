import React, { useState } from "react";
import { CreateRole } from "../../../../modals/CreateRole";
import { CreateUser } from "../../../../modals/CreateUser";
import { Gradient } from "./Gradient";
import styles from "./mainCard.module.css";

export const MainCard = ({
  title,
  listTitle,
  list,
  getData,
  roleList,
  type,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
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
            <span>{item.FULLNAME || item.ENGLISHROLE}</span>
            <span>{item.created}</span>
          </div>
        ))}
      </div>

      <div className={styles.mainCardAddButton}>
        {type === "createUsers" && (
          <CreateUser
            getData={getData}
            roleList={roleList}
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isSaving={isSaving}
            setIsSaving={setIsSaving}
          />
        )}

        {type === "createRoles" && (
          <CreateRole
            getData={getData}
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isSaving={isSaving}
            setIsSaving={setIsSaving}
          />
        )}
      </div>
    </div>
  );
};
