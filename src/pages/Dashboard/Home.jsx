import React from "react";
import styles from "./Home.module.scss";
import Card from "../../components/Card";
import Table from "../../components/Table";

const Home = () => {
  return (
    <>
      <div className="un-page__content white">
        <div className={styles["un-grid__dashboard"]}>
          <div className={`${styles["un-grid__item"]} ${"griditem-100p"}`}>
            <Card
              title="Atendimentos"
              foot={
                <div className="f-center">
                  <a className="un-link">Todos os atendimentos</a>
                </div>
              }
            >
              <Table nowrap={true}>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Progresso Atendimento</th>
                    <th>Etapa</th>
                    <th>Data Início</th>
                    <th>Data Fim</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pablo Lima</td>
                    <td>Em andamento</td>
                    <td>Síntese</td>
                    <td>01 ago, 2024</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>Pablo Lima Souza</td>
                    <td>Em andamento</td>
                    <td>Adicional</td>
                    <td>01 ago, 2024</td>
                    <td>--</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
          {/* <div className={`${styles["un-grid__item"]} ${"griditem-25p"}`}>
            <Card title="Card 2"></Card>
          </div>
          <div className={`${styles["un-grid__item"]} ${"griditem-25p"}`}>
            <Card title="Card 3"></Card>
          </div> */}
        </div>
        {/* <p className={styles["un-message"]}>Bem vindo ao Corpo Explica.</p> */}
      </div>
    </>
  );
};

export default Home;
