import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDataHandler = (onEnteredExpenseData) => {
    const expenseData = {
      ...onEnteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}  onCancel={stopEditingHandler}/>
      )}
    </div>
  );
};

export default NewExpense;
