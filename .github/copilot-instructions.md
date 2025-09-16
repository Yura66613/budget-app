# Budget App Development Instructions

**ALWAYS follow these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the information here.**

## Repository Status
This repository is currently in the **planning stage** with only architectural documentation. The actual codebase implementation has not yet begun.

## Intended Architecture
Based on DEVELOPMENT_GUIDE.md, this will be a budget application with:
- **Backend**: TypeScript/Express server
- **Frontend**: TypeScript/React application
- **Testing**: Jest for unit tests, React Testing Library for components, Cypress for E2E
- **Database**: To be implemented with ORM (TypeORM or Sequelize)

## Current State Validation
- **DO NOT** attempt to build, test, or run the application - no implementation exists yet
- The repository contains only `DEVELOPMENT_GUIDE.md` with architectural guidelines
- No package.json, source code, or build scripts exist

## Working Effectively in Planning Stage

### Initial Repository Setup
When the implementation begins, expect this structure:
```
├── README.md                  (to be created)
├── package.json              (to be created)
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── index.ts
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── contexts/
│   │   ├── services/
│   │   ├── pages/
│   │   └── App.tsx
│   └── package.json
└── .github/
    └── workflows/
```

### Commands That Will Work (Future Implementation)
**CRITICAL**: These commands are NOT currently available but are intended for future implementation:

#### Backend Setup (When Implemented)
- `cd backend && npm install` - Install backend dependencies
- `cd backend && npm run build` - Build TypeScript backend (Expected: 2-5 minutes. NEVER CANCEL. Set timeout to 10+ minutes)
- `cd backend && npm run dev` - Start development server
- `cd backend && npm test` - Run Jest unit tests (Expected: 1-3 minutes. NEVER CANCEL. Set timeout to 5+ minutes)

#### Frontend Setup (When Implemented) 
- `cd frontend && npm install` - Install frontend dependencies
- `cd frontend && npm run build` - Build React application (Expected: 3-8 minutes. NEVER CANCEL. Set timeout to 15+ minutes)
- `cd frontend && npm run start` - Start development server
- `cd frontend && npm test` - Run React Testing Library tests (Expected: 2-5 minutes. NEVER CANCEL. Set timeout to 10+ minutes)

#### Full Stack Development (When Implemented)
- Start backend: `cd backend && npm run dev` (typically runs on port 3001)
- Start frontend: `cd frontend && npm run start` (typically runs on port 3000)
- Run E2E tests: `npx cypress run` (Expected: 5-15 minutes. NEVER CANCEL. Set timeout to 30+ minutes)

### Validation Scenarios (Future Implementation)
When the application is implemented, always test these scenarios after making changes:
- **User Registration**: Create new user account via frontend
- **Login Flow**: Authenticate with valid credentials
- **Budget Creation**: Create a new budget category
- **Expense Tracking**: Add and categorize expenses
- **Budget Overview**: View budget summaries and remaining amounts
- **Data Persistence**: Verify data survives browser refresh

### Code Quality (Future Implementation)
- Always run linting: `npm run lint` before committing
- Format code: `npm run format` (likely Prettier)
- Type checking: `npx tsc --noEmit` for TypeScript validation

## Current Development Workflow

### Making Changes Now
1. **Review DEVELOPMENT_GUIDE.md** for architectural guidance
2. **Create project structure** following the intended architecture
3. **Initialize package.json files** for backend and frontend
4. **Set up build tools** (TypeScript, Jest, React setup)
5. **Implement basic functionality** incrementally
6. **Add tests** as you implement features

### Key Files to Reference
- `DEVELOPMENT_GUIDE.md` - Contains architectural guidelines and best practices
- When created: `backend/package.json` - Backend dependencies and scripts
- When created: `frontend/package.json` - Frontend dependencies and scripts

## Security Considerations (Future Implementation)
- Implement JWT authentication for user sessions
- Validate all user input to prevent injection attacks
- Use HTTPS in production
- Secure database credentials with environment variables

## Common Gotchas for Future Development
- **Database Setup**: Will need to configure database connection and migrations
- **CORS Configuration**: Backend will need CORS setup for frontend communication
- **Environment Variables**: Separate configs for development, testing, and production
- **Port Conflicts**: Backend (3001) and frontend (3000) default ports
- **TypeScript Configuration**: Ensure consistent TypeScript configs between backend and frontend

## Next Steps for Implementation
1. Create `package.json` files for backend and frontend
2. Set up TypeScript configuration
3. Initialize Express server with basic routing
4. Create React application with TypeScript
5. Implement database schema and models
6. Build authentication system
7. Create budget management features
8. Add comprehensive testing

**Remember**: This repository is currently in planning stage. Begin implementation by creating the project structure outlined in DEVELOPMENT_GUIDE.md.