import { useState } from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setYear] = useState('2023');

  const filterChangeHandler = (year) => {
    console.log(year);
    setYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear={selectedYear} onFilterChange={filterChangeHandler} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
