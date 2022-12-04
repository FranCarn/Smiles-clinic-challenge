import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./cardModal.module.css";
import moment from "moment";
import { saveNewRole } from "../services/api";
import { toastError, toastSuccess } from "../utilities/toast";
import { customStyles } from "../utilities/modalCustomStyles";

export const CreateRole = ({ getData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleInfo, setRoleInfo] = useState({
    englishRole: "",
    spanishRole: "",
    created: moment().format("DD-MM-YYYY"),
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setRoleInfo({ ...roleInfo, [name]: value });
  };

  const handleSaveNewRole = async (event, roleInfo) => {
    event.preventDefault();
    const res = await saveNewRole(roleInfo);
    if (!res) return toastError("All fields are required");
    await getData();
    toastSuccess("Role");
    setIsModalOpen(!isModalOpen);
  };
  const handleCancel = () => {
    toastError("Role creation canceled...");
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(!isModalOpen)}>
        <span>+ Add Role</span>
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(!isModalOpen)}
        style={customStyles}
      >
        <div className={styles.modalTitleContainer}>
          <span className={styles.title}>New Role</span>
          <button onClick={() => setIsModalOpen(!isModalOpen)}>
            <i className="fa-solid fa-x" />
          </button>
        </div>
        <div className={styles.modalBody}>
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
                required
                max={30}
                min={4}
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
                required
                max={30}
                min={4}
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
        </div>
      </Modal>
    </div>
  );
};
