import React from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";

export const PrivateRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);

  if (logged) return children;
  return <Navigate to="/login" />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.object.isRequired,
};
