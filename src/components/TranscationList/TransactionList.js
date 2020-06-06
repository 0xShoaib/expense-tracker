import React, { useContext } from "react";
import classes from "./TransactionList.module.css";

import { TransactionContext } from "../../context/TransactionContext";
import ListItem from "../ListItem";

export default function TransactionList() {
  const { transactionList } = useContext(TransactionContext);

  const list = () =>
    transactionList.map((item, index) => {
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
    <div className={classes.TransactionListWrapper}>
      {transactionList.length ? (
        list()
      ) : (
        <p className="Loading">No Transactions Yet...</p>
      )}
    </div>
  );
}
