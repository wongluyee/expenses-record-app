import { useState } from 'react';
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Resident tax",
    amount: 50000,
    date: new Date(2023, 2, 30),
  },
  {
    id: 2,
    title: "Bread",
    amount: 100,
    date: new Date(2023, 3, 1),
  },
  {
    id: 3,
    title: "Lunch",
    amount: 680,
    date: new Date(2023, 3, 1),
  },
  {
    id: 4,
    title: "Toilet paper",
    amount: 600,
    date: new Date(2023, 2, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
