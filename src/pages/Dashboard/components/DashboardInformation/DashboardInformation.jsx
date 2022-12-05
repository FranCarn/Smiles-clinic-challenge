import React from "react";
import { classifyUsers } from "../../../../utilities/ClassifyUsers";
import { MainCard } from "../MainCard/MainCard";
import PropTypes from "prop-types";

export const DashboardInformation = ({ userList, roleList, getData }) => {
  const { dentistsList, usersList } = classifyUsers(userList);
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <h1> Error on Auth info...</h1>;

  if (user.role === "ADMIN")
    return (
      <>
        <MainCard
          title={"Roles"}
          listTitle={"ROLE NAME"}
          buttonText={"Add role"}
          list={roleList}
          getData={getData}
          type="createRoles"
        />
        <MainCard
          title={"Users"}
          listTitle={"FULL NAME"}
          buttonText={"Add user"}
          list={userList}
          roleList={roleList}
          getData={getData}
          type="createUsers"
        />
      </>
    );

  if (user.role === "DENTIST")
    return (
      <>
        <MainCard
          title={"Dentist"}
          listTitle={"ROLE NAME"}
          list={dentistsList}
        />
        <MainCard title={"Patients"} listTitle={"FULL NAME"} list={usersList} />
      </>
    );

  return null;
};

DashboardInformation.propTypes = {
  userList: PropTypes.array.isRequired,
  roleList: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired,
};
