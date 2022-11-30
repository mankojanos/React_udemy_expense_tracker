import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  
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

  return (
    <div>
      <Card className="expenses"><ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>{results}</Card>
    </div>
  );
  
};

export default Expenses;
