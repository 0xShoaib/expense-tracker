import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Menu.module.css";

export default function Menu() {
  const [menu, setMenu] = useState([classes.Menu]);
  const menuClickHandler = () => {
    let newClassArr = [classes.Menu, classes.Active];
    menu.includes(classes.Active)
      ? setMenu([classes.Menu])
      : setMenu(newClassArr);
  };

  return (
    <>
      <ul className={menu.join(" ")}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
      </ul>
      <div className={classes.MenuIcon}>
        <p onClick={menuClickHandler}>Menu</p>
      </div>
    </>
  );
}
