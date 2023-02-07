import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // Multiple States:
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [hideform, sethideform] = useState('form is-hidden');
  const [newFormButton, setNewFormButton] = useState('AddNewExp');

  const hideFormHandler = () => {
    if (hideform === 'form is-hidden') {
      sethideform('form');
    } else {
      sethideform('form is-hidden');
      setNewFormButton('AddNewExp');
    }
  };

  const newFormButtonHandler = () => {
    setNewFormButton('AddNewExp is-hidden');
    sethideform('form');
  };

  //   // One State:
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enterDate: '',
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // These will clear the inputted results

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onSaveExpenseData(expenseData);
  };

  return (
    <>
      <button onClick={newFormButtonHandler} className={newFormButton}>
        Add New Expense
      </button>
      <form className={hideform} onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              onChange={amountChangeHandler}
              min='0.01'
              step='0.01'
              value={enteredAmount}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              onChange={dateChangeHandler}
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button onClick={hideFormHandler}>Cancel</button>
          <button onClick={hideFormHandler}>Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;