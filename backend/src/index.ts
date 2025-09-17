import express from 'express';
import cors from 'cors';
import expenseRoutes from './routes/expenseRoutes';
import accountRoutes from './routes/accountRoutes';
import { errorHandler, notFound } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// Routes
app.get('/health', (_req, res) => {
  res.json({ 
    success: true, 
    message: 'Budget App Backend is running!',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/expenses', expenseRoutes);
app.use('/api/accounts', accountRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`💰 Expenses API: http://localhost:${PORT}/api/expenses`);
  console.log(`🏦 Accounts API: http://localhost:${PORT}/api/accounts`);
});