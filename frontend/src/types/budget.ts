export interface Expense {
  id: string;
  name: string;
  amount: number;
  date: string;
}

export interface BudgetSummary {
  totalExpenses: number;
  expenses: Expense[];
}