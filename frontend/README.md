# Apex Healthcare - Frontend

React + Vite frontend for the Apex Healthcare platform.

## 📋 Prerequisites

- Node.js (v14+)
- npm or yarn
- Backend running on http://localhost:5000

## 🚀 Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The application will run on `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   └── Footer.jsx          # Footer
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Services.jsx        # Services listing
│   ├── Doctors.jsx         # Doctor profiles
│   ├── Appointments.jsx    # Booking form
│   ├── Testimonials.jsx    # Patient reviews
│   └── Contact.jsx         # Contact page
├── styles/
│   ├── index.css           # Global styles
│   ├── App.css
│   ├── Navbar.css
│   ├── Footer.css
│   ├── Home.css
│   ├── Services.css
│   ├── Doctors.css
│   ├── Appointments.css
│   ├── Testimonials.css
│   └── Contact.css
├── App.jsx                 # Main app with routing
└── main.jsx                # Entry point
```

## 🎨 Features

### Pages

#### Home (`/`)
- Hero banner with CTA buttons
- Features showcase
- Services preview
- Conditions treated
- Call-to-action section

#### Services (`/services`)
- Complete list of healthcare services
- Service descriptions
- Conditions treated for each service
- Learn more buttons

#### Doctors (`/doctors`)
- Doctor profiles
- Specializations
- Qualifications
- Experience
- Book consultation buttons

#### Appointments (`/appointments`)
- Full booking form
- Patient information
- Service selection
- Doctor selection
- Date/time slot selection
- Condition selection
- Additional notes
- Form validation
- Success message

#### Testimonials (`/testimonials`)
- Patient success stories
- Star ratings
- Patient statistics
- Submit testimonial form
- Rating system

#### Contact (`/contact`)
- Clinic location
- Phone/WhatsApp
- Email
- Operating hours
- Insurance information
- Contact form
- Map integration (placeholder)

## 🔗 API Integration

### Axios Configuration

The frontend uses Axios for API calls with proxy configuration:

```javascript
// Vite automatically proxies /api to http://localhost:5000
```

### API Calls

**Create Appointment:**
```javascript
axios.post('/api/appointments', formData)
```

**Fetch Services:**
```javascript
axios.get('/api/services')
```

**Fetch Doctors:**
```javascript
axios.get('/api/doctors')
```

## 🎨 Styling

### CSS Custom Properties

```css
--primary-color: #0066cc
--secondary-color: #00a3e0
--accent-color: #ff6b35
--text-dark: #333333
--text-light: #666666
--background: #f5f5f5
--white: #ec0909
```

### Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 769px - 1199px
- Mobile: up to 768px

## 🧩 Components

### Navbar
- Navigation menu with links to all pages
- Logo/brand name
- Responsive mobile menu

### Footer
- About section
- Quick links
- Contact information
- Operating hours

## 📦 Dependencies

```json
{
  "react": "^18.2.0",              # UI library
  "react-dom": "^18.2.0",          # React DOM
  "react-router-dom": "^6.11.2",   # Routing
  "axios": "^1.4.0"                # HTTP client
}
```

## 🛠️ Development Dependencies

```json
{
  "@vitejs/plugin-react": "^4.0.0", # React plugin for Vite
  "vite": "^4.3.9"                  # Build tool
}
```

## 📝 Environment Setup

Create `.env` file (if needed):
```
VITE_API_BASE_URL=http://localhost:5000
```

## 🚀 Features to Add

- [ ] User authentication
- [ ] User profiles
- [ ] Appointment history
- [ ] Payment integration
- [ ] SMS/Email notifications
- [ ] Real-time chat with doctors
- [ ] Video consultations
- [ ] Prescription management

## 🐛 Troubleshooting

### API Connection Issues
1. Check if backend is running on port 5000
2. Verify CORS configuration in backend
3. Check browser console for errors

### Port 5173 Already in Use
```bash
# Kill the process on that port
lsof -ti:5173 | xargs kill -9
```

### Vite Hot Module Reload Not Working
1. Restart dev server
2. Clear browser cache
3. Check Vite configuration

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]
```

## 📚 Further Reading

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Axios Documentation](https://axios-http.com/)

---

**Frontend for Apex Healthcare Platform**
