import { toast } from "react-toastify";
import PropTypes from "prop-types";

export const toastSuccess = (title) => {
  toast.success(`${title} saved!`, {
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
};

export const toastError = (text) => {
  toast.error(text, {
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
};

toastSuccess.propTypes = {
  title: PropTypes.string.isRequired,
};
toastError.propTypes = {
  title: PropTypes.string.isRequired,
};
