import { CONFIG } from '../config';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Apex Healthcare</h3>
          <p>Providing world-class healthcare services with a focus on patient care and recovery.</p>
          <div className="footer-social-links">
            <a href={CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-social-icon whatsapp" title="Chat on WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.002 5.281 5.286 0 11.784 0c3.146.002 6.102 1.228 8.324 3.453 2.222 2.224 3.443 5.178 3.44 8.327-.007 6.505-5.291 11.784-11.789 11.784-1.996-.001-3.959-.508-5.702-1.472L0 24zm6.59-4.846c1.62.962 3.21 1.453 4.857 1.458 5.433 0 9.851-4.417 9.856-9.851.002-2.632-1.02-5.106-2.881-6.968-1.862-1.862-4.337-2.88-6.969-2.881-5.438 0-9.856 4.417-9.86 9.853-.001 1.761.479 3.42 1.39 4.908l-.936 3.42 3.543-.929zm11.367-7.462c-.32-.16-1.89-.933-2.185-1.04-.294-.108-.508-.16-.723.16-.215.32-.83.1.04-.985 1.15-.152.262-.304.524-.304.787s-.262.16-.393.42c-.131.262-.59 1.378-.656 1.51-.065.13-.13.262-.393.13-.262-.13-1.11-.409-2.114-1.302-.782-.698-1.31-1.56-1.463-1.822-.153-.262-.016-.404.115-.533.118-.116.262-.307.393-.46.13-.153.176-.262.262-.437.087-.176.044-.328-.021-.46s-.723-1.742-.99-2.387c-.26-.627-.525-.54-.722-.55-.186-.01-.399-.012-.612-.012-.213 0-.56.08-.853.4-.293.32-1.12 1.1-1.12 2.678 0 1.578 1.147 3.1 1.307 3.32.16.22 2.244 3.428 5.436 4.809.76.33 1.35.527 1.81.672.76.24 1.45.207 1.996.125.609-.09 1.89-.773 2.152-1.482.262-.709.262-1.312.184-1.442-.079-.13-.292-.21-.612-.37z"/></svg>
            </a>
            <a href={CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-social-icon instagram" title="Follow us on Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href={CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer" className="footer-social-icon facebook" title="Follow us on Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📍 BTM Layout, Bengaluru - 560 068</p>
          <p>📞 {CONFIG.phoneNumberFormatted}</p>
          <p>📧 {CONFIG.contactEmail}</p>
        </div>
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday - Saturday: 7:00 AM - 9:00 PM</p>
          <p>Sunday: 9:00 AM - 2:00 PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Apex Healthcare. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
