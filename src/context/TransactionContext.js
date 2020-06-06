import React, { createContext, useReducer, useEffect } from "react";
import { transactionListReducer } from "../reducers/TransactionReducers";

export const TransactionContext = createContext();

const TransactionContextProvider = (props) => {
  const [transactionList, dispatch] = useReducer(
    transactionListReducer,
    [],
    () => {
      let localData = localStorage.getItem("transactionList");

      return localData ? JSON.parse(localData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("transactionList", JSON.stringify(transactionList));
  }, [transactionList]);

  return (
    <TransactionContext.Provider value={{ transactionList, dispatch }}>
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
