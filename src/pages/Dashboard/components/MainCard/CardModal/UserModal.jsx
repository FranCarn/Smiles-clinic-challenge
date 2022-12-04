import React from "react";
import { useUserModal } from "../../../hooks/useUserModal";
import styles from "./cardModal.module.css";

export const UserModal = ({ handleCancel, handleSaveNewUser }) => {
  const { handleChange, userInfo, roles } = useUserModal();
  const { fullName, birthDate, country, email, password, selectRoles } =
    userInfo;
  console.log(roles);
  return (
    <form onSubmit={(event) => handleSaveNewUser(event, userInfo)}>
      <div className={styles.modalInputContainer}>
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          placeholder="John Doe"
          className={styles.modalInput}
          onChange={(event) => handleChange(event)}
          name="fullName"
          maxLength={40}
        />
        <label htmlFor="birthDate">Birth date</label>
        <input
          type="date"
          id="birthDate"
          className={styles.modalInput}
          value={birthDate}
          onChange={(event) => handleChange(event)}
          max="2021-12-31"
          min="1920-01-01"
          name="birthDate"
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          placeholder="Afghanistan"
          className={styles.modalInput}
          value={country}
          onChange={(event) => handleChange(event)}
          name="country"
          maxLength={40}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="theiremail@example.com"
          className={styles.modalInput}
          value={email}
          onChange={(event) => handleChange(event)}
          name="email"
          maxLength={40}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="*****************"
          className={styles.modalInput}
          value={password}
          onChange={(event) => handleChange(event)}
          name="password"
          maxLength={40}
          minLength={7}
        />
        <span className={styles.title}>Assigned Roles</span>
        <select
          name="selectRoles"
          id="selectRoles"
          className={styles.modalSelectRoles}
          value={selectRoles}
          onChange={(event) => handleChange(event)}
        >
          {roles?.map((item) => (
            <option
              key={item.englishRole || item.spanishRole}
              value={item.englishRole || item.spanishRole}
            >
              {item.englishRole || item.spanishRole}
            </option>
          ))}
        </select>
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
