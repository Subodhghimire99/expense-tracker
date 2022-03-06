import Expenses from "./components/Expenses";
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
      <Expenses items={expenses} className="expenses" />
    </div>
  );
}

export default App;
