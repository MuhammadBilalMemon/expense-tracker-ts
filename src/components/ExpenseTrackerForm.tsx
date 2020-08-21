import React from "react";
import { useForm } from "react-hook-form";
import Balance from "./Balance";

import { Transaction, TransactionType } from "../model/Transaction";
import { transactionAdded } from "../store";

import { useDispatch } from "react-redux";

type Inputs = {
  name: string;
  amount: number;
  transactionType: TransactionType;
};

const ExpenseTrackerForm: React.FC = () => {
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();

  const dispatch = useDispatch();

  const handleTransaction = (data: Inputs) => {
    const amount =
      data.transactionType === "income" ? +data.amount : -data.amount;
    const transaction: Transaction = {
      id: Math.floor(Math.random() * 10000000).toString(),
      name: data.name,
      amount,
      transactionType: data.transactionType,
    };
    dispatch(transactionAdded(transaction));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleTransaction)}>
      <div className="card mb-3 custom-card-body">
        <div className="row g-0">
          <div className="col-md-4 card-left-side">
            <div className="mb-3 mt-4">
              <label htmlFor="expenseName" className="form-label">
                Expense Name
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="expenseName"
                placeholder="Expense Name"
                ref={register({ required: true })}
              />
              {errors.name && (
                <small className="text-white">Expense name is required</small>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="expenseType" className="form-label">
                Select Type
              </label>
              <select
                name="transactionType"
                id="expenseType"
                className="form-control form-select form-select-lg"
                ref={register({ required: true, min: 1 })}
              >
                <option defaultValue="selectedType">Select Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="expenseAmount" className="form-label">
                Expense Amount
              </label>
              <input
                name="amount"
                type="number"
                min="0"
                className="form-control"
                id="expenseAmount"
                placeholder="Expense Amount"
                ref={register({ required: true })}
              />
              {errors.name && (
                <small className="text-white">
                  Amount must be grater than 0.
                </small>
              )}
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-purple">
                Submit
              </button>
            </div>
          </div>
          <Balance />
        </div>
      </div>
    </form>
  );
};

export default ExpenseTrackerForm;
