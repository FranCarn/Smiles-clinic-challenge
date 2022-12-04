import { useEffect, useState } from "react";
import { getAllRoles, getAllUsers } from "../../../services/api";

export const useDashboardData = () => {
  const [userList, setUserList] = useState(null);
  const [roleList, setRoleList] = useState(null);

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
