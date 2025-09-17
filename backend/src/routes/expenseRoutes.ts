import { Router } from 'express';
import { ExpenseController } from '../controllers/ExpenseController';

const router = Router();

// GET /api/expenses - Get all expenses
router.get('/', ExpenseController.getAllExpenses);

// GET /api/expenses/account/:accountId - Get expenses by account
router.get('/account/:accountId', ExpenseController.getExpensesByAccount);

// POST /api/expenses - Create a new expense
router.post('/', ExpenseController.createExpense);

// DELETE /api/expenses/:id - Delete an expense
router.delete('/:id', ExpenseController.deleteExpense);

export default router;