import React from "react";
import PropTypes from "prop-types";

export const Gradient = ({ style }) => {
  return <div className={style}></div>;
};

Gradient.propTypes = {
  style: PropTypes.string.isRequired,
};
