export interface Expense {
  id: string;
  name: string;
  amount: number;
  date: Date;
}

export interface BudgetSummary {
  totalExpenses: number;
  expenses: Expense[];
}