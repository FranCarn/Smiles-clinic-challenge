import React from "react";
import { useLogin } from "./hooks/useLogin";
import styles from "./login.module.css";
export const Login = () => {
  const {
    handleShowPassword,
    handleSubmit,
    handleInputChange,
    email,
    password,
  } = useLogin();

  return (
    <div className={styles.background}>
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
                value={email}
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
                  value={password}
                  onChange={(e) => handleInputChange(e)}
                  maxLength={30}
                  minLength={7}
                />
                <button onClick={(e) => handleShowPassword(e)}>
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
