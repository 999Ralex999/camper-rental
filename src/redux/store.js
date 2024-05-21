// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { filterReducer } from "./filterSlice";
import { modalReducer } from "./modalSlice";

import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  stateReconciler: autoMergeLevel2,
};

const persistedCamperReducer = persistReducer(persistConfig, campersReducer);

export const store = configureStore({
  reducer: {
    campers: persistedCamperReducer,
    filter: filterReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
