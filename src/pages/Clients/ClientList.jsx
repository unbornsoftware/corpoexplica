import styles from "./ClientList.module.scss";
import Card from "../../components/Card";
import Table from "../../components/Table";

//Components
import Loading from "../../components/Loading";
import Message from "../../components/Message";

//Hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

//Redux
import {
  getAllClients,
  resetMessage as resetClientMessage,
} from "../../slices/clientSlice";

const ClientList = () => {
  const dispatch = useDispatch();
  const resetMessage = useResetComponentMessage(dispatch, resetClientMessage);

  const { clients, loading } = useSelector((state) => state.client);

  //Load clients data
  useEffect(() => {
    dispatch(getAllClients());
    resetMessage();
  }, [dispatch]);

  return (
    <>
      {loading && <Loading />}
      <div className="un-page__title">
        <span className="pr-icon-arrow-right"></span>
        <p>Clientes</p>
      </div>

      <div className="un-page__content white">
        <Card title={"Clientes Cadastrados"}>
          <div className={`${styles["un-box__clientList"]}`}>
            <Table nowrap={true}>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>E-mail</th>
                  <th>Telefone</th>
                  <th style={{ width: "50px" }}></th>
                </tr>
              </thead>
              <tbody>
                {clients &&
                  clients.map((client) => {

                    const allowedTypes = ["email", "telephone"];
                    const filteredContacts = client.contacts.filter((contact) => allowedTypes.includes(contact.type));

                    const emailContact = filteredContacts.find(contact => contact.type === "email");
                    const telefoneContact = filteredContacts.find(contact => contact.type === "telephone");

                    console.log(client);

                    return (
                      <tr key={client.id}>
                        <td>{client.name}</td>
                        <td>{emailContact ? emailContact.value : "---"}</td>
                        <td>{telefoneContact ? telefoneContact.value : "---"}</td>
                        <td>
                          <div className="actions">
                            <a>
                              <icon
                                className={`${"pr-icon-trash-2"} ${"danger"}`}
                              ></icon>
                            </a>
                            <a>
                              <icon className={`${"pr-icon-edit"}`}></icon>
                            </a>
                          </div>
                        </td>
                      </tr>
                    )

                  })}
              </tbody>
            </Table>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ClientList;
