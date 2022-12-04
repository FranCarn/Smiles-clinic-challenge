import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { getAllRoles } from "../../../services/api";

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
  const [roles, setRoles] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  useEffect(() => {
    const roleList = async () => {
      const res = await getAllRoles();
      setRoles(res);
    };
    roleList();
  }, []);

  return {
    handleChange,
    userInfo,
    roles,
  };
};
