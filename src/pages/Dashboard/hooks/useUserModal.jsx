import moment from "moment/moment";
import React, { useEffect, useState } from "react";

export const useUserModal = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    country: "",
    birthDate: "1999-05-17",
    email: "",
    password: "",
    selectRoles: "patient",
    created: moment().format("DD-MM-YYYY"),
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return {
    handleChange,
    ...userInfo,
    userInfo,
  };
};
