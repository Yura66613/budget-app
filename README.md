# Budget App - Frontend Expense Tracker

A simple React/TypeScript expense tracking application that allows users to add expenses and calculate the total sum.

## Features

- ✅ **Expense Field**: Add expense descriptions
- ✅ **Sum Field**: Enter expense amounts with proper validation
- ✅ **Multiple Expenses**: Add several expenses to track
- ✅ **Sum Up Button**: Calculate and display total of all expenses

## How to Use

1. **Add an Expense**:
   - Enter a description for your expense
   - Enter the amount (numbers only, supports decimals)
   - Click "Add Expense" or press Enter

2. **View Your Expenses**:
   - All added expenses are displayed in a list
   - Each expense shows description and amount
   - Counter shows total number of expenses

3. **Calculate Total**:
   - Click "Sum Up All Expenses" button
   - Total amount is calculated and displayed
   - Button is only enabled when expenses exist

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

- **React 18** - UI library
- **TypeScript** - Type safety and better development experience
- **Create React App** - Build tooling and development setup
- **CSS** - Styling with responsive design

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ExpenseTracker.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── package.json
└── tsconfig.json
```

## Screenshots

### Initial State
![Initial State](https://github.com/user-attachments/assets/bf2bd6fd-c90c-4f80-98bb-72eb80175a01)

### With Expenses Added
![With Expenses](https://github.com/user-attachments/assets/f983d4c5-4e21-4593-9ecb-ed076b2fc98d)

## Validation Rules

- Expense description cannot be empty
- Amount must be a valid number
- Both fields are required to enable the "Add Expense" button
- "Sum Up All Expenses" button is only enabled when expenses exist

## Future Enhancements

- Edit/delete individual expenses
- Categories for expenses
- Date tracking
- Data persistence (localStorage or backend)
- Export functionality
- Budget limits and warnings