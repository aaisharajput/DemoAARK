import React from "react";
import css from "./style.module.css";

export default function Roles({ roleItems }) {
  return (
    <>
      <p className={css.role}>ROLE</p>
      <ul className={css.roleList}>
        {roleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
