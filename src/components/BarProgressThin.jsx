import React from "react";
import styles from "./BarProgressThin.module.scss";

const BarProgressThin = ({ value }) => {

  const styleValueProgress = {
    width: value,
  };

  return (
    <>
      <div className={`${styles["un-bar__progressThin"]}`}>
        <span style={styleValueProgress}></span>
      </div>
    </>
  );
  
};

export default BarProgressThin;
