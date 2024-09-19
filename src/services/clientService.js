import { api, requestConfig } from "../utils/config";

//Register client
const registerClient = async (data, token) => {
  const config = requestConfig("POST", data, token);
  try {
    const res = await fetch(api + "/clients/register", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

//Update client
const updateClient = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);
  try {
    const res = await fetch(api + "/clients/update/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//Get client by id
const getClientById = async (id, token) => {
  const config = requestConfig("GET", null, token);
  try {
    const res = await fetch(api + "/clients/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

//Get all clients
const getAllClients = async (token) => {
  const config = requestConfig("GET", null, token);
  try {
    const res = await fetch(api + "/clients", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

//Remove client
const removeClient = async (id, token) => {
  const config = requestConfig("DELETE", null, token);
  try {
    const res = await fetch(api + "/clients/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const clientService = {
    registerClient,
    updateClient,
    getClientById,
    getAllClients,
    removeClient
}

export default clientService
