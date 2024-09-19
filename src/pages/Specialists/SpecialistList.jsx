import React from 'react'
import styles from './SpecialistList.module.scss'
import Card from "../../components/Card";
import Table from "../../components/Table";

const SpecialistList = () => {
  return (
    <>
      <div className="un-page__title">
        <span className="pr-icon-arrow-right"></span>
        <p>Especialista</p>
      </div>

      <div className="un-page__content white">
        <Card title={"Especialistas Cadastrados"}>
          <div className={`${styles["un-box__specialistList"]}`}>
            <Table nowrap={true}>
              <thead>
                <tr>
                  <th>Especialista</th>
                  <th>---</th>
                  <th>---</th>
                  <th>---</th>
                  <th>---</th>
                  <th style={{ width: "50px" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pablo Lima</td>
                  <td>---</td>
                  <td>---</td>
                  <td>---</td>
                  <td>--</td>
                  <td>
                    <div className='actions'>
                      <a><icon className={`${"pr-icon-trash-2"} ${"danger"}`}></icon></a>
                      <a><icon className={`${"pr-icon-edit"}`}></icon></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card>
      </div>
    </>
  )
}

export default SpecialistList