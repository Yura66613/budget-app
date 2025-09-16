import React from 'react';
import ExpenseTracker from './components/ExpenseTracker';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Budget App - Expense Tracker</h1>
      <ExpenseTracker />
    </div>
  );
}

export default App;