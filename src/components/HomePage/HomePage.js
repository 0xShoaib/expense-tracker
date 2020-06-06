import React from "react";
import classes from "./HomePage.module.css";

import WalletStats from "../WalletStats";
import RecentTransactions from "../RecentTransactions";
import TransactionsForm from "../TransactionsForm";

function HomePage() {
  return (
    <div className={classes.HomePage}>
      <WalletStats />
      <div className={classes.Container}>
        <TransactionsForm />
        <RecentTransactions />
      </div>
    </div>
  );
}

export default HomePage;
