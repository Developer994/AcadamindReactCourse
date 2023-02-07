import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.67,
    date: new Date(2021, 7, 28),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 2, 15),
  },
  {
    id: 'e3',
    title: 'Water Heater',
    amount: 34.17,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'PC chair',
    amount: 84.45,
    date: new Date(2021, 4, 28),
  },
];
console.log(DUMMY_EXPENSES);

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  // The following is the JSX version of the above commented code

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
