import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const expenses = [
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
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e3',
      title: 'Water Heater',
      amount: 34.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'PC chair',
      amount: 84.67,
      date: new Date(2021, 4, 28),
    },
  ];
  return (
    <div className='expenses'>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default Expenses;
