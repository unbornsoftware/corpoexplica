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
  getAllClients, removeClient,
  resetMessage as resetClientMessage,
} from "../../slices/clientSlice";

const ClientList = () => {
  const dispatch = useDispatch();
  const resetMessage = useResetComponentMessage(dispatch, resetClientMessage);

  const { clients, loading, success, error } = useSelector((state) => state.client);


  const handleDeleteClient = async(id) => {



  }


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
               {Array.isArray(clients) && clients.length > 0 && clients.map((client) => {

                    const allowedTypes = ["cellphone"];
                    const filteredContacts = client.contacts?.filter((contact) => allowedTypes.includes(contact.type));
                    const telefoneContact = filteredContacts?.find(contact => contact.type === "cellphone");

                    return (
                      <tr key={client.id}>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>{telefoneContact ? telefoneContact.value : "---"}</td>
                        <td>
                          <div className="actions">
                            <a onClick={handleDeleteClient(client.id)}>
                              <span className={`${"pr-icon-trash-2"} ${"danger"}`}></span>
                            </a>
                            <a>
                              <span className={`${"pr-icon-edit"}`}></span>
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
