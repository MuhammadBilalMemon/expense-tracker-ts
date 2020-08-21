import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    transactionRemoved: (state, action: any) => {},
  },
});

//exporting Actions
export const { transactionAdded } = slice.actions;
//exporting transactionRedur
export default slice.reducer;
