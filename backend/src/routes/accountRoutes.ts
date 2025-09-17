import { Router } from 'express';
import { AccountController } from '../controllers/AccountController';

const router = Router();

// GET /api/accounts - Get all accounts
router.get('/', AccountController.getAllAccounts);

// GET /api/accounts/:id - Get account by ID
router.get('/:id', AccountController.getAccountById);

// POST /api/accounts - Create a new account
router.post('/', AccountController.createAccount);

// PUT /api/accounts/:id - Update an account
router.put('/:id', AccountController.updateAccount);

// DELETE /api/accounts/:id - Delete an account
router.delete('/:id', AccountController.deleteAccount);

export default router;