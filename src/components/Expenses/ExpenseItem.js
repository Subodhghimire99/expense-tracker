import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">Rs{props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
