import React from "react";

import { Transaction } from "../model/Transaction";

interface Props {
  transactions: Transaction[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <div
          className={`alert d-flex justify-content-right ${
            transaction.transactionType === "income"
              ? "alert-success"
              : "alert-danger"
          }`}
          role="alert"
          key={transaction.id}
        >
          <span className="d-flex flex-fill align-middle">
            {transaction.name}
          </span>
          <span className="d-flex flex-fill align-middle">
            ${transaction.amount}
          </span>
          <button className="btn btn-outline-danger">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
