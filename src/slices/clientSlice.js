import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientService from "../services/clientService";

const initialState = {
  client: [],
  clients: [],
  error: false,
  success: false,
  loading: false,
  message: null,
};

//Register client
export const registerClient = createAsyncThunk(
  "client/register",
  async (client, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await clientService.registerClient(client, token);
    if (data.errors) {
      debugger;
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

//Update client
export const updateClient = createAsyncThunk(
  "client/update",
  async (client, id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await clientService.updateClient(client, id, token);
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

//Get client by id
export const getClientById = createAsyncThunk(
  "client/getclient",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await clientService.getClientById(id, token);
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

//Get all clients
export const getAllClients = createAsyncThunk(
  "client/getall",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await clientService.getAllClients(token);
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

//Remove client
export const removeClient = createAsyncThunk(
  "client/removeclient",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token;
    const data = await clientService.removeClient(id, token);
    if (data.errors) {
      return thunkAPI.rejectWithValue(data.errors[0]);
    }
    return data;
  }
);

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerClient.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.clients.unshift(state.client);
        state.message = "Cliente cadastrado com sucesso!";
      })
      .addCase(registerClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.client = {};
      })
      .addCase(updateClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateClient.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.client = action.payload;
        state.message = "Cliente atualizado com sucesso!";
      })
      .addCase(updateClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.client = {};
      })
      .addCase(getClientById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getClientById.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.client = action.payload;
      })
      .addCase(getAllClients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllClients.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.clients = action.payload;
      })
      .addCase(removeClient.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeClient.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.clients = state.clients.filter((client) => {
          return client._id !== action.payload.id;
        });
        state.message = action.payload.message;
      })
      .addCase(removeClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.client = {};
      })
  },
});

export const {resetMessage} = clientSlice.actions;
export default clientSlice.reducer;
