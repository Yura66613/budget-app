import React from 'react';
import { BudgetCard } from '../components/BudgetCard/BudgetCard';
import { ExpenseForm } from '../components/ExpenseForm/ExpenseForm';
import { ExpenseList } from '../components/ExpenseList/ExpenseList';
import { useBudget } from '../contexts/BudgetContext';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
  const { state } = useBudget();

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p>Overview of your budget and recent expenses</p>
      </div>
      
      <div className="dashboard-content">
        <div className="budget-section">
          <h3>Your Budgets</h3>
          <div className="budget-cards">
            {state.budgets.map(budget => (
              <BudgetCard key={budget.id} budget={budget} />
            ))}
          </div>
        </div>
        
        <div className="expense-section">
          <div className="expense-form-container">
            <ExpenseForm />
          </div>
          <div className="expense-list-container">
            <ExpenseList />
          </div>
        </div>
      </div>
    </div>
  );
};