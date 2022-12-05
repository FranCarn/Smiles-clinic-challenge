import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../auth/context/AuthContext";
import { validLogin } from "../../../services/api";

export const useLogin = () => {
  const [formState, setFormState] = useState({ password: "", email: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await validLogin(formState);
    if (res.length) return login(res[0]._id, res[0].SELECTROLES);
    return toast.error("Usuario o contraseña incorrecta");
  };

  return {
    handleShowPassword,
    handleSubmit,
    handleInputChange,
    formState,
    showPassword,
  };
};
