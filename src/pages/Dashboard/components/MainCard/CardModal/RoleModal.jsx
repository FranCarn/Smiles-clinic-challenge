import React from "react";
import styles from "./cardModal.module.css";
export const RoleModal = () => {
  return (
    <div className={styles.modalInputContainer}>
      <label htmlFor="englishRole">Role Name (english)</label>
      <input
        type="text"
        id="englishRole"
        placeholder="Admin"
        className={styles.modalInput}
      />
      <label htmlFor="spanishRole">Role Name (spanish)</label>
      <input
        type="text"
        id="spanishRole"
        placeholder="Admin"
        className={styles.modalInput}
      />
    </div>
  );
};
