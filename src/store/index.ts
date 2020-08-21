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
    transactionRemoved: (state, action: any) => {},
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

export const { transactionAdded } = slice.actions;
export const reducer = slice.reducer;

export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
