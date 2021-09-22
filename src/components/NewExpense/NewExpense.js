import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    toggleExpenseForm();
  };

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const toggleExpenseForm = () => {
    setShowExpenseForm((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onToggleExpenseForm={toggleExpenseForm}
        />
      ) : (
        <button onClick={toggleExpenseForm}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
