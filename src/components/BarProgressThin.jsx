import React, { useEffect, useState } from "react";
import styles from "./BarProgressThin.module.scss";

const BarProgressThin = ({ value }) => {
  const styleValueProgress = {
    width: value,
  };

  const [classCssProgress, setClassCss] = useState("notStarted");

  const numericValue = parseInt(value.replace("%", ""), 10);

  useEffect(() => {
    if (numericValue > 1 && numericValue <= 40) {
      setClassCss("started");
    } else if (numericValue > 40 && numericValue <= 80) {
      setClassCss("half");
    } else if (numericValue > 80) {
      setClassCss("finishing");
    } else {
      setClassCss("notStarted");
    }
  }, [numericValue]);

  return (
    <>
      <div
        className={`${styles["un-bar__progressThin"]} ${styles[classCssProgress]}`}
      >
        <span style={styleValueProgress}></span>
      </div>
    </>
  );
};

export default BarProgressThin;
