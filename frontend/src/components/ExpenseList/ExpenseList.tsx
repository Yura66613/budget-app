import React from 'react';
import { useBudget } from '../../contexts/BudgetContext';
import './ExpenseList.css';

export const ExpenseList: React.FC = () => {
  const { state, removeExpense } = useBudget();

  const handleRemove = (id: string) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      removeExpense(id);
    }
  };

  const getCategoryColor = (categoryName: string) => {
    const category = state.categories.find(cat => cat.name === categoryName);
    return category?.color || '#6c757d';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (state.expenses.length === 0) {
    return (
      <div className="expense-list">
        <h3>Recent Expenses</h3>
        <div className="empty-state">
          <p>No expenses recorded yet.</p>
          <p>Add your first expense to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-list">
      <h3>Recent Expenses</h3>
      <div className="expense-items">
        {state.expenses.map(expense => (
          <div key={expense.id} className="expense-item">
            <div className="expense-info">
              <div 
                className="category-indicator"
                style={{ backgroundColor: getCategoryColor(expense.category) }}
              />
              <div className="expense-details">
                <div className="expense-description">{expense.description}</div>
                <div className="expense-meta">
                  <span className="expense-category">{expense.category}</span>
                  <span className="expense-date">{formatDate(expense.date)}</span>
                </div>
              </div>
            </div>
            <div className="expense-actions">
              <span className="expense-amount">${expense.amount.toFixed(2)}</span>
              <button 
                className="remove-btn"
                onClick={() => handleRemove(expense.id)}
                title="Remove expense"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};