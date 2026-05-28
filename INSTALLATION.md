# 📋 Complete Installation Guide

Comprehensive step-by-step guide to set up the Apex Healthcare platform.

---

## ✅ Prerequisites Checklist

Before you begin, ensure you have:

- [ ] **Node.js** (v14 or higher)
  - Download from: https://nodejs.org/
  - Verify: `node --version` and `npm --version`

- [ ] **MongoDB**
  - **Option 1: Local MongoDB**
    - Download from: https://www.mongodb.com/try/download/community
    - Verify: `mongod --version`
  - **Option 2: MongoDB Atlas (Cloud)**
    - Create free account: https://www.mongodb.com/cloud/atlas
    - Create a cluster and get connection string

- [ ] **Git** (optional but recommended)
  - Download from: https://git-scm.com/

- [ ] **Code Editor** (recommended: VS Code)
  - Download from: https://code.visualstudio.com/

- [ ] **Terminal/Command Prompt**
  - Windows: Command Prompt or PowerShell
  - Mac/Linux: Terminal

---

## 🚀 Step-by-Step Installation

### Step 1: Navigate to Project Directory

```bash
cd "Apex Healthcare"
```

Verify you're in the correct directory:
```bash
ls -la  # Mac/Linux
dir     # Windows
```

You should see:
- `backend/` folder
- `frontend/` folder
- `README.md`
- `QUICKSTART.md`

---

### Step 2: Set Up MongoDB

#### Option A: Using MongoDB Locally

**Windows:**
1. Download MongoDB Community Edition
2. Run the installer
3. Start MongoDB service: `mongod`
4. Verify it's running: MongoDB should be accessible on `localhost:27017`

**Mac (Using Homebrew):**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get update
sudo apt-get install -y mongodb
sudo service mongod start
```

#### Option B: Using MongoDB Atlas (Cloud)

1. Go to: https://www.mongodb.com/cloud/atlas
2. Create an account (free tier available)
3. Create a new cluster
4. Get connection string (looks like):
   ```
   mongodb+srv://username:password@cluster.mongodb.net/database
   ```
5. Save this for Step 5

---

### Step 3: Backend Setup

#### 3.1 Install Backend Dependencies

```bash
cd backend
npm install
```

This installs:
- Express.js (web framework)
- Mongoose (MongoDB ODM)
- CORS (cross-origin support)
- And other dependencies

**Expected output:**
```
added XX packages in XXs
```

#### 3.2 Create Environment File

Create a new file: `backend/.env`

For **local MongoDB**:
```env
MONGODB_URI=mongodb://localhost:27017/apex-healthcare
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key_here_change_in_production
CORS_ORIGIN=http://localhost:5173
```

For **MongoDB Atlas**:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/apex-healthcare
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key_here_change_in_production
CORS_ORIGIN=http://localhost:5173
```

Replace:
- `username` with your MongoDB username
- `password` with your MongoDB password
- `cluster` with your cluster name

#### 3.3 Verify Backend Setup

```bash
# Still in backend directory
npm start
# or for development with auto-reload:
npm run dev
```

**Expected output:**
```
MongoDB connected
Server running on port 5000
```

**Verify it's working:**
```bash
# In another terminal
curl http://localhost:5000/api/health
```

Expected response:
```json
{"status":"Backend is running"}
```

✅ **Backend is ready!** Keep this terminal open.

---

### Step 4: Frontend Setup

Open a **new terminal** window:

#### 4.1 Navigate to Frontend

```bash
cd "Apex Healthcare"
cd frontend
```

#### 4.2 Install Frontend Dependencies

```bash
npm install
```

This installs:
- React 18
- React Router DOM
- Vite (build tool)
- Axios (HTTP client)

**Expected output:**
```
added XX packages in XXs
```

#### 4.3 Start Frontend Development Server

```bash
npm run dev
```

**Expected output:**
```
VITE v4.3.9  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

✅ **Frontend is ready!**

---

### Step 5: Access the Application

Open your web browser and go to:

```
http://localhost:5173
```

You should see the Apex Healthcare homepage!

---

## 🧪 Testing the Application

### Test 1: Browse the Website

1. **Home Page** - See hero section and features
2. **Services** - Click "Services" nav - should show 6 services
3. **Doctors** - Click "Our Doctors" nav - should show 3 doctors
4. **Contact** - See clinic information and contact form

### Test 2: Book an Appointment

1. Click **"Book Appointment"** in navbar
2. Fill out the form:
   - Name: John Doe
   - Email: john@example.com
   - Phone: 9876543210
   - Service: Advanced Dry Needling
   - Doctor: Dr. Vikas Sharma
   - Date: Any future date
   - Time: 10:00 AM
   - Condition: Back & Spine Pain
3. Click **"Book Appointment"** button
4. See success message: "Appointment booked successfully!"

### Test 3: Check Backend

```bash
# In a third terminal window
curl http://localhost:5000/api/appointments
```

You should see the appointment you just created in JSON format!

---

## 🎯 Populate Sample Data (Optional)

To pre-populate the database with sample doctors, services, and testimonials:

```bash
cd backend
npm install
node seed.js
```

Output:
```
✓ 3 Doctors seeded
✓ 6 Services seeded
✓ 5 Testimonials seeded
✅ Database seeded successfully!
```

Now when you browse the services and testimonials pages, you'll see the sample data!

---

## 🛠️ Development Workflow

### Running Both Frontend and Backend

**Terminal 1 - Backend:**
```bash
cd "Apex Healthcare"
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd "Apex Healthcare"
cd frontend
npm run dev
```

Both will auto-reload when you make changes!

---

## 📝 Project Structure Verification

Check that you have all the required files:

```
Apex Healthcare/
├── backend/
│   ├── models/
│   │   ├── Appointment.js
│   │   ├── Doctor.js
│   │   ├── Service.js
│   │   └── Testimonial.js
│   ├── routes/
│   │   ├── appointments.js
│   │   ├── doctors.js
│   │   └── services.js
│   ├── controllers/
│   │   ├── appointmentController.js
│   │   ├── doctorController.js
│   │   └── serviceController.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   └── seed.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Appointments.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── Contact.jsx
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── App.css
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.css
│   │   │   ├── Home.css
│   │   │   ├── Services.css
│   │   │   ├── Doctors.css
│   │   │   ├── Appointments.css
│   │   │   ├── Testimonials.css
│   │   │   └── Contact.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── README.md
├── QUICKSTART.md
├── INSTALLATION.md (this file)
└── .gitignore
```

---

## 🐛 Troubleshooting

### Problem: Port 5000 is Already in Use

**Solution:**
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

Or change the PORT in `.env`:
```env
PORT=5001
```

### Problem: Port 5173 is Already in Use

**Solution:**
```bash
# Find and kill process
lsof -i :5173
kill -9 <PID>
```

### Problem: MongoDB Connection Error

**Check if MongoDB is running:**

**Windows:**
```bash
# Should show mongod is running
tasklist | findstr mongod
```

**Mac/Linux:**
```bash
# Should show mongod process
ps aux | grep mongod
```

**If not running:**
- Local: Run `mongod` command
- Atlas: Check cluster status in dashboard

### Problem: "Cannot find module" Error

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem: API Calls Not Working

1. Check browser console for errors (F12)
2. Verify backend is running on port 5000
3. Check CORS_ORIGIN in backend .env
4. Restart both frontend and backend

### Problem: Changes Not Showing

**Frontend:**
- Try hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Clear cache: DevTools → Application → Clear Storage

**Backend:**
- Restart npm run dev
- Check for syntax errors

---

## 📚 Useful Commands

```bash
# Backend
cd backend
npm install          # Install dependencies
npm run dev          # Start with auto-reload
npm start            # Start production mode
node seed.js         # Populate sample data

# Frontend
cd frontend
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## 🚀 Next Steps After Installation

1. **Customize Branding**
   - Change colors in `frontend/src/styles/index.css`
   - Update clinic name in components

2. **Add More Data**
   - Add doctors to database
   - Add more services
   - Update testimonials

3. **Implement Features**
   - User authentication
   - Email notifications
   - Payment integration
   - Admin dashboard

4. **Deploy**
   - Frontend: Vercel, Netlify
   - Backend: Heroku, Railway, Render

---

## 📞 Getting Help

1. Check the README files in each folder
2. Review browser console for errors (F12)
3. Check backend terminal for error messages
4. Verify all prerequisites are installed

---

## ✅ Quick Verification Checklist

After installation, verify:

- [ ] Node.js installed: `node --version`
- [ ] MongoDB running
- [ ] Backend started on port 5000
- [ ] Frontend started on port 5173
- [ ] Can access http://localhost:5173
- [ ] Can view services and doctors
- [ ] Can fill appointment form
- [ ] Appointment success message appears

---

**✨ You're all set! Enjoy building with Apex Healthcare! 🏥**

For more details, see:
- [Quick Start Guide](./QUICKSTART.md)
- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)
- [Main README](./README.md)
