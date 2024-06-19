import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const BudgetSummary = () => {
  const { budgets, expenses } = useContext(BudgetContext);

  // Calculate total expenses per category
  const totalExpenses = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div>
      <h2>Budget Summary</h2>
      <ul>
        {Object.keys(budgets).map((category) => (
          <li key={category}>
            {category}: Budget ${budgets[category]} - Spent ${totalExpenses[category] || 0}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetSummary;