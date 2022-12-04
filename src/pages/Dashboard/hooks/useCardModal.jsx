import { useState } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";

export const useCardModal = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let modalTitle = title.substr(0, title.length - 1);

  const handleSave = () => {
    toast.success(`${modalTitle} saved!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      closeButton: false,
    });
    setIsModalOpen(!isModalOpen);
  };
  const handleCancel = () => {
    toast.error(`${modalTitle} saved cancel...`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      closeButton: false,
    });
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
      backgroundColor: "#ffffff",
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

  return {
    handleSave,
    handleCancel,
    setIsModalOpen,
    isModalOpen,
    customStyles,
    modalTitle,
  };
};
