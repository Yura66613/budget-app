// Core types for the budget app

export interface Expense {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
}

export interface Budget {
  id: string;
  name: string;
  totalAmount: number;
  spent: number;
  remaining: number;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}