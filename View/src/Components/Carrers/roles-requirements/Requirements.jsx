import React from "react";
import css from "./style.module.css";

export default function Roles({ reqItems }) {
  return (
    <>
      <p className={css.req}>Requirements</p>
      <ul className={css.reqList}>
        {reqItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
