import React, { useContext } from "react";

import classes from "./WalletStats.module.css";
import Card from "../Card";

import { TransactionContext } from "../../context/TransactionContext";

export default function WalletStats() {
  const { transactionList } = useContext(TransactionContext);

  let income = 0;
  let expense = 0;
  let balance = 0;

  let calculateStats = () => {
    transactionList.forEach((item) => {
      if (item.tag === "income") {
        let value = Number(item.value);
        income += value;
      }

      if (item.tag === "expense") {
        let value = Number(item.value);
        expense += value;
      }

      balance = income - expense;
    });
  };
  calculateStats();

  const blueColorStyle = {
    boxShadow: "0 7px 30px rgba(2, 140, 253, 0.7)",
    backgroundColor: "#008cff",
  };
  const redColorStyle = {
    boxShadow: " 0 7px 30px rgba(253, 53, 80, 0.7)",
    backgroundColor: "#fd3550",
  };
  const greenColorStyle = {
    boxShadow: "0 7px 30px rgba(21, 201, 33, 0.74)",
    backgroundColor: "#15ca20",
  };

  return (
    <div className={classes.walletStatsWrapper}>
      <Card
        title="Balance"
        value={transactionList.length ? balance : 0}
        bgColorStyle={blueColorStyle}
      />
      <Card
        title="Income"
        value={transactionList.length ? income : 0}
        bgColorStyle={redColorStyle}
      />
      <Card
        title="Spend"
        value={transactionList.length ? expense : 0}
        bgColorStyle={greenColorStyle}
      />
    </div>
  );
}
