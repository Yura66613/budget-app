import { Request, Response } from 'express';
import { expenseService } from '../services/ExpenseService';
import { accountService } from '../services/AccountService';
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

  static getExpensesByAccount = (req: Request, res: Response): void => {
    try {
      const accountId = parseInt(req.params.accountId);
      
      if (isNaN(accountId)) {
        res.status(400).json({
          success: false,
          message: 'Invalid account ID'
        });
        return;
      }

      const expenses = expenseService.getExpensesByAccount(accountId);
      res.json({
        success: true,
        data: expenses,
        total: expenseService.getTotalExpensesByAccount(accountId)
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve expenses for account',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  static createExpense = (req: Request, res: Response): void => {
    try {
      const { description, amount, accountId }: CreateExpenseRequest = req.body;

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

      if (!accountId || typeof accountId !== 'number') {
        res.status(400).json({
          success: false,
          message: 'Account ID is required and must be a number'
        });
        return;
      }

      // Check if account exists
      const account = accountService.getAccountById(accountId);
      if (!account) {
        res.status(400).json({
          success: false,
          message: 'Account not found'
        });
        return;
      }

      const expense = expenseService.createExpense({
        description: description.trim(),
        amount,
        accountId
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

  static deleteExpense = (req: Request, res: Response): void => {
    try {
      const id = parseInt(req.params.id);

      if (isNaN(id)) {
        res.status(400).json({
          success: false,
          message: 'Invalid expense ID'
        });
        return;
      }

      const deleted = expenseService.deleteExpense(id);

      if (!deleted) {
        res.status(404).json({
          success: false,
          message: 'Expense not found'
        });
        return;
      }

      res.json({
        success: true,
        message: 'Expense deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to delete expense',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };
}