import React, { useState } from 'react';

interface Expense {
  id: number;
  description: string;
  amount: number;
}

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState(0);

  const addExpense = () => {
    if (description.trim() && amount && !isNaN(Number(amount))) {
      const newExpense: Expense = {
        id: Date.now(),
        description: description.trim(),
        amount: Number(amount)
      };
      
      setExpenses([...expenses, newExpense]);
      setDescription('');
      setAmount('');
    }
  };

  const calculateSum = () => {
    const sum = expenses.reduce((total, expense) => total + expense.amount, 0);
    setTotal(sum);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addExpense();
    }
  };

  return (
    <div>
      {/* Expense Input Form */}
      <div className="expense-form">
        <h3>Add New Expense</h3>
        <div className="form-group">
          <label htmlFor="description">Expense Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter expense description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount ($):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="0.00"
            min="0"
            step="0.01"
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={addExpense}
          disabled={!description.trim() || !amount || isNaN(Number(amount))}
        >
          Add Expense
        </button>
      </div>

      {/* Expense List */}
      <div className="expense-list">
        <h3>Expenses ({expenses.length})</h3>
        {expenses.length === 0 ? (
          <div className="no-expenses">
            No expenses added yet. Add your first expense above!
          </div>
        ) : (
          expenses.map((expense) => (
            <div key={expense.id} className="expense-item">
              <span className="expense-description">{expense.description}</span>
              <span className="expense-amount">${expense.amount.toFixed(2)}</span>
            </div>
          ))
        )}
      </div>

      {/* Sum Section */}
      <div className="total-section">
        <h3>Total Summary</h3>
        <div className="total-amount">${total.toFixed(2)}</div>
        <button
          className="btn btn-success"
          onClick={calculateSum}
          disabled={expenses.length === 0}
        >
          Sum Up All Expenses
        </button>
      </div>
    </div>
  );
};

export default ExpenseTracker;