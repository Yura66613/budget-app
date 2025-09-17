interface Expense {
  id: number;
  description: string;
  amount: number;
  accountId: number;
  createdAt?: string;
}

interface CreateExpenseRequest {
  description: string;
  amount: number;
  accountId: number;
}

interface Account {
  id: number;
  name: string;
  description?: string;
  balance: number;
  createdAt?: string;
}

interface CreateAccountRequest {
  name: string;
  description?: string;
  initialBalance?: number;
}

interface UpdateAccountRequest {
  name?: string;
  description?: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  total?: number;
  totalBalance?: number;
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

  async getExpensesByAccount(accountId: number): Promise<{ expenses: Expense[], total: number }> {
    const response = await fetch(`${API_BASE_URL}/expenses/account/${accountId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result: ApiResponse<Expense[]> = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to fetch expenses for account');
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

  async deleteExpense(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/expenses/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result: ApiResponse<null> = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to delete expense');
    }
  }
}

class AccountAPI {
  async getAllAccounts(): Promise<{ accounts: Account[], totalBalance: number }> {
    const response = await fetch(`${API_BASE_URL}/accounts`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result: ApiResponse<Account[]> = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to fetch accounts');
    }
    
    return {
      accounts: result.data,
      totalBalance: result.totalBalance || 0
    };
  }

  async getAccountById(id: number): Promise<Account> {
    const response = await fetch(`${API_BASE_URL}/accounts/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result: ApiResponse<Account> = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to fetch account');
    }
    
    return result.data;
  }

  async createAccount(accountData: CreateAccountRequest): Promise<Account> {
    const response = await fetch(`${API_BASE_URL}/accounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result: ApiResponse<Account> = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to create account');
    }
    
    return result.data;
  }

  async updateAccount(id: number, accountData: UpdateAccountRequest): Promise<Account> {
    const response = await fetch(`${API_BASE_URL}/accounts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result: ApiResponse<Account> = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to update account');
    }
    
    return result.data;
  }

  async deleteAccount(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/accounts/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result: ApiResponse<null> = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to delete account');
    }
  }
}

export const expenseAPI = new ExpenseAPI();
export const accountAPI = new AccountAPI();
export type { 
  Expense, 
  CreateExpenseRequest, 
  Account, 
  CreateAccountRequest, 
  UpdateAccountRequest 
};