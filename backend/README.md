# Budget App Backend

TypeScript/Express REST API backend for the Budget App expense tracker.

## Features

- ✅ **REST API**: RESTful endpoints for expense management
- ✅ **TypeScript**: Full TypeScript support with strict typing
- ✅ **Express.js**: Modern Express server with middleware
- ✅ **CORS Support**: Configured for frontend integration
- ✅ **Error Handling**: Centralized error handling and validation
- ✅ **In-Memory Storage**: Simple storage for demonstration (data resets on restart)

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Expenses
- `GET /api/expenses` - Get all expenses with total
- `POST /api/expenses` - Create a new expense

## API Response Format

All API responses follow this format:

```json
{
  "success": boolean,
  "data": any,
  "total": number (for expense endpoints),
  "message": string (optional),
  "error": string (optional)
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

Currently uses in-memory storage. Data is reset when the server restarts.

**Future enhancements:**
- Database integration (PostgreSQL, MongoDB, SQLite)
- Data persistence across restarts
- User authentication
- Expense categories
- Date filtering

## Testing the API

### Using curl

```bash
# Health check
curl http://localhost:3001/health

# Get all expenses
curl http://localhost:3001/api/expenses

# Create expense
curl -X POST http://localhost:3001/api/expenses \
  -H "Content-Type: application/json" \
  -d '{"description": "Lunch", "amount": 12.50}'
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