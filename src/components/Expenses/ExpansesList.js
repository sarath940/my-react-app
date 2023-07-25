import ExpensesItem from "./ExpensesItem";
import "./ExpansesList.css";

function ExpansesList(props) {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback "> Found no Expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} ;
    </ul>
  );
}
export default ExpansesList;
