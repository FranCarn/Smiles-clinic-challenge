import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/api";

export const useDashboard = () => {
  const [userList, setUserList] = useState(null);

  const getUserList = async () => {
    const getUsers = await getAllUsers();
    console.log(getUsers);
    setUserList(getUsers);
  };

  useEffect(() => {
    getUserList();
    console.log(userList);
  }, []);

  return { userList };
};
