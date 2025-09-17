import { Expense, CreateExpenseRequest } from '../models/Expense';
import { accountService } from './AccountService';

class ExpenseService {
  private expenses: Expense[] = [];
  private nextId = 1;

  getAllExpenses(): Expense[] {
    return this.expenses;
  }

  getExpensesByAccount(accountId: number): Expense[] {
    return this.expenses.filter(expense => expense.accountId === accountId);
  }

  createExpense(data: CreateExpenseRequest): Expense {
    // Validate that account exists
    const account = accountService.getAccountById(data.accountId);
    if (!account) {
      throw new Error('Account not found');
    }

    const expense: Expense = {
      id: this.nextId++,
      description: data.description,
      amount: data.amount,
      accountId: data.accountId,
      createdAt: new Date()
    };
    
    this.expenses.push(expense);
    
    // Update account balance
    accountService.updateAccountBalance(data.accountId, -data.amount);
    
    return expense;
  }

  getExpenseById(id: number): Expense | undefined {
    return this.expenses.find(expense => expense.id === id);
  }

  getTotalExpenses(): number {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  getTotalExpensesByAccount(accountId: number): number {
    return this.getExpensesByAccount(accountId)
      .reduce((total, expense) => total + expense.amount, 0);
  }

  deleteExpense(id: number): boolean {
    const expenseIndex = this.expenses.findIndex(expense => expense.id === id);
    if (expenseIndex === -1) {
      return false;
    }

    const expense = this.expenses[expenseIndex];
    // Restore account balance
    accountService.updateAccountBalance(expense.accountId, expense.amount);
    
    this.expenses.splice(expenseIndex, 1);
    return true;
  }
}

export const expenseService = new ExpenseService();