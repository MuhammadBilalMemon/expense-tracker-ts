import React from "react";

import { Transaction } from "../model/Transaction";
import { transactionRemoved } from "../store";
import { useDispatch } from "react-redux";

interface Props {
  transactions: Transaction[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  const dispatch = useDispatch();

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
          <button
            className="btn btn-outline-danger"
            onClick={() =>
              dispatch(transactionRemoved(transaction.id.toString()))
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
