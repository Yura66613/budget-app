import React from 'react';

interface BudgetSummaryProps {
  totalExpenses: number;
  expenseCount: number;
  onClearAll: () => void;
}

const BudgetSummary: React.FC<BudgetSummaryProps> = ({ 
  totalExpenses, 
  expenseCount, 
  onClearAll 
}) => {
  return (
    <div className="budget-summary">
      <h3>Загальна сума</h3>
      <div className="summary-info">
        <div className="total-amount">
          <span className="label">Загальні витрати:</span>
          <span className="amount">{totalExpenses.toFixed(2)} ₴</span>
        </div>
        <div className="expense-count">
          <span className="label">Кількість витрат:</span>
          <span className="count">{expenseCount}</span>
        </div>
      </div>
      {expenseCount > 0 && (
        <button onClick={onClearAll} className="clear-button">
          Очистити всі витрати
        </button>
      )}
    </div>
  );
};

export default BudgetSummary;