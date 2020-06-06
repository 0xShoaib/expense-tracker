import React from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logoWrapper}>
      <Link to="/">
        <h1 className={classes.logoText}>TrackIt</h1>
      </Link>
    </div>
  );
}

export default Logo;
