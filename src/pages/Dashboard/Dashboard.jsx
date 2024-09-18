import React from "react";
import styles from "./Dashboard.module.scss";
import Card from "../../components/Card";
import ListServices from "../Services/components/ListServices";
import {Link} from "react-router-dom"; 

const Dashboard = () => {
  return (
    <>
      <div className="un-page__title">
        <span className="pr-icon-arrow-right"></span>
        <p>Dashboard</p>
      </div>

      <div className="un-page__content white">
        <div className={styles["un-grid__dashboard"]}>
          <div className={`${styles["un-grid__item"]} ${"griditem-100p"}`}>
            <Card
              title="Últimos Atendimentos"
              head={
                <div className="flex-1 frow-centerend">
                  <Link to="/services" className="app-button outline small primary pr-icon-arrow-right">
                    Todos os atendimentos
                  </Link>
                </div>
              }
            >
              <ListServices/>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
