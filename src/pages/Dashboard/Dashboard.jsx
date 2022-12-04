import React from "react";
import { MainCard } from "./components/MainCard/MainCard";
import { UsersCard, SalesCard, DateCard } from "./components/TopCards";
import { useDashboard } from "./hooks/useDashboard";
import styles from "./dashboard.module.css";

export const Dashboard = () => {
  const { list } = useDashboard();
  return (
    <>
      <div className={styles.cardsContainer}>
        <DateCard />
        <SalesCard />
        <UsersCard totalUsers={list?.length} />
      </div>
      <div className={styles.cardsContainer}>
        <MainCard
          title={"Roles"}
          listTitle={"ROLE NAME"}
          buttonText={"Add role"}
        />
        <MainCard
          title={"Users"}
          listTitle={"FULL NAME"}
          buttonText={"Add user"}
          list={list}
        />
      </div>
    </>
  );
};
