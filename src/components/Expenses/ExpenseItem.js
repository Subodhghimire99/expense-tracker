import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">Rs{props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
