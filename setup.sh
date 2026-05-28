#!/bin/bash

# Apex Healthcare Setup Script for Mac/Linux
# This script helps set up the project automatically

echo ""
echo "========================================="
echo "  Apex Healthcare Platform Setup"
echo "========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js is not installed!"
    echo "Please download and install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "[OK] Node.js is installed:"
node --version
echo ""

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
if [ $? -ne 0 ]; then
    echo "[ERROR] Failed to install frontend dependencies"
    exit 1
fi
cd ..
echo "[OK] Frontend dependencies installed"
echo ""

echo "========================================="
echo "  Setup Complete!"
echo "========================================="
echo ""
echo "Next Steps:"
echo "1. Run: npm run dev"
echo "2. Open browser: http://localhost:5173"
echo ""
