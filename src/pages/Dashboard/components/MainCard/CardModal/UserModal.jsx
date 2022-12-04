import React from "react";
import { useUserModal } from "../../../hooks/useUserModal";
import styles from "./cardModal.module.css";

export const UserModal = () => {
  const {
    handleChange,
    fullName,
    birthDate,
    country,
    email,
    password,
    selectRoles,
  } = useUserModal();
  return (
    <div className={styles.modalInputContainer}>
      <label htmlFor="fullName">Full name</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        placeholder="John Doe"
        className={styles.modalInput}
        onChange={(e) => handleChange(e)}
        name="fullName"
      />
      <label htmlFor="birthDate">Birth date</label>
      <input
        type="date"
        id="birthDate"
        className={styles.modalInput}
        value={birthDate}
        onChange={(e) => handleChange(e)}
        max="2021-12-31"
        name="birthDate"
      />
      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        placeholder="Afghanistan"
        className={styles.modalInput}
        value={country}
        onChange={(e) => handleChange(e)}
        name="country"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="theiremail@example.com"
        className={styles.modalInput}
        value={email}
        onChange={(e) => handleChange(e)}
        name="email"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="*****************"
        className={styles.modalInput}
        value={password}
        onChange={(e) => handleChange(e)}
        name="password"
      />
      <span className={styles.title}>Assigned Roles</span>
      <select
        name="selectRoles"
        id="selectRoles"
        className={styles.modalSelectRoles}
        value={selectRoles}
        onChange={(e) => handleChange(e)}
      >
        <option value="admin">Admin</option>
        <option value="dentist">Dentist</option>
        <option value="patient">Patient</option>
      </select>
    </div>
  );
};
