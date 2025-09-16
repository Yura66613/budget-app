import React, { useState, useEffect } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import BudgetSummary from '../components/BudgetSummary';
import { budgetService } from '../services/budgetService';
import { Expense } from '../types/budget';

const BudgetPage: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
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
      const summary = await budgetService.getBudgetSummary();
      setExpenses(summary.expenses);
      setTotalExpenses(summary.totalExpenses);
    } catch (error) {
      setError('Не вдалося завантажити витрати');
      console.error('Error loading expenses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (name: string, amount: number) => {
    try {
      setLoading(true);
      setError(null);
      await budgetService.addExpense(name, amount);
      await loadExpenses(); // Reload to get updated summary
    } catch (error) {
      setError('Не вдалося додати витрату');
      console.error('Error adding expense:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteExpense = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      await budgetService.deleteExpense(id);
      await loadExpenses(); // Reload to get updated summary
    } catch (error) {
      setError('Не вдалося видалити витрату');
      console.error('Error deleting expense:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClearAll = async () => {
    if (window.confirm('Ви впевнені, що хочете видалити всі витрати?')) {
      try {
        setLoading(true);
        setError(null);
        await budgetService.clearAllExpenses();
        await loadExpenses(); // Reload to get updated summary
      } catch (error) {
        setError('Не вдалося очистити витрати');
        console.error('Error clearing expenses:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="budget-page">
      <header className="header">
        <h1>Бюджет додаток</h1>
        <p>Простий калькулятор витрат</p>
      </header>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {loading && (
        <div className="loading-message">
          Завантаження...
        </div>
      )}

      <div className="content">
        <div className="left-column">
          <ExpenseForm onAddExpense={handleAddExpense} />
          <BudgetSummary
            totalExpenses={totalExpenses}
            expenseCount={expenses.length}
            onClearAll={handleClearAll}
          />
        </div>
        
        <div className="right-column">
          <ExpenseList
            expenses={expenses}
            onDeleteExpense={handleDeleteExpense}
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetPage;