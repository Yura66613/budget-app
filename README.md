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

## How to Use

### Quick Start

1. **Start the Backend**:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   Backend runs on: http://localhost:3001

2. **Start the Frontend**:
   ```bash
   cd frontend
   npm install
   npm start
   ```
   Frontend runs on: http://localhost:3000

3. **Use the Application**:
   - Enter expense description and amount
   - Click "Add Expense" or press Enter
   - View all expenses in the list
   - Click "Sum Up All Expenses" to refresh total

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

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check code quality
- `npm run format` - Formats code using Prettier

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