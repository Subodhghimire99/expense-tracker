import "./ExpenseDate.css";
import Card from "../UI/Card";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="date">
      <div className="date-month">{month}</div>
      <div className="date-month">{day}</div>
      <div className="date-year">{year}</div>
    </Card>
  );
};
export default ExpenseDate;
