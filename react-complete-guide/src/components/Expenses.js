import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const results = [];

  props.items.forEach((exp, index) => {
    results.push(
      <ExpenseItem
        key={props.items[index].id}
        title={props.items[index].title}
        amount={props.items[index].amount}
        date={props.items[index].date}
      />
    );
  });

  return <div className="expenses">{results}</div>;
}

export default Expenses;
