import React from "react";
import "./NewExpense.css";

const ExpenseButton = (props) => {
  return <button onClick={()=>props.onClickHandler(true)}>Add New Expense</button>;
};

export default ExpenseButton;
