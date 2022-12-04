import React, { useEffect, useState } from "react";
import styles from "./cardModal.module.css";
export const RoleModal = ({ handleCancel, handleSaveNewRole }) => {
  const [roleInfo, setRoleInfo] = useState({
    englishRole: "",
    spanishRole: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRoleInfo({ ...roleInfo, [name]: value });
  };

  return (
    <form onSubmit={(event) => handleSaveNewRole(event, roleInfo)}>
      <div className={styles.modalInputContainer}>
        <label htmlFor="englishRole">Role Name (english)</label>
        <input
          type="text"
          id="englishRole"
          placeholder="Admin"
          name="englishRole"
          value={roleInfo.englishRole}
          className={styles.modalInput}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="spanishRole">Role Name (spanish)</label>
        <input
          type="text"
          id="spanishRole"
          name="spanishRole"
          value={roleInfo.spanishRole}
          placeholder="Admin"
          className={styles.modalInput}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <div className={styles.modalButtonGroup}>
        <button
          type="reset"
          className={styles.modalCancelButton}
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
        <button type="submit" className={styles.modalSaveButton}>
          Save
        </button>
      </div>
    </form>
  );
};
