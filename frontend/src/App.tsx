import { BudgetProvider } from './contexts/BudgetContext';
import { Layout } from './components/Layout/Layout';
import { Dashboard } from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <BudgetProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </BudgetProvider>
  );
}

export default App;
