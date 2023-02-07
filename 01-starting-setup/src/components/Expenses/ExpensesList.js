import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map(
        (
          expense //Here, after bringing this if statement to the ExpenseList.js fil, we replaced 'filteredExpenses.map' to 'props.items.map', but the naming is up to you. (Check lecutre 67 for how it was done for this.)
        ) => (
          <ExpenseItem
            key={expense.id} // This should remove the error asking for each child to have a unique "key" prop.
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      )}
    </ul>
  );
};

export default ExpensesList;
