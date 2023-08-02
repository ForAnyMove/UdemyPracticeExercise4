import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      {showForm 
        ? <ExpenseForm showHandler={setShowForm} onSaveExpenseData={saveExpenseDataHandler} />
        : <button onClick={() => setShowForm(true)}>Add New Expense</button>
      }
    </div>
  );
};

export default NewExpense;
