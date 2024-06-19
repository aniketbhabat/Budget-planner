import React, { createContext, useState } from 'react';

// Create a Context for the budget
export const BudgetContext = createContext();

// Create a Provider component
export const BudgetProvider = ({ children }) => {
  // Initialize state for budgets and expenses
  const [budgets, setBudgets] = useState({});
  const [expenses, setExpenses] = useState([]);

  // Function to add a new budget
  const addBudget = (category, amount) => {
    setBudgets(prevBudgets => ({ ...prevBudgets, [category]: amount }));
  };

  // Function to add a new expense
  const addExpense = (category, amount) => {
    setExpenses(prevExpenses => [...prevExpenses, { category, amount }]);
  };

  return (
    <BudgetContext.Provider value={{ budgets, expenses, addBudget, addExpense }}>
      {children}
    </BudgetContext.Provider>
  );
};