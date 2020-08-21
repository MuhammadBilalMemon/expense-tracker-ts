export enum TransactionType {
  Income = "income",
  Expense = "expense",
}

export interface Transaction {
  id: string;
  name: string;
  transactionType: TransactionType;
  amount: number;
}
