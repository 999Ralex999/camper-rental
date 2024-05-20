// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campersSlice";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filter: filterReducer,
  },
});

export default store;
