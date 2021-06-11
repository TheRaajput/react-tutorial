import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "../NewExpense/ExpenseForm";
import ExpenseButton from "./ExpenseButton";

const NewExpense = (props) => {
  const [click, setclick] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onaddExpense(expenseData);
  };

  
  let AddExpense = <ExpenseButton onClickHandler={setclick}/>
  if(click===true){
    AddExpense = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} oncancelClick={setclick}/>
  }

  return (
    <div className="new-expense">
    {AddExpense}
    </div>
  );
};

export default NewExpense;
