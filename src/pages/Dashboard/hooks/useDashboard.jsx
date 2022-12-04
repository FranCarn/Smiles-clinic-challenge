import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/api";

export const useDashboard = () => {
  const [list, setUserList] = useState(null);

  const getUserList = async () => {
    const getUsers = await getAllUsers();
    setUserList(getUsers);
  };
  useEffect(() => {
    getUserList();
  }, []);

  return list;
};
