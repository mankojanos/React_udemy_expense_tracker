import ExpenseItem from "./ExpenseItem";

function Expenses(expenses) {
  const results = [];

  expenses["expenses"].forEach((exp, index) => {
    results.push(
      <ExpenseItem
        key={expenses["expenses"][index].id}
        title={expenses["expenses"][index].title}
        amount={expenses["expenses"][index].amount}
        date={expenses["expenses"][index].date}
      />
    );
  });

  return <div className="expenses">{results}</div>;
}

export default Expenses;
