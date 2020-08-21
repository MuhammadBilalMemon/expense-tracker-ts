import React from "react";
import "./App.scss";
// Components
import Layout from "./components/Layout";
import ExpenseTrackerForm from "./components/ExpenseTrackerForm";

function App() {
  return (
    <Layout>
      <ExpenseTrackerForm />
    </Layout>
  );
}

export default App;
