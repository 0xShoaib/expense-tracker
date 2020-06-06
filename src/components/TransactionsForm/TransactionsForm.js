import React, { useState, useContext } from "react";

import classes from "./TransactionsForm.module.css";
import Form from "../Form";
import { TransactionContext } from "../../context/TransactionContext";

export default function TransactionsForm() {
  const { dispatch } = useContext(TransactionContext);

  const [showIncomeFrom, setShowIncomeForm] = useState(true);
  const [incomeBgColor, setIncomeBgColor] = useState("#fff");
  const [expenseBgColor, setExpenseBgColor] = useState("#f1f1f1");

  const [incomeValue, setIncomeValue] = useState("");
  const [incomeDesc, setIncomeDesc] = useState("");
  const [expenseValue, setExpenseValue] = useState("");
  const [expenseDesc, setExpenseDesc] = useState("");

  const generateDateTime = () => {
    let d = new Date();

    let currentDate = d.toDateString().split(" ");
    let currentTime = d.toLocaleTimeString().split(":");
    let getMeridien = currentTime[2].split(" ")[1];

    let dateNtime = `${currentDate[1]} ${currentDate[2]} - ${currentTime[0]}:${currentTime[1]} ${getMeridien} `;

    return dateNtime;
  };

  const incomeHandler = () => {
    dispatch({
      type: "ADD_INCOME",
      transaction: {
        value: incomeValue,
        desc: incomeDesc,
        createdAt: generateDateTime(),
      },
    });
    setIncomeValue("");
    setIncomeDesc("");
  };

  const expenseHandler = () => {
    dispatch({
      type: "ADD_EXPENSE",
      transaction: {
        value: expenseValue,
        desc: expenseDesc,
        createdAt: generateDateTime(),
      },
    });
    setExpenseValue("");
    setExpenseDesc("");
  };

  return (
    <div className={classes.FormContainer}>
      <div className={classes.FormTitle}>
        <h3
          onClick={() => {
            setShowIncomeForm(true);
            setIncomeBgColor("#fff");
            setExpenseBgColor("#f1f1f1");
          }}
          style={{ backgroundColor: incomeBgColor }}
        >
          Income
        </h3>
        <h3
          onClick={() => {
            setShowIncomeForm(false);
            setIncomeBgColor("#f1f1f1");
            setExpenseBgColor("#fff");
          }}
          style={{ backgroundColor: expenseBgColor }}
        >
          Expense
        </h3>
      </div>
      <div className={classes.FormWrapper}>
        {showIncomeFrom ? (
          <Form
            value={incomeValue}
            desc={incomeDesc}
            labelName="Income"
            btnName="Income"
            btnBgColor={"rgb(21, 202, 32)"}
            valueHandler={setIncomeValue}
            descHandler={setIncomeDesc}
            clickHandler={incomeHandler}
          />
        ) : (
          <Form
            value={expenseValue}
            desc={expenseDesc}
            labelName="Expense"
            btnName="Expense"
            btnBgColor={"rgb(253, 53, 80)"}
            valueHandler={setExpenseValue}
            descHandler={setExpenseDesc}
            clickHandler={expenseHandler}
          />
        )}
      </div>
    </div>
  );
}
