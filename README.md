# Budget Tracker App

A modern, responsive budget tracking application built with React and TypeScript. Track your expenses, manage budgets, and stay on top of your finances with an intuitive dashboard interface.

## Features

- 📊 **Budget Dashboard** - Visual overview of your spending vs budget
- 💰 **Expense Tracking** - Add, view, and remove expenses with categories
- 🎨 **Category Management** - Organize expenses with color-coded categories
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ⚡ **Real-time Updates** - Instant feedback when adding/removing expenses
- 🔄 **State Management** - Context API for efficient state handling

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **State Management**: React Context API
- **Styling**: CSS Modules with responsive design
- **Development**: ESLint, TypeScript strict mode

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Yura66613/budget-app.git
cd budget-app
```

2. Install dependencies:
```bash
npm run install-deps
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
budget-app/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Layout/       # App layout and navigation
│   │   │   ├── BudgetCard/   # Budget display component
│   │   │   ├── ExpenseForm/  # Add expense form
│   │   │   └── ExpenseList/  # List of expenses
│   │   ├── contexts/         # React Context providers
│   │   │   └── BudgetContext.tsx
│   │   ├── pages/            # Page components
│   │   │   └── Dashboard.tsx
│   │   ├── types/            # TypeScript type definitions
│   │   │   └── index.ts
│   │   └── App.tsx           # Main app component
│   ├── package.json
│   └── vite.config.ts
├── DEVELOPMENT_GUIDE.md      # Development best practices
├── package.json              # Root package configuration
└── README.md
```

## Usage

### Adding Expenses

1. Fill in the expense amount, description, and category
2. Select a date (defaults to today)
3. Click "Add Expense" to save

### Managing Categories

The app comes with pre-configured categories:
- Food (red)
- Transportation (teal)
- Entertainment (blue)
- Utilities (green)
- Other (yellow)

### Budget Tracking

- View your budget progress with visual indicators
- Track spent vs remaining amounts
- Monitor percentage of budget used

## Development

This project follows the architecture outlined in `DEVELOPMENT_GUIDE.md`:

- **Component Design**: Function components with hooks
- **State Management**: Context API for global state
- **Styling**: CSS Modules for scoped styling
- **TypeScript**: Strict type checking enabled
- **Code Quality**: ESLint for consistency

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.