# Budget App - Full-Stack Expense Tracker

A complete expense tracking application with React/TypeScript frontend and Express/TypeScript backend.

![Budget App Screenshot](https://github.com/user-attachments/assets/bc3405fc-8040-4e7c-9246-b4e95b0ac849)

## Architecture

- **Frontend**: React + TypeScript + CSS
- **Backend**: Express + TypeScript + REST API
- **Storage**: In-memory (data resets on server restart)
- **Communication**: REST API with JSON responses

## Features

- ✅ **Expense Management**: Add expenses with descriptions and amounts
- ✅ **Real-time Totals**: Automatic calculation and display of total expenses
- ✅ **Data Persistence**: Backend API stores expenses during session
- ✅ **Input Validation**: Client and server-side validation
- ✅ **Error Handling**: Graceful error handling with user feedback
- ✅ **Loading States**: Visual feedback during API operations
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

#### Adding Your First Expense
1. **Enter Description**: Type what you spent money on (e.g., "Coffee", "Groceries")
2. **Enter Amount**: Type the amount (e.g., "4.50", "25.99")
3. **Submit**: Click "Add Expense" or press Enter
4. **Verify**: Your expense should appear in the list below

#### Managing Expenses
- **View All Expenses**: All expenses are displayed in a list format
- **See Total**: The total amount is calculated automatically
- **Refresh Total**: Click "Sum Up All Expenses" to recalculate from server
- **Data Persistence**: Data persists while the server is running (resets on server restart)

### Detailed Usage

1. **Add an Expense**:
   - Enter a description for your expense
   - Enter the amount (numbers only, supports decimals)
   - Click "Add Expense" or press Enter
   - Data is automatically saved to the backend

2. **View Your Expenses**:
   - All expenses are displayed in a list
   - Each expense shows description and formatted amount
   - Counter shows total number of expenses
   - Data persists during the session

3. **Calculate Total**:
   - Total is updated automatically when adding expenses
   - Click "Sum Up All Expenses" to refresh from server
   - Total reflects all expenses stored in the backend

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

### Working Application with Backend Integration
![Budget App with Backend](https://github.com/user-attachments/assets/bc3405fc-8040-4e7c-9246-b4e95b0ac849)

### Initial State (Frontend Only)
![Initial State](https://github.com/user-attachments/assets/bf2bd6fd-c90c-4f80-98bb-72eb80175a01)

### With Expenses Added (Frontend Only)
![With Expenses](https://github.com/user-attachments/assets/f983d4c5-4e21-4593-9ecb-ed076b2fc98d)

## Validation Rules

### Frontend Validation
- Expense description cannot be empty
- Amount must be a valid positive number
- Both fields are required to enable the "Add Expense" button
- Loading states prevent multiple simultaneous requests

### Backend Validation  
- Server-side input validation for all API endpoints
- Error responses with descriptive messages
- Type checking for all request data

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