import { useEffect, useState } from "react";
import { getAllRoles, getAllUsers } from "../../../services/api";

export const useDashboardData = () => {
  const [userList, setUserList] = useState([]);
  const [roleList, setRoleList] = useState([]);

  const getData = async () => {
    const getUsers = await getAllUsers();
    const getRoles = await getAllRoles();
    setUserList(getUsers);
    setRoleList(getRoles);
  };

  useEffect(() => {
    getData();
  }, []);

  return { getData, userList, roleList };
};
