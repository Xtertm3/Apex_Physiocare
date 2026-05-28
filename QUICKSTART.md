# 🚀 Quick Start Guide

## Getting Started with Apex Healthcare Platform

### 1️⃣ Prerequisites
- Node.js (v14+)
- npm or yarn

### 2️⃣ Project Setup & Installation

Run the setup script for your OS to install all dependencies automatically:

- **Windows**: Double-click `setup.bat` or run:
  ```powershell
  ./setup.bat
  ```
- **Mac/Linux**: Run:
  ```bash
  chmod +x setup.sh && ./setup.sh
  ```

Alternatively, you can install the dependencies manually from the root folder:
```bash
npm run install-all
```

### 3️⃣ Start Development Server

Run the following command at the root directory:
```bash
npm run dev
```

The application will start, and the frontend will be available at: **http://localhost:5173**

---

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

---

## 📱 Navigation

| Page | URL | Features |
|------|-----|----------|
| Home | / | Hero section, services preview |
| Services | /services | Healthcare services list |
| Doctors | /doctors | Doctor profiles & specialization |
| Book Appointment | /appointments | Schedule consultation (sent to your email via FormSubmit) |
| Testimonials | /testimonials | Patient reviews & ratings |
| Contact | /contact | Clinic info, Contact form, & Service query form (sent to your email via FormSubmit) |

---

## 📦 Building & Deploying for Production

### Build Frontend
To create an optimized production build:
```bash
npm run build
```
This creates a production-ready bundle in the `frontend/dist/` folder.

### Deploy Frontend (Vercel)
You can deploy the build folder directly to Vercel or any other static hosting provider:
```bash
npm install -g vercel
vercel
```

---

**Happy developing! 🎉**
