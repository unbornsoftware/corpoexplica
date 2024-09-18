import React from "react";
import styles from "./ListServices.module.scss";
import Card from "../../../components/Card";
import Table from "../../../components/Table";
import BarProgressThin from "../../../components/BarProgressThin";

const ListServices = () => {
  return (
    <>
      <div className={`${styles["un-box__servicesList"]}`}>
        <Table nowrap={true}>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Progresso Atendimento</th>
              <th>Etapa</th>
              <th>Data Início</th>
              <th>Data Fim</th>
              <th style={{ width: "50px" }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pablo Lima</td>
              <td>
                <div className={`${styles["service-progress"]}`}>
                  <p>Em andamento</p>
                  <div>
                    <BarProgressThin value={"40%"} />
                  </div>
                </div>
              </td>
              <td>Síntese</td>
              <td>01 ago, 2024</td>
              <td>--</td>
              <td>
                <a className={`${styles["service-play"]}`}>
                  <icon className={`${"pr-icon-play-circle"}`}></icon>
                </a>
              </td>
            </tr>
            <tr>
              <td>Pablo Lima Souza</td>
              <td>
                <div className={`${styles["service-progress"]}`}>
                  <p>Em andamento</p>
                  <div>
                    <BarProgressThin value={"70%"} />
                  </div>
                </div>
              </td>
              <td>Adicional</td>
              <td>01 ago, 2024</td>
              <td>--</td>
              <td>
                <a className={`${styles["service-play"]}`}>
                  <icon className={`${"pr-icon-play-circle"}`}></icon>
                </a>
              </td>
            </tr>
            <tr>
              <td>Gustavo Borges</td>
              <td>
                <div className={`${styles["service-progress"]}`}>
                  <p>Em andamento</p>
                  <div>
                    <BarProgressThin value={"20%"} />
                  </div>
                </div>
              </td>
              <td>Síntese</td>
              <td>01 ago, 2024</td>
              <td>--</td>
              <td>
                <a className={`${styles["service-play"]}`}>
                  <icon className={`${"pr-icon-play-circle"}`}></icon>
                </a>
              </td>
            </tr>
            <tr>
              <td>Rayana</td>
              <td>
                <div className={`${styles["service-progress"]}`}>
                  <p>Em andamento</p>
                  <div>
                    <BarProgressThin value={"85%"} />
                  </div>
                </div>
              </td>
              <td>Finalizando</td>
              <td>01 ago, 2024</td>
              <td>--</td>
              <td>
                <a className={`${styles["service-play"]}`}>
                  <icon className={`${"pr-icon-play-circle"}`}></icon>
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ListServices;
