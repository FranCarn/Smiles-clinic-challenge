import React from "react";
import Modal from "react-modal";
import { RoleModal } from "./RoleModal";
import { UserModal } from "./UserModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCardModal } from "../../../hooks/useCardModal";
import styles from "./cardModal.module.css";

export const CardModal = ({ buttonText, title }) => {
  const {
    handleSave,
    handleCancel,
    setIsModalOpen,
    isModalOpen,
    customStyles,
    modalTitle,
  } = useCardModal({ title });
  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={2}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
          limit={3}
        />
        <div>
          <button onClick={() => setIsModalOpen(!isModalOpen)}>
            <span>+ {buttonText}</span>
          </button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(!isModalOpen)}
          style={customStyles}
        >
          <div className={styles.modalTitleContainer}>
            <span className={styles.title}>New {modalTitle}</span>
            <button onClick={() => setIsModalOpen(!isModalOpen)}>
              <i className="fa-solid fa-x" />
            </button>
          </div>
          <div className={styles.modalBody}>
            {modalTitle === "User" ? (
              <UserModal handleCancel={handleCancel} handleSave={handleSave} />
            ) : (
              <RoleModal handleCancel={handleCancel} handleSave={handleSave} />
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};
