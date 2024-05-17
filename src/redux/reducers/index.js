import { combineReducers } from "@reduxjs/toolkit";
import advertsReducer from "./advertsReducer";

const rootReducer = combineReducers({
  adverts: advertsReducer,
});

export default rootReducer;
