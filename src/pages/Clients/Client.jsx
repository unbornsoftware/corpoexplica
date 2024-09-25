import styles from "./Client.module.scss";
import Card from "../../components/Card";

//Components
import Loading from "../../components/Loading";
import Message from "../../components/Message";

//Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";
import { useNavigate } from "react-router-dom";

//Redux
import {
  registerClient,
  resetMessage as resetClientMessage,
} from "../../slices/clientSlice";

const Client = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [birthdate, setBirthdate] = useState();
  const [active, setActive] = useState(true);
  const [specialist, setSpecialist] = useState(false);
  const [document, setDocument] = useState();
  const [cellphone, setCellphone] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const resetMessage = useResetComponentMessage(dispatch, resetClientMessage);
  const { loading, error } = useSelector((state) => state.client);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const documents = [
      {
        type: "cpf",
        value: document,
      },
    ];
    const contacts = [
      {
        type: "cellphone",
        value: cellphone,
      },
    ];

    const client = {
      name,
      email,
      birthdate,
      specialist,
      active,
      documents: documents,
    };

    if (cellphone) {
      client.contacts = contacts;
    }

    const result = await dispatch(registerClient(client));

    if (!result.error) {
      handleListRedirect();
    }
  };

  const handleListRedirect = () => {
    navigate("/clients");
  };

  useEffect(() => {
    resetMessage();
  }, [dispatch, error]);

  return (
    <>
      {error && (
        <Message key={1} type={"warning"} duration={5000}>
          {error}
        </Message>
      )}

      <div className="un-page__title">
        <span className="pr-icon-arrow-right"></span>
        <p>Cadastrar Cliente</p>
      </div>

      <div className="un-page__content white">
        <div className="fcol fgap-10">
          <form className="wd-100 un-form" onSubmit={handleSubmit}>
            <div className={`${styles["un-form__clients"]}`}>
              <div className={`${styles["un-form__basics"]}`}>
                <Card title={"Dados Básicos"} paddingContent={true}>
                  <div className="fcol fgap-20">
                    <div className="frow-center fgap-5 row-wrap">
                      <label className="flex-2 un-input">
                        <input
                          value={name || ""}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          // required
                          placeholder="Nome do cliente"
                        ></input>
                      </label>
                      <label className="flex-2 un-input">
                        <input
                          value={email || ""}
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          // required
                          placeholder="E-mail do cliente"
                        ></input>
                      </label>
                      <label className="flex-1 un-input">
                        <input
                          value={birthdate || ""}
                          onChange={(e) => setBirthdate(e.target.value)}
                          type="date"
                          // required
                          placeholder="Data Nascimento"
                        ></input>
                      </label>
                    </div>
                    <div className="frow-centerbetween fgap-5 row-wrap">
                      <label className="un-checkbox">
                        <input
                          type="checkbox"
                          checked={specialist}
                          onChange={(e) => setSpecialist(e.target.checked)}
                          value="1"
                        />
                        Especialista
                      </label>
                      <label className="un-switch">
                        <span className="switch-label">Ativo</span>
                        <input
                          type="checkbox"
                          checked={active}
                          onChange={(e) => setActive(e.target.checked)}
                          value="1"
                        />
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
                      <label className="flex-3 un-input">
                        <input
                          value={document || ""}
                          onChange={(e) => setDocument(e.target.value)}
                          type="text"
                          // required
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
                        <select disabled={true}>
                          <option value={"cellphone"}>Celular</option>
                        </select>
                      </label>
                      <label className="flex-3 un-input">
                        <input
                          value={cellphone || ""}
                          onChange={(e) => setCellphone(e.target.value)}
                          type="text"
                          placeholder="Informe o Celular"
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
                {!loading && (
                  <button type="submit" className="app-button primary">
                    Cadastrar
                  </button>
                )}
                {loading && (
                  <button type="submit" className="app-button primary loading">
                    Aguarde...
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Client;

{
  /* <div className="frow-center fgap-10 row-wrap">
                      <label className="un-radio radio-sm">
                        <input type="radio" checked={true} name="radio2" value="1" />
                        Torce para o Cruzeiro
                      </label>
                      <label className="un-radio radio-sm">
                        <input type="radio" name="radio2" value="2" />
                        Seca o Atlético
                      </label>
                    </div> */
}
