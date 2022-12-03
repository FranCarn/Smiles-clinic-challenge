import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { DateCard, SalesCard, UsersCard } from "./components/TopCards";
import { MainCard } from "./components/MainCard";
import styles from "./dashboard.module.css";

export const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.dashboard}>
        <Navbar />
        <div className={styles.cardsContainer}>
          <DateCard />
          <SalesCard />
          <UsersCard />
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
          />
        </div>
      </div>
    </div>
  );
};
