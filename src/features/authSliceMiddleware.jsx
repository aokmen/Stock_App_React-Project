import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Kullanıcı oturumu açma işlemi için createAsyncThunk kullanıyoruz.
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (userInfo, { dispatch }) => {
    console.log("first");
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      toastSuccessNotify("Login performed");
      return data;
    } catch (error) {
      toastErrorNotify("Login can not be performed");
      throw error.response.data;
    }
  }
);

// Kullanıcı kayıt işlemi için createAsyncThunk kullanıyoruz.
export const registerAsync = createAsyncThunk(
  "auth/register",
  async (userInfo, { dispatch }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/register/`,
        userInfo
      );
      toastSuccessNotify("Register performed");
      return data;
    } catch (err) {
      if (err.response.status === 400) {
        for (const [key, value] of Object.entries(err.response.data)) {
          toastErrorNotify(`${key}: ${value[0]}`);
        }
      } else {
        toastErrorNotify("Register can not be performed");
      }
      throw err.response.data;
    }
  }
);

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch, getState }) => {
    const { token } = getState().auth;
    try {
      await axios.post(`${BASE_URL}account/auth/logout/`, null, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      toastSuccessNotify("Logout performed");
    } catch (error) {
      toastErrorNotify("Logout can not be performed");
      throw error.response.data;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAsync.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload.user.username;
        state.isAdmin = action.payload.user.is_superuser;
        state.token = action.payload.key;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(registerAsync.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload.username;
        state.token = action.payload.token;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logoutAsync.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logoutAsync.fulfilled, state => {
        state.loading = false;
        state.currentUser = null;
        state.token = null;
      })
      .addCase(logoutAsync.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default authSlice.reducer;
