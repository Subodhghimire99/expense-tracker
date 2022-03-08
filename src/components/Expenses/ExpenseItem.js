import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("None");
    setAmount(0);
  };

  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <Card className="expense-item__description">{title}</Card>
      <Card className="expense-item__price">Rs{amount}</Card>
      <button onClick={clickHandler}>Reset</button>
    </Card>
  );
};

export default ExpenseItem;
