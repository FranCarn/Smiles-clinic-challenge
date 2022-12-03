import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./cardModal.module.css";
import { RoleModal } from "./components/RoleModal";
import { UserModal } from "./components/UserModal";
export const CardModal = ({ buttonText, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let modalTitle = title.substr(0, title.length - 1);
  const handleSave = () => {
    setIsModalOpen(!isModalOpen);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "25px 35px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fafafa",
      maxHeight: "90%",
      maxWidth: "90%",
      width: "25rem",
      borderRadius: "20px",
    },
    overlay: {
      zIndex: 100,
      backgroundColor: "rgba(70, 70, 70, 0.5)",
    },
  };
  Modal.setAppElement("#root");
  return (
    <>
      <div>
        <div>
          <button onClick={() => setIsModalOpen(!isModalOpen)}>
            {buttonText}
          </button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(!isModalOpen)}
          style={customStyles}
        >
          <div className={styles.modalTitle}>
            <span>New {modalTitle}</span>
            <button onClick={() => setIsModalOpen(!isModalOpen)}>
              <i className="fa-solid fa-x" />
            </button>
          </div>
          <div className={styles.modalBody}>
            {modalTitle === "User" ? <UserModal /> : <RoleModal />}
          </div>
          <div className={styles.modalButtonGroup}>
            <button
              className={styles.modalCancelButton}
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Cancel
            </button>
            <button
              className={styles.modalSaveButton}
              onClick={() => handleSave()}
            >
              Save
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};
