import axios from 'axios';
import { Expense, BudgetSummary } from '../types/budget';

const API_BASE_URL = '/api/budget';

export const budgetService = {
  // Get budget summary with total expenses
  getBudgetSummary: async (): Promise<BudgetSummary> => {
    const response = await axios.get(`${API_BASE_URL}/summary`);
    return response.data;
  },

  // Get all expenses
  getAllExpenses: async (): Promise<Expense[]> => {
    const response = await axios.get(`${API_BASE_URL}/expenses`);
    return response.data;
  },

  // Add new expense
  addExpense: async (name: string, amount: number): Promise<Expense> => {
    const response = await axios.post(`${API_BASE_URL}/expenses`, {
      name,
      amount
    });
    return response.data;
  },

  // Delete expense by ID
  deleteExpense: async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/expenses/${id}`);
  },

  // Clear all expenses
  clearAllExpenses: async (): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/expenses`);
  }
};