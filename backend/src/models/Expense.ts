export interface Expense {
  id: number;
  description: string;
  amount: number;
  accountId: number;
  createdAt?: Date;
}

export interface CreateExpenseRequest {
  description: string;
  amount: number;
  accountId: number;
}