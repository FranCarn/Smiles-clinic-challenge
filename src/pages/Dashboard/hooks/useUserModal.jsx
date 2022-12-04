import React, { useEffect, useState } from "react";

export const useUserModal = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    country: "",
    birthDate: "1999-05-17",
    email: "",
    password: "",
    selectRoles: "patient",
  });

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return {
    handleChange,
    ...userInfo,
  };
};
