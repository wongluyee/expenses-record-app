import { useState, Fragment } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Book",
    amount: 500,
    date: new Date(2023, 2, 30),
  },
  {
    id: 2,
    title: "Bread",
    amount: 100,
    date: new Date(2023, 4, 1),
  },
  {
    id: 3,
    title: "Lunch",
    amount: 680,
    date: new Date(2022, 3, 1),
  },
  {
    id: 4,
    title: "Toilet paper",
    amount: 600,
    date: new Date(2022, 2, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteItemHandler = (expenseId) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => expense.id !== expenseId
      );
      console.log(expenseId)
      return updatedExpenses;
    });
  };

  return (
    <Fragment>
      <h2 className="header">
        <FontAwesomeIcon icon={faPiggyBank} /> Expenses Tracker{" "}
        <FontAwesomeIcon icon={faPiggyBank} />
      </h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onDeleteItem={deleteItemHandler} />
    </Fragment>
  );
};

export default App;
