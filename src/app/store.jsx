import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: "root",// storage veriler key-value şeklinde saklanır. Buraki key storagedaki keyi temsil ediyor.
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock:stockReducer,
  }, 
  devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store);
export default store;
