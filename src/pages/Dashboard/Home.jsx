import React from "react";
import styles from "./Home.module.scss";
import Card from "../../components/Card";
import Table from "../../components/Table";
import ListServices from "./components/ListServices";

const Home = () => {
  return (
    <>
      <div className="un-page__title">
        <span className="pr-icon-arrow-right"></span>
        <p>Home / Dashboard</p>
      </div>

      <div className="un-page__content white">
        <div className={styles["un-grid__dashboard"]}>
          <div className={`${styles["un-grid__item"]} ${"griditem-100p"}`}>
            <ListServices/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
