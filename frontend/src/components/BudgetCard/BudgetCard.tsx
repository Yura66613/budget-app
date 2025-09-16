import React from 'react';
import type { Budget } from '../../types';
import './BudgetCard.css';

interface BudgetCardProps {
  budget: Budget;
}

export const BudgetCard: React.FC<BudgetCardProps> = ({ budget }) => {
  const progressPercentage = (budget.spent / budget.totalAmount) * 100;
  const isOverBudget = budget.spent > budget.totalAmount;

  return (
    <div className="budget-card">
      <div className="budget-card-header">
        <h3>{budget.name}</h3>
        <span className="budget-amount">${budget.totalAmount.toLocaleString()}</span>
      </div>
      
      <div className="budget-progress">
        <div className="progress-bar">
          <div 
            className={`progress-fill ${isOverBudget ? 'over-budget' : ''}`}
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
        <span className="progress-text">{progressPercentage.toFixed(1)}%</span>
      </div>
      
      <div className="budget-details">
        <div className="budget-detail">
          <span className="label">Spent:</span>
          <span className={`value ${isOverBudget ? 'over-budget' : ''}`}>
            ${budget.spent.toLocaleString()}
          </span>
        </div>
        <div className="budget-detail">
          <span className="label">Remaining:</span>
          <span className={`value ${budget.remaining < 0 ? 'negative' : 'positive'}`}>
            ${Math.abs(budget.remaining).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};