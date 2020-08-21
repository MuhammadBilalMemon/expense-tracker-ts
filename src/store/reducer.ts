import { combineReducers } from "@reduxjs/toolkit";
import transactionReducer from "./transactions";

export default combineReducers({
  transactions: transactionReducer,
});
