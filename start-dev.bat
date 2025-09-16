@echo off
REM Budget App Development Startup Script for Windows
REM This script starts both backend and frontend in development mode

echo 🚀 Starting Budget App Development Environment...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org/
    pause
    exit /b 1
)

npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

echo ✅ Node.js found
echo ✅ npm found
echo.

REM Check if dependencies are installed
echo 📦 Checking dependencies...
if not exist "backend\node_modules" (
    echo 📥 Installing backend dependencies...
    cd backend
    npm install
    cd ..
)

if not exist "frontend\node_modules" (
    echo 📥 Installing frontend dependencies...
    cd frontend
    npm install
    cd ..
)

echo ✅ Dependencies installed
echo.

REM Start backend
echo 🔧 Starting backend server...
cd backend
start "Backend Server" cmd /k npm run dev
cd ..

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend
echo ⚛️  Starting frontend server...
cd frontend
start "Frontend Server" cmd /k npm start
cd ..

echo.
echo 🎉 Development environment started!
echo 📱 Frontend: http://localhost:3000
echo 🔧 Backend API: http://localhost:3001
echo.
echo Press any key to exit this script (servers will continue running)...
pause >nul