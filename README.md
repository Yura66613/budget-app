# Budget App - Full-Stack Expense Tracker

A complete expense tracking application with React/TypeScript frontend and Express/TypeScript backend, featuring account management and expense tracking across multiple accounts.

![Budget App Screenshot - Expenses Tab](https://github.com/user-attachments/assets/539b5b46-62fa-44e2-b762-eeab0f6863fd)

## Architecture

- **Frontend**: React + TypeScript + CSS
- **Backend**: Express + TypeScript + REST API
- **Storage**: In-memory (data resets on server restart)
- **Communication**: REST API with JSON responses

## Features

### 🏦 Account Management
- ✅ **Create Accounts**: Add multiple accounts with names, descriptions, and initial balances
- ✅ **Account Overview**: View all accounts with current balances and total balance
- ✅ **Account Protection**: Default account cannot be deleted to ensure data integrity
- ✅ **Balance Tracking**: Real-time balance updates when expenses are added

### 💰 Expense Management
- ✅ **Account Association**: All expenses must be linked to a specific account
- ✅ **Multi-Account Support**: Track expenses across different accounts
- ✅ **Real-time Updates**: Account balances automatically adjust when expenses are added
- ✅ **Expense History**: View all expenses with their associated accounts
- ✅ **Total Calculation**: Sum expenses across all accounts

### 🎨 User Interface
- ✅ **Tab Navigation**: Switch between Expenses and Accounts management views
- ✅ **Account Selection**: Choose which account to charge expenses to via dropdown
- ✅ **Real-time Feedback**: Loading states, error handling, and success indicators
- ✅ **Input Validation**: Client and server-side validation for all inputs
- ✅ **Responsive Design**: Clean, modern UI that works on all devices

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

To verify your installations:
```bash
node --version    # Should show v16.0.0 or higher
npm --version     # Should show 6.0.0 or higher
git --version     # Should show git version info
```

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/Yura66613/budget-app.git
cd budget-app
```

#### 2. Install Dependencies
Install dependencies for both backend and frontend:

```bash
# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies  
cd frontend
npm install
cd ..
```

#### 3. Start the Application

**Option A: Quick Start with Scripts (Recommended)**

For the easiest setup, use the provided startup scripts:

**On macOS/Linux:**
```bash
./start-dev.sh
```

**On Windows:**
```cmd
start-dev.bat
```

These scripts will:
- ✅ Check that Node.js and npm are installed
- ✅ Install dependencies if needed
- ✅ Start both backend and frontend servers
- ✅ Open the application automatically

**Option B: Using Root Package.json (Alternative)**

From the root directory, you can use these convenience commands:
```bash
# Install all dependencies
npm run install:all

# Start both servers (requires concurrently)
npm install concurrently
npm run start:dev
```

**Option C: Manual Start (For Advanced Users)**

Open two terminal windows/tabs:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
✅ Backend server starts on: http://localhost:3001

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
✅ Frontend application opens automatically in your browser at: http://localhost:3000

#### 4. Verify Installation
1. Open your browser to http://localhost:3000
2. You should see the Budget App interface
3. Try adding an expense to test the connection between frontend and backend
4. Check that expenses appear in the list and totals calculate correctly

### How to Use

#### Getting Started with the Application

**Managing Accounts:**
1. Click the "Accounts" tab to view and manage your accounts
2. The app starts with a default "Main Account" 
3. Click "Add Account" to create additional accounts with custom names, descriptions, and initial balances
4. View total balance across all accounts

**Adding Expenses:**
1. Click the "Expenses" tab to manage your expenses
2. Enter a description for your expense (e.g., "Coffee", "Groceries")
3. Enter the amount (e.g., "4.50", "25.99")
4. Select which account to charge the expense to from the dropdown
5. Click "Add Expense" or press Enter
6. Watch as the account balance updates automatically

#### Managing Accounts and Expenses

- **Account Creation**: Create multiple accounts for different purposes (e.g., "Main Account", "Savings", "Credit Card")
- **Balance Tracking**: Each account shows its current balance, which decreases when expenses are added
- **Account Selection**: Choose which account to charge expenses to using the dropdown menu
- **Expense History**: View all expenses with their descriptions, amounts, and associated accounts
- **Total Calculations**: See total expenses across all accounts in the summary
- **Data Persistence**: Data persists while the server is running (resets on server restart)

### Detailed Usage

1. **Create Additional Accounts** (Optional):
   - Go to the "Accounts" tab
   - Click "Add Account" 
   - Enter account name, description (optional), and initial balance (optional)
   - Click "Create Account"

2. **Add an Expense**:
   - Go to the "Expenses" tab
   - Enter a description for your expense
   - Enter the amount (numbers only, supports decimals)
   - Select which account to charge from the dropdown
   - Click "Add Expense" or press Enter
   - Data is automatically saved to the backend and account balance updates

3. **View Your Expenses and Accounts**:
   - All expenses are displayed with their associated account information
   - Account balances are updated in real-time
   - Counter shows total number of expenses
   - Total summary shows sum of all expenses across accounts

4. **Account Management**:
   - View all accounts and their balances in the "Accounts" tab
   - Delete accounts (except the default "Main Account")
   - Monitor total balance across all accounts

## Troubleshooting

### Common Issues and Solutions

#### Port Already in Use
If you see "Port 3000 is already in use" or "Port 3001 is already in use":

```bash
# Find and kill processes using the ports
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
netstat -ano | findstr :3001
# Then use: taskkill /PID <PID_NUMBER> /F
```

#### Node Version Issues
If you encounter Node.js version conflicts:
```bash
# Check your Node version
node --version

# If using nvm (recommended):
nvm install 16
nvm use 16

# If not using nvm, download Node.js 16+ from nodejs.org
```

#### Dependencies Won't Install
If npm install fails:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json, then reinstall
rm -rf node_modules package-lock.json
npm install

# Try using yarn instead
npm install -g yarn
yarn install
```

#### Frontend Can't Connect to Backend
If the frontend shows connection errors:

1. Ensure backend is running on port 3001:
   ```bash
   cd backend && npm run dev
   ```

2. Check that CORS is properly configured in the backend

3. Verify the API URL in frontend code (should be http://localhost:3001)

#### Build Failures
If TypeScript compilation fails:
```bash
# Clean build artifacts
npm run build --clean

# Check for TypeScript errors
npx tsc --noEmit

# Ensure all dependencies are installed
npm install
```

### Development Commands

#### Root Level Commands (Convenience)
```bash
# From project root directory
npm run install:all    # Install dependencies for both backend and frontend
npm run build:all      # Build both backend and frontend
npm run start:dev      # Start both servers concurrently (requires concurrently)
npm run test:all       # Run tests for both projects
npm run lint:all       # Lint both projects
npm run format:all     # Format code in both projects
```

#### Backend Commands
```bash
cd backend

npm run dev      # Start development server with hot reload
npm run build    # Build TypeScript to JavaScript
npm start        # Start production server (after build)
npm test         # Run Jest tests (when available)
npm run lint     # Check code with ESLint
npm run format   # Format code with Prettier
```

#### Frontend Commands  
```bash
cd frontend

npm start        # Start development server
npm run build    # Build for production
npm test         # Run React tests
npm run lint     # Check code with ESLint
npm run format   # Format code with Prettier
```

### Development Workflow

1. **Start Development**:
   - Open two terminals
   - Run backend: `cd backend && npm run dev`
   - Run frontend: `cd frontend && npm start`

2. **Making Changes**:
   - Backend changes auto-reload with ts-node-dev
   - Frontend changes auto-reload with Create React App
   - Both support hot module replacement

3. **Testing Changes**:
   - Test manually in browser at http://localhost:3000
   - Run backend tests: `cd backend && npm test`
   - Run frontend tests: `cd frontend && npm test`

4. **Building for Production**:
   - Build backend: `cd backend && npm run build`
   - Build frontend: `cd frontend && npm run build`
   - Serve production build: `npm install -g serve && serve -s frontend/build`

## Technology Stack

### Frontend
- **React 18** - User interface library
- **TypeScript** - Type-safe JavaScript
- **Create React App** - Build tooling and development setup
- **CSS3** - Modern styling with responsive design
- **React Hooks** - State management

### Backend  
- **Express.js** - Web framework
- **TypeScript** - Type-safe server code
- **CORS** - Cross-origin resource sharing
- **REST API** - RESTful web services

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **ts-node-dev** - TypeScript development server

## Project Structure

```
budget-app/
├── backend/                 # Express TypeScript API
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/         # TypeScript interfaces  
│   │   ├── routes/         # Express routes
│   │   ├── middleware/     # Express middleware
│   │   ├── services/       # Business logic
│   │   └── index.ts        # Server entry point
│   ├── package.json
│   └── tsconfig.json
├── frontend/               # React TypeScript app
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── ExpenseTracker.tsx
│   │   ├── services/       # API integration
│   │   │   └── expenseAPI.ts
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.tsx
│   │   └── index.css
│   ├── package.json
│   └── tsconfig.json
└── DEVELOPMENT_GUIDE.md
```

## Screenshots

### Expenses Tab - Account Selection and Tracking
![Budget App - Expenses Tab](https://github.com/user-attachments/assets/539b5b46-62fa-44e2-b762-eeab0f6863fd)
*The Expenses tab now includes account selection dropdown and shows which account each expense belongs to*

### Accounts Management Tab
![Budget App - Accounts Tab](https://github.com/user-attachments/assets/67bf1f33-53b5-4609-a09f-caa1f05a79d8)
*The new Accounts tab allows you to create and manage multiple accounts with balances*

### Working Application with Backend Integration (Previous Version)
![Budget App with Backend](https://github.com/user-attachments/assets/bc3405fc-8040-4e7c-9246-b4e95b0ac849)
*Previous version before accounts functionality was added*

## Validation Rules

### Frontend Validation
- **Expense description** cannot be empty
- **Amount** must be a valid positive number
- **Account selection** is required (must select an existing account)
- All required fields must be filled to enable the "Add Expense" button
- Loading states prevent multiple simultaneous requests

### Account Validation
- **Account name** cannot be empty
- **Initial balance** must be a non-negative number (if provided)
- **Default account** cannot be deleted to ensure data integrity
- Account names should be descriptive for easy identification

### Backend Validation  
- Server-side input validation for all API endpoints
- **Account existence** is verified before creating expenses
- Error responses with descriptive messages
- Type checking for all request data
- **Account balance tracking** with automatic updates

## Future Enhancements

### Backend Features
- Database integration (PostgreSQL, MongoDB, or SQLite)
- User authentication and authorization
- Data persistence across server restarts
- API versioning and documentation

### Frontend Features
- Edit/delete individual expenses
- Expense categories with filtering
- Date tracking and range filtering
- Export functionality (CSV, PDF)
- Budget limits and warnings
- Offline support with sync

### Full-Stack Features
- Real-time updates with WebSockets
- Multi-user support
- Expense sharing between users
- Advanced reporting and analytics
- Mobile app with shared backend