import React from "react";
import styles from "./Services.module.scss";
import Card from "../../components/Card";
import ListServices from "./components/ListServices";

const Services = () => {
  return (
    <>
      <div className="un-page__title">
        <span className="pr-icon-arrow-right"></span>
        <p>Atendimentos</p>
      </div>

      <div className="un-page__content white">
        <Card title="Meus Atendimentos">
          <ListServices />
        </Card>
      </div>
    </>
  );
};

export default Services;
