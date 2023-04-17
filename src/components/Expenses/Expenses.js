import { useState, Fragment } from "react";
import classes from "./Expenses.module.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
  const [selectedYear, setYear] = useState("2023");

  const filterChangeHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expense records.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Fragment>
      <Card className={classes.expenses}>
        <ExpenseFilter
          selectedYear={selectedYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        {expensesContent}
      </Card>
    </Fragment>
  );
};

export default Expenses;
