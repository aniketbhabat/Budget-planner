import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseList = () => {
  const { expenses } = useContext(BudgetContext);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.category}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;