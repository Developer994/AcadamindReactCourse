import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHander = () => {
    setIsEditing(true);
  };

  const stopEditHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHander}>Add New Expense</button>
      )}{' '}
      {/* Here, the '&&" simply means then, so if '!isEditing' is true (which means isEditing is false because of the negation at the front), then the code continues with the button */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditHandler}
        />
      )}
      {/* Here, the '&&" simply means then, so if 'isEditing' is true (which means isEditing is true), then the code continues with the button */}
    </div>
  );
};

export default NewExpense;
