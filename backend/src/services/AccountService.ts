import { Account, CreateAccountRequest, UpdateAccountRequest } from '../models/Account';

class AccountService {
  private accounts: Account[] = [];
  private nextId = 1;

  constructor() {
    // Create a default account for existing expenses
    this.createAccount({
      name: 'Main Account',
      description: 'Default account for expenses',
      initialBalance: 0
    });
  }

  getAllAccounts(): Account[] {
    return this.accounts;
  }

  createAccount(data: CreateAccountRequest): Account {
    const account: Account = {
      id: this.nextId++,
      name: data.name,
      balance: data.initialBalance || 0,
      createdAt: new Date()
    };
    
    if (data.description) {
      account.description = data.description;
    }
    
    this.accounts.push(account);
    return account;
  }

  getAccountById(id: number): Account | undefined {
    return this.accounts.find(account => account.id === id);
  }

  updateAccount(id: number, data: UpdateAccountRequest): Account | undefined {
    const accountIndex = this.accounts.findIndex(account => account.id === id);
    if (accountIndex === -1) {
      return undefined;
    }

    const account = this.accounts[accountIndex];
    const updatedAccount: Account = {
      ...account,
      name: data.name !== undefined ? data.name : account.name
    };

    if (data.description !== undefined) {
      updatedAccount.description = data.description;
    }

    this.accounts[accountIndex] = updatedAccount;
    return this.accounts[accountIndex];
  }

  deleteAccount(id: number): boolean {
    const accountIndex = this.accounts.findIndex(account => account.id === id);
    if (accountIndex === -1 || id === 1) { // Don't allow deleting the default account
      return false;
    }

    this.accounts.splice(accountIndex, 1);
    return true;
  }

  updateAccountBalance(id: number, amount: number): void {
    const account = this.getAccountById(id);
    if (account) {
      account.balance += amount;
    }
  }

  getTotalBalance(): number {
    return this.accounts.reduce((total, account) => total + account.balance, 0);
  }
}

export const accountService = new AccountService();