import { useState } from "react";
import Card from "../UI/Card";
import "./Expanses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpansesList from "./ExpansesList";
import ExpansesChart from "./ExpansesChart";
function Expanses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpansesChart expenses={filteredExpenses} />
        <ExpansesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expanses;
