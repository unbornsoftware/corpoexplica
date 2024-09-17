import React from "react";
import styles from "./Card.module.scss";

const Card = ({ children, title, foot}) => {
  return (
    <div className={`${styles["un-card"]}`}>
      <div className={`${styles["un-card__head"]}`}>
        {title}
      </div>
      <div className={`${styles["un-card__body"]}`}>
        {children}
      </div>
      <div className={`${styles["un-card__foot"]}`}>
        {foot}
      </div>
    </div>
  );
};

export default Card;
