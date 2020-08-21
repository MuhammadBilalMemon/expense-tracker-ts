import React from "react";

const ExpenseTrackerForm: React.FC = () => {
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 card-left-side">
            <div className="mb-3 mt-4">
              <label htmlFor="expenseName" className="form-label">
                Expense Name
              </label>
              <input
                type="text"
                className="form-control"
                id="expenseName"
                placeholder="Expense Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="expenseType" className="form-label">
                Select Type
              </label>
              <select
                id="expenseType"
                className="form-control form-select form-select-lg "
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
                type="number"
                min="0"
                className="form-control"
                id="expenseAmount"
                placeholder="Expense Amount"
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-purple">
                Submit
              </button>
            </div>
          </div>

          <div className="col-md-8 custom-card-body">
            <div className="card-body">
              <h5 className="card-title text-center">Transaction History</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseTrackerForm;
