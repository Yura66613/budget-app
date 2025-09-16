import { Request, Response } from 'express';
import { expenseService } from '../services/ExpenseService';
import { CreateExpenseRequest } from '../models/Expense';

export class ExpenseController {
  static getAllExpenses = (_req: Request, res: Response): void => {
    try {
      const expenses = expenseService.getAllExpenses();
      res.json({
        success: true,
        data: expenses,
        total: expenseService.getTotalExpenses()
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve expenses',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  static createExpense = (req: Request, res: Response): void => {
    try {
      const { description, amount }: CreateExpenseRequest = req.body;

      // Validation
      if (!description || typeof description !== 'string' || description.trim().length === 0) {
        res.status(400).json({
          success: false,
          message: 'Description is required and must be a non-empty string'
        });
        return;
      }

      if (!amount || typeof amount !== 'number' || amount <= 0) {
        res.status(400).json({
          success: false,
          message: 'Amount is required and must be a positive number'
        });
        return;
      }

      const expense = expenseService.createExpense({
        description: description.trim(),
        amount
      });

      res.status(201).json({
        success: true,
        data: expense,
        message: 'Expense created successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to create expense',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };
}