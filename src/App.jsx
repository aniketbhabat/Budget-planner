
import React from 'react';
import { BudgetProvider } from './context/BudgetContext';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BudgetSummary from './components/BudgetSummary';

const App = () => {
  return (
    <BudgetProvider>
      <div>
        <h1>Budget Planner</h1>
        <BudgetForm />
        <ExpenseForm />
        <ExpenseList />
        <BudgetSummary />
      </div>
    </BudgetProvider>
  );
};

export default App;
