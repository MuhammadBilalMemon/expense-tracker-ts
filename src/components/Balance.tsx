import React from "react";
import TransactionList from "./TransactionList";

import { useSelector } from "react-redux";
import { ExpenseStore, RootState } from "./../store/index";

const Balance: React.FC = () => {
  const { transactions } = useSelector<RootState, ExpenseStore>(
    (state: any) => state.expense
  );
  // console.log(transactions);

  const totalAmount = () => {
    return transactions.reduce((acc, amt) => (acc += amt.amount), 0);
  };

  const Income = () => {
    return transactions.reduce((acc, curr) => {
      if (curr.transactionType === "income") {
        return acc + curr.amount;
      }
      return acc;
    }, 0);
  };
  const expense = () =>
    transactions.reduce(
      (acc, curr) =>
        curr.transactionType === "expense" ? acc + curr.amount : acc,
      0
    );

  return (
    <div className="col-md-8">
      <div className="card-body">
        <div className="text-center">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Income :{" "}
              <span className="badge bg-success rounded-pill text-white">
                {Income()}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Expense :{" "}
              <span className="badge bg-danger rounded-pill text-white">
                {expense()}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Total :{" "}
              <span className="badge bg-secondary rounded-pill text-white">
                {totalAmount()}
              </span>
            </li>
          </ul>
        </div>
        <h5 className="card-title text-center mt-3">Transaction History</h5>
        <p className="card-text">
          <TransactionList transactions={transactions} />
        </p>
        <p className="card-text text-center">
          <small className="text-muted ">Created by : Muhammad Bilal</small>
        </p>
      </div>
    </div>
  );
};

export default Balance;
