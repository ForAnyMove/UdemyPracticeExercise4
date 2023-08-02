import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const onChange = (year) => {
    setFilteredYear(year);
  };
  return (
    <>
      <Card className="expenses" >
        <ExpensesFilter selected={filteredYear} onChangeFilter={onChange} />
        {props.items
          .filter((item) => item.date?.getFullYear() === Number(filteredYear))
          .map((item) =>
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
            />
          )
        }
      </Card>
    </>
  );
}

export default Expenses;
