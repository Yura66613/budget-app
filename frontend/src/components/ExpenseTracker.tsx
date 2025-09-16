import React, { useState, useEffect } from 'react';
import { expenseAPI, Expense } from '../services/expenseAPI';

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load expenses on component mount
  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    try {
      setLoading(true);
      setError(null);
      const { expenses: loadedExpenses, total: totalFromAPI } = await expenseAPI.getAllExpenses();
      setExpenses(loadedExpenses);
      setTotal(totalFromAPI);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load expenses');
      console.error('Error loading expenses:', err);
    } finally {
      setLoading(false);
    }
  };

  const addExpense = async () => {
    if (!description.trim() || !amount || isNaN(Number(amount))) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const newExpense = await expenseAPI.createExpense({
        description: description.trim(),
        amount: Number(amount)
      });
      
      // Update local state
      setExpenses(prev => [...prev, newExpense]);
      setDescription('');
      setAmount('');
      
      // Refresh the total from the server
      await loadExpenses();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add expense');
      console.error('Error adding expense:', err);
    } finally {
      setLoading(false);
    }
  };

  const calculateSum = async () => {
    try {
      setLoading(true);
      setError(null);
      const { total: totalFromAPI } = await expenseAPI.getAllExpenses();
      setTotal(totalFromAPI);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to calculate total');
      console.error('Error calculating total:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addExpense();
    }
  };

  return (
    <div>
      {/* Error Display */}
      {error && (
        <div className="error-message" style={{ 
          color: '#dc3545', 
          backgroundColor: '#f8d7da', 
          border: '1px solid #f5c6cb', 
          padding: '0.75rem', 
          marginBottom: '1rem', 
          borderRadius: '4px' 
        }}>
          {error}
        </div>
      )}

      {/* Loading Indicator */}
      {loading && (
        <div className="loading-message" style={{ 
          textAlign: 'center', 
          color: '#007bff', 
          margin: '1rem 0' 
        }}>
          Loading...
        </div>
      )}

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
          disabled={!description.trim() || !amount || isNaN(Number(amount)) || loading}
        >
          {loading ? 'Adding...' : 'Add Expense'}
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
          disabled={expenses.length === 0 || loading}
        >
          {loading ? 'Calculating...' : 'Sum Up All Expenses'}
        </button>
      </div>
    </div>
  );
};

export default ExpenseTracker;