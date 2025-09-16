import React from 'react';
import type { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>Budget Tracker</h1>
        <nav className="layout-nav">
          <a href="/">Dashboard</a>
          <a href="/expenses">Expenses</a>
          <a href="/budgets">Budgets</a>
        </nav>
      </header>
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
};