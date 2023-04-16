import { useState } from "react";
import classes from "./NewExpense.module.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    changeAddExpenseFormState(false);
  };

  const [isAddingNewExpense, changeAddExpenseFormState] = useState(false);

  const addNewExpenseHandler = () => {
    changeAddExpenseFormState(true);
  };

  const cancelAddExpenseFormHandler = () => {
    changeAddExpenseFormState(false);
  };

  let addNewExpenseBtn = (
    <button onClick={addNewExpenseHandler}>Add New Expense</button>
  );

  let addNewExpenseForm;

  if (isAddingNewExpense) {
    addNewExpenseForm = (
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelAddExpenseFormHandler} />
    );
    addNewExpenseBtn = '';
  }

  return (
    <div className={classes["new-expense"]}>
      {addNewExpenseForm}
      {addNewExpenseBtn}
    </div>
  );
};

export default NewExpense;
