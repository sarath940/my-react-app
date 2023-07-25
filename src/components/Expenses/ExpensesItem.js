import Card from "../UI/Card";
import ExpanseDate from "./ExpanseDate";

import "./ExpensesItem.css";
function ExpensesItem(props) {
  return (
    <li>
      <div>
        <Card className="expense-item">
          <ExpanseDate date={props.date} />
          <div className="expense-item__description">
            <h2> {props.title} </h2>
            <div className="expense-item__price">$ {props.amount}</div>
          </div>
        </Card>
      </div>
    </li>
  );
}

export default ExpensesItem;
