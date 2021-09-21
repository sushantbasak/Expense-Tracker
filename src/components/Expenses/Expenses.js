import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState('2020');

  const saveYearHandler = (year) => {
    setEnteredYear(year);
  };

  return (
    <div>
      <ExpenseFilter onSaveYear={saveYearHandler} selected={enteredYear} />
      <Card className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
