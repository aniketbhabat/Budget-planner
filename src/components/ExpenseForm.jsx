import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseForm = () => {
  const { addExpense } = useContext(BudgetContext);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(category, parseFloat(amount));
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Track Expense</h2>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;