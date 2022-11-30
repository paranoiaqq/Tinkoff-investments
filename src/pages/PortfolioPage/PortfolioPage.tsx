import React from "react";
import styles from "./PortfolioPage.module.scss";
import PortfolioChart from "../../components/PortfolioChart/PortfolioChart";
import Accounts from "../../components/Accounts/Accounts";

function PortfolioPage() {
  return (
    <div className={styles.container}>
      <Accounts />
      <PortfolioChart />
    </div>
  );
}

export default PortfolioPage;
