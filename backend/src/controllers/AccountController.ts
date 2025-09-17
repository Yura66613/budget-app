import { Request, Response } from 'express';
import { accountService } from '../services/AccountService';
import { CreateAccountRequest, UpdateAccountRequest } from '../models/Account';

export class AccountController {
  static getAllAccounts = (_req: Request, res: Response): void => {
    try {
      const accounts = accountService.getAllAccounts();
      res.json({
        success: true,
        data: accounts,
        totalBalance: accountService.getTotalBalance()
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve accounts',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  static getAccountById = (req: Request, res: Response): void => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        res.status(400).json({
          success: false,
          message: 'Invalid account ID'
        });
        return;
      }

      const account = accountService.getAccountById(id);
      
      if (!account) {
        res.status(404).json({
          success: false,
          message: 'Account not found'
        });
        return;
      }

      res.json({
        success: true,
        data: account
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve account',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  static createAccount = (req: Request, res: Response): void => {
    try {
      const { name, description, initialBalance }: CreateAccountRequest = req.body;

      // Validation
      if (!name || typeof name !== 'string' || name.trim().length === 0) {
        res.status(400).json({
          success: false,
          message: 'Account name is required and must be a non-empty string'
        });
        return;
      }

      if (initialBalance !== undefined && (typeof initialBalance !== 'number' || initialBalance < 0)) {
        res.status(400).json({
          success: false,
          message: 'Initial balance must be a non-negative number'
        });
        return;
      }

      const accountData: CreateAccountRequest = {
        name: name.trim()
      };

      if (description !== undefined) {
        accountData.description = description.trim();
      }

      if (initialBalance !== undefined) {
        accountData.initialBalance = initialBalance;
      }

      const account = accountService.createAccount(accountData);

      res.status(201).json({
        success: true,
        data: account,
        message: 'Account created successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to create account',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  static updateAccount = (req: Request, res: Response): void => {
    try {
      const id = parseInt(req.params.id);
      const { name, description }: UpdateAccountRequest = req.body;

      if (isNaN(id)) {
        res.status(400).json({
          success: false,
          message: 'Invalid account ID'
        });
        return;
      }

      // Validation
      if (name !== undefined && (typeof name !== 'string' || name.trim().length === 0)) {
        res.status(400).json({
          success: false,
          message: 'Account name must be a non-empty string'
        });
        return;
      }

      const updateData: UpdateAccountRequest = {};

      if (name !== undefined) {
        updateData.name = name.trim();
      }

      if (description !== undefined) {
        updateData.description = description.trim();
      }

      const account = accountService.updateAccount(id, updateData);

      if (!account) {
        res.status(404).json({
          success: false,
          message: 'Account not found'
        });
        return;
      }

      res.json({
        success: true,
        data: account,
        message: 'Account updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to update account',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  static deleteAccount = (req: Request, res: Response): void => {
    try {
      const id = parseInt(req.params.id);

      if (isNaN(id)) {
        res.status(400).json({
          success: false,
          message: 'Invalid account ID'
        });
        return;
      }

      if (id === 1) {
        res.status(400).json({
          success: false,
          message: 'Cannot delete the default account'
        });
        return;
      }

      const deleted = accountService.deleteAccount(id);

      if (!deleted) {
        res.status(404).json({
          success: false,
          message: 'Account not found'
        });
        return;
      }

      res.json({
        success: true,
        message: 'Account deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to delete account',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };
}