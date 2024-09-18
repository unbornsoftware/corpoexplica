import React from "react";
import styles from "./Card.module.scss";

const Card = ({ children, title, head, foot}) => {
  return (
    <div className={`${styles["un-card"]}`}>
      <div className={`${styles["un-card__head"]}`}>
        <p>{title}</p>
        {head && head}
      </div>
      <div className={`${styles["un-card__body"]}`}>
        {children}
      </div>
      {foot && 
        <div className={`${styles["un-card__foot"]}`}>
          {foot}
        </div>
      }
    </div>
  );
};

export default Card;
