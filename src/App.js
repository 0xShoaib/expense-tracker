import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage/index";
import TransactionList from "./components/TranscationList";

import TransactionContextProvider from "./context/TransactionContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <TransactionContextProvider>
            <Route exact path="/transactions" component={TransactionList} />
            <Route exact path="/" component={HomePage} />
          </TransactionContextProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
