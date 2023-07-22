import Card from "../UI/Card";
import "./Expanses.css";
import ExpensesItem from "./ExpensesItem";
function Expanses(props) {
  return (
    <Card className="expenses">
      <ExpensesItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpensesItem>
      <ExpensesItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpensesItem>
      <ExpensesItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpensesItem>
      <ExpensesItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpensesItem>
    </Card>
  );
}

export default Expanses;
