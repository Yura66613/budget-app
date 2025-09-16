import { Expense, BudgetSummary } from '../models/expense';

class BudgetService {
  private expenses: Expense[] = [];

  addExpense(name: string, amount: number): Expense {
    const expense: Expense = {
      id: Date.now().toString(),
      name,
      amount,
      date: new Date()
    };
    this.expenses.push(expense);
    return expense;
  }

  getAllExpenses(): Expense[] {
    return this.expenses;
  }

  deleteExpense(id: string): boolean {
    const index = this.expenses.findIndex(expense => expense.id === id);
    if (index !== -1) {
      this.expenses.splice(index, 1);
      return true;
    }
    return false;
  }

  getBudgetSummary(): BudgetSummary {
    const totalExpenses = this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    return {
      totalExpenses,
      expenses: this.expenses
    };
  }

  clearAllExpenses(): void {
    this.expenses = [];
  }
}

export const budgetService = new BudgetService();