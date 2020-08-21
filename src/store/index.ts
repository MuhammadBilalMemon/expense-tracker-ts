import {
  createSlice,
  PayloadAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import { Transaction } from "../model/Transaction";

export interface ExpenseStore {
  transactions: Transaction[];
}

const initialState: ExpenseStore = {
  transactions: [],
};

const slice = createSlice({
  name: "transaction",
  initialState: initialState,
  reducers: {
    transactionAdded: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    transactionRemoved: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (trans) => trans.id !== action.payload
      );
    },
  },
});

// Combining the reducer if there will be multiple reducer
// so we can see those reducer side by side
const rootReducer = combineReducers({
  expense: slice.reducer,
});

// here we are creating the store like Create Store
const store = configureStore({
  reducer: rootReducer,
});

export const { transactionAdded, transactionRemoved } = slice.actions;
export const reducer = slice.reducer;

export type RootState = ReturnType<typeof rootReducer>;

export default store;
