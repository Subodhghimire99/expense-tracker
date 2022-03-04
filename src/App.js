import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 24500, date: new Date(2022, 0, 22) },
    {
      title: "Birthday Celebration",
      amount: 10000,
      date: new Date(2022, 2, 22),
    },
    {
      title: "Mart Shopping",
      amount: 5000,
      date: new Date(2022, 4, 22),
    },
    {
      title: "Flat rent",
      amount: 5000,
      date: new Date(2022, 5, 2),
    },
  ];

  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
