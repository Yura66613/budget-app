export interface Expense {
  id: number;
  description: string;
  amount: number;
  createdAt?: Date;
}

export interface CreateExpenseRequest {
  description: string;
  amount: number;
}