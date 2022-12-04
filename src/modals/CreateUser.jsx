import React, { useState } from "react";
import moment from "moment";
import Modal from "react-modal";
import { toastError, toastSuccess } from "../utilities/toast";
import { customStyles } from "../utilities/modalCustomStyles";
import styles from "./cardModal.module.css";
import { saveNewUser } from "../services/api";

export const CreateUser = ({ getData, roleList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    country: "",
    birthDate: "1999-05-17",
    email: "",
    password: "",
    selectRoles: "patient",
    created: moment().format("DD-MM-YYYY"),
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSaveNewUser = async (event, userInfo) => {
    event.preventDefault();
    const res = await saveNewUser(userInfo);
    if (!res) return toastError("All fields are required");
    await getData();
    toastSuccess("User");
    setIsModalOpen(!isModalOpen);
  };

  const handleCancel = () => {
    toastError("User creation canceled");
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(!isModalOpen)}>
        <span>+ Add User</span>
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(!isModalOpen)}
        style={customStyles}
      >
        <div className={styles.modalTitleContainer}>
          <span className={styles.title}>New User</span>
          <button onClick={() => setIsModalOpen(!isModalOpen)}>
            <i className="fa-solid fa-x" />
          </button>
        </div>
        <div className={styles.modalBody}>
          <form onSubmit={(event) => handleSaveNewUser(event, userInfo)}>
            <div className={styles.modalInputContainer}>
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                id="fullName"
                value={userInfo.fullName}
                placeholder="John Doe"
                className={styles.modalInput}
                onChange={(event) => handleChange(event)}
                name="fullName"
                maxLength={40}
                min={3}
                required
              />
              <label htmlFor="birthDate">Birth date</label>
              <input
                type="date"
                id="birthDate"
                className={styles.modalInput}
                value={userInfo.birthDate}
                onChange={(event) => handleChange(event)}
                max="2021-12-31"
                min="1920-01-01"
                name="birthDate"
                required
              />
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                placeholder="Afghanistan"
                className={styles.modalInput}
                value={userInfo.country}
                onChange={(event) => handleChange(event)}
                name="country"
                maxLength={40}
                min={4}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="theiremail@example.com"
                className={styles.modalInput}
                value={userInfo.email}
                onChange={(event) => handleChange(event)}
                name="email"
                maxLength={40}
                min={5}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="*****************"
                className={styles.modalInput}
                value={userInfo.password}
                onChange={(event) => handleChange(event)}
                name="password"
                maxLength={40}
                minLength={7}
                required
              />
              <span className={styles.title}>Assigned Roles</span>
              <select
                name="selectRoles"
                id="selectRoles"
                className={styles.modalSelectRoles}
                value={userInfo.selectRoles}
                onChange={(event) => handleChange(event)}
                required
              >
                {roleList?.map((item, index) => (
                  <option
                    key={index}
                    value={item.englishRole || item.spanishRole}
                  >
                    {`${item.englishRole} (${item.spanishRole})`}
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
        </div>
      </Modal>
    </div>
  );
};