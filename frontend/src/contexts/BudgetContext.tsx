import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { Expense, Budget, Category } from '../types';

interface BudgetState {
  expenses: Expense[];
  budgets: Budget[];
  categories: Category[];
}

type BudgetAction = 
  | { type: 'ADD_EXPENSE'; payload: Expense }
  | { type: 'REMOVE_EXPENSE'; payload: string }
  | { type: 'ADD_BUDGET'; payload: Budget }
  | { type: 'UPDATE_BUDGET'; payload: Budget }
  | { type: 'ADD_CATEGORY'; payload: Category };

interface BudgetContextType {
  state: BudgetState;
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
  addBudget: (budget: Budget) => void;
  updateBudget: (budget: Budget) => void;
  addCategory: (category: Category) => void;
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

const budgetReducer = (state: BudgetState, action: BudgetAction): BudgetState => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'REMOVE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload),
      };
    case 'ADD_BUDGET':
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      };
    case 'UPDATE_BUDGET':
      return {
        ...state,
        budgets: state.budgets.map(budget => 
          budget.id === action.payload.id ? action.payload : budget
        ),
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    default:
      return state;
  }
};

const initialState: BudgetState = {
  expenses: [],
  budgets: [
    {
      id: '1',
      name: 'Monthly Budget',
      totalAmount: 2000,
      spent: 650,
      remaining: 1350,
    }
  ],
  categories: [
    { id: '1', name: 'Food', color: '#ff6b6b' },
    { id: '2', name: 'Transportation', color: '#4ecdc4' },
    { id: '3', name: 'Entertainment', color: '#45b7d1' },
    { id: '4', name: 'Utilities', color: '#96ceb4' },
    { id: '5', name: 'Other', color: '#feca57' },
  ],
};

export const BudgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const addExpense = (expense: Expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  const removeExpense = (id: string) => {
    dispatch({ type: 'REMOVE_EXPENSE', payload: id });
  };

  const addBudget = (budget: Budget) => {
    dispatch({ type: 'ADD_BUDGET', payload: budget });
  };

  const updateBudget = (budget: Budget) => {
    dispatch({ type: 'UPDATE_BUDGET', payload: budget });
  };

  const addCategory = (category: Category) => {
    dispatch({ type: 'ADD_CATEGORY', payload: category });
  };

  return (
    <BudgetContext.Provider value={{
      state,
      addExpense,
      removeExpense,
      addBudget,
      updateBudget,
      addCategory,
    }}>
      {children}
    </BudgetContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (context === undefined) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};