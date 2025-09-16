import { Router } from 'express';
import { ExpenseController } from '../controllers/ExpenseController';

const router = Router();

// GET /api/expenses - Get all expenses
router.get('/', ExpenseController.getAllExpenses);

// POST /api/expenses - Create a new expense
router.post('/', ExpenseController.createExpense);

export default router;