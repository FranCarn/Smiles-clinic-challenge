import React from "react";
import { ToastContainer } from "react-toastify";
import { useLogin } from "./hooks/useLogin";
import styles from "./login.module.css";
export const Login = () => {
  const {
    handleShowPassword,
    handleSubmit,
    handleInputChange,
    formState,
    showPassword,
  } = useLogin();

  return (
    <div className={styles.background}>
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
      <div className={styles.loginContainer}>
        <div className={styles.formContainer}>
          <h2 className={styles.clinicName}>Smiles Clinic</h2>
          <hgroup>
            <h1>Log in</h1>
            <h3>Welcome Back! please enter your info</h3>
          </hgroup>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@example.com"
                required
                value={formState.email}
                onChange={(e) => handleInputChange(e)}
                maxLength={50}
                minLength={7}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="password">Password</label>
              <div className={styles.passwordContainer}>
                <input
                  type={!showPassword ? "password" : "text"}
                  id="password"
                  placeholder="****************"
                  required
                  name="password"
                  value={formState.password}
                  onChange={(e) => handleInputChange(e)}
                  maxLength={30}
                  minLength={7}
                />
                <button type="reset" onClick={() => handleShowPassword()}>
                  <i className="fa-solid fa-eye-slash" />
                </button>
              </div>
              <button className={styles.loginButton} type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
