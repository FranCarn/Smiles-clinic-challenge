import { useContext, useState } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";

export const useLogin = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await validLogin(formState);
    login("1");
  };
  return {
    handleShowPassword,
    handleSubmit,
    handleInputChange,
    ...formState,
  };
};
