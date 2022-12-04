import React, { useEffect, useState } from "react";
import styles from "./cardModal.module.css";
export const RoleModal = ({ handleCancel, handleSave }) => {
  const [userInfo, setUserInfo] = useState({
    englishRole: "",
    spanishRole: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <form onSubmit={(e) => handleSave(e)}>
      <div className={styles.modalInputContainer}>
        <label htmlFor="englishRole">Role Name (english)</label>
        <input
          type="text"
          id="englishRole"
          placeholder="Admin"
          name="englishRole"
          value={userInfo.englishRole}
          className={styles.modalInput}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="spanishRole">Role Name (spanish)</label>
        <input
          type="text"
          id="spanishRole"
          name="spanishRole"
          value={userInfo.spanishRole}
          placeholder="Admin"
          className={styles.modalInput}
          onChange={(e) => handleChange(e)}
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
