import React from "react";
import { MainCard } from "./components/MainCard/MainCard";
import { UsersCard, SalesCard, DateCard } from "./components/TopCards";
import { useDashboardData } from "./hooks/useDashboardData";
import styles from "./dashboard.module.css";

export const Dashboard = () => {
  // const { getData, userList, roleList } = useDashboardData();
  let userList = null;
  let roleList = null;
  let getData = null;
  return (
    <>
      <div className={styles.titleContainer}>
        <h3>Welcome back!</h3>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.cardsContainer}>
        <DateCard />
        <SalesCard />
        <UsersCard totalUsers={userList?.length} />
      </div>
      <div className={styles.cardsContainer}>
        <MainCard
          title={"Roles"}
          listTitle={"ROLE NAME"}
          buttonText={"Add role"}
          list={roleList}
          getData={getData}
        />
        <MainCard
          title={"Users"}
          listTitle={"FULL NAME"}
          buttonText={"Add user"}
          list={userList}
          roleList={roleList}
          getData={getData}
        />
      </div>
    </>
  );
};
