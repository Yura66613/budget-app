import React, { useState } from 'react';

interface ExpenseFormProps {
  onAddExpense: (name: string, amount: number) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!expenseName.trim() || !expenseAmount.trim()) {
      alert('Будь ласка, заповніть всі поля');
      return;
    }

    const amount = parseFloat(expenseAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Будь ласка, введіть правильну суму');
      return;
    }

    onAddExpense(expenseName.trim(), amount);
    setExpenseName('');
    setExpenseAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h3>Додати витрату</h3>
      <div className="form-group">
        <label htmlFor="expenseName">Витрата:</label>
        <input
          type="text"
          id="expenseName"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="Назва витрати"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="expenseAmount">Сума:</label>
        <input
          type="number"
          id="expenseAmount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          placeholder="0.00"
          step="0.01"
          min="0.01"
          required
        />
      </div>
      <button type="submit" className="add-button">
        Додати витрату
      </button>
    </form>
  );
};

export default ExpenseForm;