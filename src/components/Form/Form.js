import React from "react";
import classes from "./Form.module.css";

export default function Form({
  value,
  desc,
  labelName,
  btnName,
  btnBgColor,
  valueHandler,
  descHandler,
  clickHandler,
}) {
  return (
    <div className={classes.Form}>
      <div className={classes.formGroup}>
        <label htmlFor="value">{labelName}</label>
        <input
          type="number"
          min="1"
          id="value"
          placeholder="In Rupees"
          value={value}
          onChange={(e) => {
            valueHandler(e.target.value);
          }}
        />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          id="desc"
          value={desc}
          onChange={(e) => {
            descHandler(e.target.value);
          }}
        />
      </div>

      <div className={classes.formGroup}>
        <button style={{ backgroundColor: btnBgColor }} onClick={clickHandler}>
          Add {btnName}
        </button>
      </div>
    </div>
  );
}
