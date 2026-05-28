# Apex Healthcare - Frontend-Only Healthcare Platform

A comprehensive online healthcare services platform with appointment scheduling, service listings, doctor profiles, and patient testimonials.

> [!NOTE]
> This application is now configured as a **frontend-only (serverless) application**. Form submissions (appointments, contact forms, queries) are sent directly to the configured email via **FormSubmit**. No backend server or MongoDB setup is required.

## 🏥 Project Structure

```
Apex Healthcare/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable components (Navbar, Footer)
│   │   ├── pages/           # Page components (Home, Services, Doctors, etc.)
│   │   ├── styles/          # CSS files
│   │   ├── config.js        # Global configuration (email & phone number)
│   │   ├── App.jsx          # Main app with routing
│   │   └── main.jsx         # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── package.json              # Root package manager configuration
├── setup.bat                 # Setup script for Windows
└── setup.sh                  # Setup script for Mac/Linux
```

## ✨ Features

- **Home Page**: Hero section, features, services preview, conditions treated
- **Services Page**: Complete list of healthcare services with descriptions
- **Doctors Page**: Meet the specialists with qualifications and experience
- **Appointment Booking**: Form with date/time slots and service selection (automatically sent to your email!)
- **Testimonials**: Patient success stories and rating system
- **Contact Page**: Contact information, clinic hours, contact form, and service query form (automatically sent to your email!)
- **Responsive Design**: Mobile-friendly interface
- **Zero-Backend Required**: Easily manage enquiries without maintaining database/server infrastructure

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

#### 1. Setup the Project
Run the setup script for your OS to install all dependencies automatically:

- **Windows**: Double-click `setup.bat` or run:
  ```powershell
  ./setup.bat
  ```
- **Mac/Linux**: Run:
  ```bash
  chmod +x setup.sh && ./setup.sh
  ```

Alternatively, run the manual commands at the root:
```bash
npm run install-all
```

#### 2. Run the Development Server
Run the following command at the root directory:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`. Open this URL in your browser to view the app.

## 🔧 Configuration

To configure the destination email address and the clinic's phone number, edit [frontend/src/config.js](file:///c:/Users/ANKIT%20TIWARI/Desktop/Apex%20Healthcare/frontend/src/config.js):

```javascript
export const CONFIG = {
  // Replace this with your email.
  // Form submissions will be sent to this email address via FormSubmit (https://formsubmit.co).
  // The first time a form is submitted, you will receive an activation email from FormSubmit to verify the address.
  contactEmail: "info@apexhealthcare.com", 
  
  // Contact phone number
  phoneNumber: "9880376577",
  phoneNumberFormatted: "+91-9880376577",
};
```

*Note: The first time someone submits a form on the site, FormSubmit will send a confirmation/activation link to the configured email address. You must click that link to activate form redirection to your inbox.*

---

**Built with ❤️ for better healthcare services**
