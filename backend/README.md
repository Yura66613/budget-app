# Budget App Backend

TypeScript/Express REST API backend for the Budget App expense tracker.

## Features

- ✅ **REST API**: RESTful endpoints for expense and account management
- ✅ **TypeScript**: Full TypeScript support with strict typing
- ✅ **Express.js**: Modern Express server with middleware
- ✅ **CORS Support**: Configured for frontend integration
- ✅ **Error Handling**: Centralized error handling and validation
- ✅ **Account Management**: Create, read, update, delete accounts
- ✅ **Expense Tracking**: Associate expenses with specific accounts
- ✅ **Balance Calculation**: Automatic balance updates when expenses are added
- ✅ **In-Memory Storage**: Simple storage for demonstration (data resets on restart)

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Accounts
- `GET /api/accounts` - Get all accounts with total balance
- `GET /api/accounts/:id` - Get account by ID
- `POST /api/accounts` - Create a new account
- `PUT /api/accounts/:id` - Update an account
- `DELETE /api/accounts/:id` - Delete an account (except default account)

### Expenses
- `GET /api/expenses` - Get all expenses with total
- `GET /api/expenses/account/:accountId` - Get expenses for specific account
- `POST /api/expenses` - Create a new expense (requires accountId)
- `DELETE /api/expenses/:id` - Delete an expense

## API Response Format

All API responses follow this format:

```json
{
  "success": boolean,
  "data": any,
  "total": number (for expense endpoints),
  "totalBalance": number (for account endpoints),
  "message": string (optional),
  "error": string (optional)
}
```

### Account Response Examples

**GET /api/accounts**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Main Account",
      "description": "Default account for expenses",
      "balance": -12.25,
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    {
      "id": 2,
      "name": "Savings Account",
      "description": "My personal savings account", 
      "balance": 995.50,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "totalBalance": 983.25
}
```

**POST /api/accounts**
```json
{
  "success": true,
  "data": {
    "id": 2,
    "name": "Savings Account",
    "description": "My personal savings account",
    "balance": 1000.00,
    "createdAt": "2024-01-01T00:00:00.000Z"
  },
  "message": "Account created successfully"
}
```

### Expense Response Examples

**GET /api/expenses**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "description": "Coffee",
      "amount": 4.50,
      "accountId": 2,
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    {
      "id": 2,
      "description": "Lunch",
      "amount": 12.25,
      "accountId": 1,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "total": 16.75
}
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Development

### Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Lint TypeScript code
- `npm run format` - Format code with Prettier

### Project Structure

```
src/
├── controllers/    # Request handlers
├── models/        # TypeScript interfaces
├── routes/        # Express route definitions
├── middleware/    # Express middleware
├── services/      # Business logic
└── index.ts       # Server entry point
```

## Configuration

### Environment Variables
- `PORT` - Server port (default: 3001)
- `FRONTEND_URL` - Frontend URL for CORS (default: http://localhost:3000)
- `NODE_ENV` - Environment (development/production)

## Data Storage

Currently uses in-memory storage with the following data structures:

**Accounts:**
- Default "Main Account" is created automatically on startup
- Each account has: id, name, description, balance, createdAt
- Account balances are automatically updated when expenses are added/deleted
- Default account (ID: 1) cannot be deleted

**Expenses:**
- All expenses must be associated with an existing account (accountId)
- Each expense has: id, description, amount, accountId, createdAt
- Adding an expense decreases the associated account balance
- Deleting an expense restores the associated account balance

**Data Reset:** All data is reset when the server restarts.

**Future enhancements:**
- Database integration (PostgreSQL, MongoDB, SQLite)
- Data persistence across restarts
- User authentication and multi-user support
- Expense categories and tags
- Date filtering and reporting
- Account types (checking, savings, credit card, etc.)
- Budget tracking and spending limits

## Testing the API

### Using curl

```bash
# Health check
curl http://localhost:3001/health

# Get all accounts
curl http://localhost:3001/api/accounts

# Create account
curl -X POST http://localhost:3001/api/accounts \
  -H "Content-Type: application/json" \
  -d '{"name": "Savings Account", "description": "My savings", "initialBalance": 1000}'

# Get all expenses
curl http://localhost:3001/api/expenses

# Get expenses for specific account
curl http://localhost:3001/api/expenses/account/1

# Create expense (requires existing account)
curl -X POST http://localhost:3001/api/expenses \
  -H "Content-Type: application/json" \
  -d '{"description": "Coffee", "amount": 4.50, "accountId": 1}'

# Update account
curl -X PUT http://localhost:3001/api/accounts/2 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Account Name", "description": "Updated description"}'

# Delete expense
curl -X DELETE http://localhost:3001/api/expenses/1

# Delete account (cannot delete account ID 1)
curl -X DELETE http://localhost:3001/api/accounts/2
```

## Error Handling

The API includes comprehensive error handling:
- Input validation
- HTTP status codes
- Detailed error messages
- Development stack traces

## CORS Configuration

Configured to allow requests from:
- `http://localhost:3000` (React development server)
- Custom frontend URL via `FRONTEND_URL` environment variable