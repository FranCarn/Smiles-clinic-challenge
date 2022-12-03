import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { DateCard, SalesCard, UsersCard } from "./components/Cards";

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
          <div className={styles.mainCardContainer}>
            <div className={styles.roleGradient}></div>
            <h2 className={styles.mainCardTitle}>Roles</h2>
            <div className={styles.mainCardInfoContainer}>
              <div className={styles.mainCardInfo}>
                <span>ROLE NAME</span>
                <span>CREATED</span>
              </div>
            </div>
            <div className={styles.mainCardInfoContainer}>
              <div className={styles.mainCardInfo}>
                <span>Admin</span>
                <span>99/9/9</span>
              </div>
            </div>
            <button>
              <span>+ Add role</span>
            </button>
          </div>
          <div className={styles.mainCardContainer}>
            <div className={styles.roleGradient}></div>
            <h2 className={styles.mainCardTitle}>Users</h2>
            <div>
              <span>FULL NAME</span>
              <span>CREATED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
