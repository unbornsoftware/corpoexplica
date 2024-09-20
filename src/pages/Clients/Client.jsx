import React from "react";
import styles from "./Client.module.scss";
import Card from "../../components/Card";

const Client = () => {
  return (
    <>
      <div className="un-page__title">
        <span className="pr-icon-arrow-right"></span>
        <p>Cadastrar Cliente</p>
      </div>

      <div className="un-page__content white">
        <div className="fcol fgap-10">
          <form className="wd-100 un-form">
            <div className={`${styles["un-form__clients"]}`}>
              <div className={`${styles["un-form__basics"]}`}>
                <Card title={"Dados Básicos"} paddingContent={true}>
                  <div className="fcol fgap-20">
                    {/* <div className="frow-center fgap-10 row-wrap">
                      <label className="un-radio radio-sm">
                        <input type="radio" checked={true} name="radio2" value="1" />
                        Torce para o Cruzeiro
                      </label>
                      <label className="un-radio radio-sm">
                        <input type="radio" name="radio2" value="2" />
                        Seca o Atlético
                      </label>
                    </div> */}
                    <div className="frow-center fgap-5 row-wrap">
                      <label className="flex-2 un-input">
                        <input
                          type="text"
                          required
                          placeholder="Nome do cliente"
                        ></input>
                      </label>
                      <label className="flex-2 un-input">
                        <input
                          type="text"
                          required
                          placeholder="E-mail do cliente"
                        ></input>
                      </label>
                      <label className="flex-1 un-input">
                        <input
                          type="date"
                          required
                          placeholder="Data Nascimento"
                        ></input>
                      </label>
                    </div>
                    <div className="frow-centerbetween fgap-5 row-wrap">
                      <label className="un-checkbox">
                        <input type="checkbox" value="1" name="specialist" />
                        Especialista
                      </label>
                      <label className="un-switch">
                        <span className="switch-label">Ativo</span>
                        <input name="active" type="checkbox" value="1" />
                      </label>
                    </div>
                  </div>
                </Card>
              </div>
              <div className={`${styles["un-form__outhers"]}`}>
                <div className={`${styles["un-form__basics"]}`}>
                  <Card title={"Documentos"} paddingContent={true}>
                    <div className="frow-center fgap-5 row-wrap">
                      <label className="flex-1 un-input">
                        <select disabled={true}>
                          <option>CPF</option>
                        </select>
                      </label>
                      <label className="flex-5 un-input">
                        <input
                          type="text"
                          required
                          placeholder="Informe o Documento"
                        ></input>
                      </label>
                    </div>
                  </Card>
                </div>
                <div className={`${styles["un-form__basics"]}`}>
                  <Card title={"Contatos"} paddingContent={true}>
                    <div className="frow-center fgap-5 row-wrap">
                      <label className="flex-1 un-input">
                        <select>
                          <option value={"cellphone"}>Celular</option>
                          <option value={"telephone"}>Telefone</option>
                          <option value={"whatsapp"}>Whatsapp</option>
                          <option value={"email"}>E-mail</option>
                          <option value={"telegram"}>Telegram</option>
                        </select>
                      </label>
                      <label className="flex-5 un-input">
                        <input
                          type="text"
                          placeholder="Informe o Documento"
                        ></input>
                      </label>
                    </div>
                  </Card>
                </div>
              </div>
              <div className={`${styles["un-form__actions"]}`}>
                <button className="app-button outline default">
                  Limpar Formulário
                </button>
                <input
                  type="submit"
                  className="app-button primary"
                  value={"Cadastrar"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Client;
