import React from "react";

import Logo from "../Logo";
import Menu from "../Menu";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={classes.Navbar}>
      <Logo />
      <Menu />
    </nav>
  );
}
