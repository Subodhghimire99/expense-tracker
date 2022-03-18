const ExpenseForm = () => {
  return (
    <div>
      <form className="expenseform">
        <input type="text" placeholder="Enter title"></input>
        <input type="text" placeholder="Enter Amount"></input>
        <button>Add</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
