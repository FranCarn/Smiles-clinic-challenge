import React from "react";
import { MainCard } from "./components/MainCard/MainCard";
import { UsersCard, SalesCard, DateCard } from "./components/TopCards";
import { useDashboardData } from "./hooks/useDashboardData";
import styles from "./dashboard.module.css";
import { DashboardInformation } from "./components/DashboardInformation/DashboardInformation";

export const Dashboard = () => {
  const { getData, userList, roleList } = useDashboardData();
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
        <DashboardInformation
          getData={getData}
          userList={userList}
          roleList={roleList}
        />
      </div>
    </>
  );
};
