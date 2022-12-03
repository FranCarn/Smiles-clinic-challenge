import React from "react";
import styles from "../cardModal.module.css";
export const UserModal = () => {
  return (
    <div className={styles.modalInputContainer}>
      <label htmlFor="fullName">Full name</label>
      <input
        type="text"
        id="fullName"
        placeholder="John Doe"
        className={styles.modalInput}
      />
      <label htmlFor="birthDate">Birth date</label>
      <input type="date" id="birthDate" className={styles.modalInput} />
      <label htmlFor="Country">Country</label>
      <input
        type="text"
        id="Country"
        placeholder="Afghanistan"
        className={styles.modalInput}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="theiremail@example.com"
        className={styles.modalInput}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="*****************"
        className={styles.modalInput}
      />
    </div>
  );
};
