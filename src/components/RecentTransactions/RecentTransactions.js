import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ListItem from "../ListItem";
import classes from "./RecentTransactions.module.css";
import { TransactionContext } from "../../context/TransactionContext";

export default function RecentTransactions() {
  const { transactionList } = useContext(TransactionContext);

  let transactionData = transactionList.slice(0, 3);

  const list = () =>
    transactionData.map((item, index) => {
      return (
        <ListItem
          key={index}
          sign={item.tag === "income" ? "+" : "-"}
          description={item.desc}
          value={item.value}
          color={
            item.tag === "income" ? "rgb(21, 202, 32)" : "rgb(253, 53, 80)"
          }
          createdAt={item.createdAt}
        />
      );
    });

  return (
    <div className={classes.transactionWrapper}>
      <div className={classes.transactionHeading}>
        <h3>Recent Transactions</h3>
        <Link to="/transactions">View all</Link>
      </div>
      <div className={classes.listWrapper}>
        {transactionData.length ? (
          list()
        ) : (
          <p className="Loading">No Transactions Yet...</p>
        )}
      </div>
    </div>
  );
}
