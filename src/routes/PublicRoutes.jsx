import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../auth/context/AuthContext";

export const PublicRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext);

  if (!logged) return children;
  return <Navigate to="/clinic/home" />;
};
PublicRoutes.propTypes = {
  children: PropTypes.object.isRequired,
};
