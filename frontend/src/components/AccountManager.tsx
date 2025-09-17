import React, { useState, useEffect } from 'react';
import { accountAPI, Account, CreateAccountRequest } from '../services/expenseAPI';

interface AccountManagerProps {
  onAccountsChange: () => void;
}

const AccountManager: React.FC<AccountManagerProps> = ({ onAccountsChange }) => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [initialBalance, setInitialBalance] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    loadAccounts();
  }, []);

  const loadAccounts = async () => {
    try {
      setLoading(true);
      setError(null);
      const { accounts: loadedAccounts, totalBalance: total } = await accountAPI.getAllAccounts();
      setAccounts(loadedAccounts);
      setTotalBalance(total);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load accounts');
      console.error('Error loading accounts:', err);
    } finally {
      setLoading(false);
    }
  };

  const createAccount = async () => {
    if (!name.trim()) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const accountData: CreateAccountRequest = {
        name: name.trim()
      };

      if (description.trim()) {
        accountData.description = description.trim();
      }

      if (initialBalance && !isNaN(Number(initialBalance))) {
        accountData.initialBalance = Number(initialBalance);
      }

      await accountAPI.createAccount(accountData);
      
      // Reset form
      setName('');
      setDescription('');
      setInitialBalance('');
      setShowForm(false);
      
      // Refresh accounts and notify parent
      await loadAccounts();
      onAccountsChange();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create account');
      console.error('Error creating account:', err);
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async (id: number) => {
    if (id === 1) {
      setError('Cannot delete the default account');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this account? This cannot be undone.')) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await accountAPI.deleteAccount(id);
      await loadAccounts();
      onAccountsChange();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete account');
      console.error('Error deleting account:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      createAccount();
    }
  };

  return (
    <div className="account-manager">
      <div className="account-header">
        <h2>Accounts</h2>
        <div className="total-balance">Total Balance: ${totalBalance.toFixed(2)}</div>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
          disabled={loading}
        >
          {showForm ? 'Cancel' : 'Add Account'}
        </button>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {showForm && (
        <div className="account-form">
          <h3>Add New Account</h3>
          <div className="form-group">
            <label htmlFor="accountName">Account Name:</label>
            <input
              type="text"
              id="accountName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter account name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="accountDescription">Description (optional):</label>
            <input
              type="text"
              id="accountDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter account description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="initialBalance">Initial Balance (optional):</label>
            <input
              type="number"
              id="initialBalance"
              value={initialBalance}
              onChange={(e) => setInitialBalance(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="0.00"
              min="0"
              step="0.01"
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={createAccount}
            disabled={!name.trim() || loading}
          >
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </div>
      )}

      <div className="accounts-list">
        <h3>Your Accounts ({accounts.length})</h3>
        {accounts.length === 0 ? (
          <div className="no-accounts">
            No accounts found. Create your first account above!
          </div>
        ) : (
          accounts.map((account) => (
            <div key={account.id} className="account-item">
              <div className="account-info">
                <div className="account-name">{account.name}</div>
                {account.description && (
                  <div className="account-description">{account.description}</div>
                )}
                <div className="account-balance">${account.balance.toFixed(2)}</div>
              </div>
              {account.id !== 1 && (
                <button
                  className="btn btn-danger"
                  onClick={() => deleteAccount(account.id)}
                  disabled={loading}
                >
                  Delete
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AccountManager;