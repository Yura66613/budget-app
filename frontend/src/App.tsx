import React, { useState } from 'react';
import ExpenseTracker from './components/ExpenseTracker';
import AccountManager from './components/AccountManager';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'expenses' | 'accounts'>('expenses');
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAccountsChange = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>Budget App - Expense Tracker</h1>
      
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'expenses' ? 'active' : ''}`}
          onClick={() => setActiveTab('expenses')}
        >
          Expenses
        </button>
        <button 
          className={`tab-button ${activeTab === 'accounts' ? 'active' : ''}`}
          onClick={() => setActiveTab('accounts')}
        >
          Accounts
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'expenses' ? (
          <ExpenseTracker key={refreshKey} />
        ) : (
          <AccountManager onAccountsChange={handleAccountsChange} />
        )}
      </div>
    </div>
  );
}

export default App;