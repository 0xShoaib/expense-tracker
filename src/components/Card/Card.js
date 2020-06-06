import React from "react";
import { FaRupeeSign } from "react-icons/fa";

import classes from "./Card.module.css";

function Card({ title, value, bgColorStyle }) {
  return (
    <div
      className={classes.card}
      style={{
        backgroundColor: bgColorStyle.backgroundColor,
        boxShadow: bgColorStyle.boxShadow,
      }}
    >
      <h6>{title}</h6>
      <h2>
        <FaRupeeSign />
        {value}
      </h2>
    </div>
  );
}

export default Card;
