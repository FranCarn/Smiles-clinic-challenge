import React from "react";
import styles from "./login.module.css";
export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado");
  };

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
                placeholder="youremail@example.com"
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="****************"
                required
              />
            </div>
            <button className={styles.loginButton} type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
