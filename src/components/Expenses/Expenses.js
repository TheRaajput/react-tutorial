import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpenseList from './ExpenseList'
import ExpensesChart from "../Chart/ExpensesChart";

const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState("2020");
  const filterUpdate = (updatedYear) => {
    setFilteredYear(updatedYear);
  };

  const FilteredArray = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === FilteredYear
  );

 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={FilteredYear} onFilterUpdate={filterUpdate} />
        <ExpensesChart expenses={FilteredArray}/>
        <ExpenseList items={FilteredArray}/>
      </Card>
    </div>
  );
};

export default Expenses;
