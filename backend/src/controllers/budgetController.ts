import { Request, Response } from 'express';
import { budgetService } from '../services/budgetService';

export class BudgetController {
  // GET /api/budget/summary
  getBudgetSummary = (req: Request, res: Response): void => {
    try {
      const summary = budgetService.getBudgetSummary();
      res.json(summary);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get budget summary' });
    }
  };

  // POST /api/budget/expenses
  addExpense = (req: Request, res: Response): void => {
    try {
      const { name, amount } = req.body;
      
      if (!name || typeof amount !== 'number' || amount <= 0) {
        res.status(400).json({ error: 'Name and positive amount are required' });
        return;
      }

      const expense = budgetService.addExpense(name, amount);
      res.status(201).json(expense);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add expense' });
    }
  };

  // GET /api/budget/expenses
  getAllExpenses = (req: Request, res: Response): void => {
    try {
      const expenses = budgetService.getAllExpenses();
      res.json(expenses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get expenses' });
    }
  };

  // DELETE /api/budget/expenses/:id
  deleteExpense = (req: Request, res: Response): void => {
    try {
      const { id } = req.params;
      const deleted = budgetService.deleteExpense(id);
      
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Expense not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete expense' });
    }
  };

  // DELETE /api/budget/expenses
  clearAllExpenses = (req: Request, res: Response): void => {
    try {
      budgetService.clearAllExpenses();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to clear expenses' });
    }
  };
}