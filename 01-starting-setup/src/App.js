import Expenses from './components/Expenses';

function App() {
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
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
