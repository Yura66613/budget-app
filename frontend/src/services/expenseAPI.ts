interface Expense {
  id: number;
  description: string;
  amount: number;
  createdAt?: string;
}

interface CreateExpenseRequest {
  description: string;
  amount: number;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  total?: number;
  message?: string;
  error?: string;
}

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

class ExpenseAPI {
  async getAllExpenses(): Promise<{ expenses: Expense[], total: number }> {
    const response = await fetch(`${API_BASE_URL}/expenses`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result: ApiResponse<Expense[]> = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to fetch expenses');
    }
    
    return {
      expenses: result.data,
      total: result.total || 0
    };
  }

  async createExpense(expenseData: CreateExpenseRequest): Promise<Expense> {
    const response = await fetch(`${API_BASE_URL}/expenses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expenseData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result: ApiResponse<Expense> = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to create expense');
    }
    
    return result.data;
  }
}

export const expenseAPI = new ExpenseAPI();
export type { Expense, CreateExpenseRequest };