import { Expense, CreateExpenseRequest } from '../models/Expense';

class ExpenseService {
  private expenses: Expense[] = [];
  private nextId = 1;

  getAllExpenses(): Expense[] {
    return this.expenses;
  }

  createExpense(data: CreateExpenseRequest): Expense {
    const expense: Expense = {
      id: this.nextId++,
      description: data.description,
      amount: data.amount,
      createdAt: new Date()
    };
    
    this.expenses.push(expense);
    return expense;
  }

  getExpenseById(id: number): Expense | undefined {
    return this.expenses.find(expense => expense.id === id);
  }

  getTotalExpenses(): number {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }
}

export const expenseService = new ExpenseService();