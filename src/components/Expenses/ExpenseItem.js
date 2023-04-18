import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    console.log('here is delete handler')
    props.onDelete(props.id);
  };

  return (
    <Card className={classes["expense-item"]}>
      <ExpenseDate date={props.date} />
      <div className={classes["expense-item__description"]}>
        <h2>{props.title}</h2>
        <div className={classes["expense-item__price"]}>
          ¥{props.amount.toLocaleString()}
        </div>
        <button className={classes['delete-btn']} onClick={deleteHandler}>
        <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
