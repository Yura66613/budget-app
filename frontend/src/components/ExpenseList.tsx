import React from 'react';
import { Expense } from '../types/budget';

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDeleteExpense }) => {
  if (expenses.length === 0) {
    return (
      <div className="expense-list">
        <h3>Список витрат</h3>
        <p className="no-expenses">Немає витрат для відображення</p>
      </div>
    );
  }

  return (
    <div className="expense-list">
      <h3>Список витрат</h3>
      <div className="expenses">
        {expenses.map((expense) => (
          <div key={expense.id} className="expense-item">
            <div className="expense-info">
              <span className="expense-name">{expense.name}</span>
              <span className="expense-amount">{expense.amount.toFixed(2)} ₴</span>
              <span className="expense-date">
                {new Date(expense.date).toLocaleDateString('uk-UA')}
              </span>
            </div>
            <button
              onClick={() => onDeleteExpense(expense.id)}
              className="delete-button"
              title="Видалити витрату"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;