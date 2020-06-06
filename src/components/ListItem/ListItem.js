import React from "react";
import { FaRupeeSign } from "react-icons/fa";

import classes from "./ListItem.module.css";

function ListItem({ sign, description, value, color, createdAt }) {
  return (
    <div className={classes.ListItem}>
      <div>
        <h4>{description}</h4>
        <p>{createdAt}</p>
      </div>
      <h4 style={{ color: color }} className={classes.Value}>
        {sign} <FaRupeeSign />
        {value}
      </h4>
    </div>
  );
}

export default ListItem;
