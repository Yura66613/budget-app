import { Router } from 'express';
import { BudgetController } from '../controllers/budgetController';

const router = Router();
const budgetController = new BudgetController();

// Budget routes
router.get('/summary', budgetController.getBudgetSummary);
router.get('/expenses', budgetController.getAllExpenses);
router.post('/expenses', budgetController.addExpense);
router.delete('/expenses/:id', budgetController.deleteExpense);
router.delete('/expenses', budgetController.clearAllExpenses);

export { router as budgetRoutes };