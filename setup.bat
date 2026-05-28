@echo off
REM Apex Healthcare Setup Script for Windows
REM This script helps set up the project automatically

echo.
echo =========================================
echo   Apex Healthcare Platform Setup
echo =========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js is installed: 
node --version
echo.

REM Install frontend dependencies
echo Installing frontend dependencies...
cd frontend
call npm install
if errorlevel 1 (
    echo [ERROR] Failed to install frontend dependencies
    pause
    exit /b 1
)
cd ..
echo [OK] Frontend dependencies installed
echo.

echo =========================================
echo   Setup Complete!
echo =========================================
echo.
echo Next Steps:
echo 1. Run: npm run dev
echo 2. Open browser: http://localhost:5173
echo.
pause
