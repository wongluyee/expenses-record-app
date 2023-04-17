import { useState } from "react";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  const titleChangeHandler = (event) => {
    // So that when the user inputs value, the invalid css go away
    if (event.target.value.trim().length > 0) {
      setIsTitleValid(true);
    }
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    const amount = event.target.value;
    if (amount >= 0) {
      setIsAmountValid(true);
    }
    setEnteredAmount(amount);
  };
  const dateChangeHandler = (event) => {
    if (event.target.value !== '') {
      setIsDateValid(true);
    }
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.trim().length <= 0) {
      setIsTitleValid(false);
    }
    if (enteredAmount <= 0) {
      setIsAmountValid(false);
    }
    if (enteredDate === '') {
      setIsDateValid(false);
      return;
    }
    console.log(isTitleValid);
    if (isTitleValid && isAmountValid && isDateValid) {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["new-expense__controls"]}>
        <div
          className={`${classes["new-expense__control"]} ${
            !isTitleValid && classes.invalid
          }`}
        >
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <div className={classes.error}>
            {!isTitleValid ? "*Title can't be blank" : ""}
          </div>
        </div>
        <div
          className={`${classes["new-expense__control"]} ${
            !isAmountValid && classes.invalid
          }`}
        >
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          <div className={classes.error}>
            {!isAmountValid ? "*Amount can't be blank" : ""}
          </div>
        </div>
        <div className={`${classes["new-expense__control"]} ${
            !isDateValid && classes.invalid
          }`}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          <div className={classes.error}>
            {!isDateValid ? "*Date can't be blank" : ""}
          </div>
        </div>
      </div>
      <div className={classes["new-expense__actions"]}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
