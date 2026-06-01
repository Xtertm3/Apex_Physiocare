import { useState } from 'react';
import axios from 'axios';
import { CONFIG } from '../config';
import '../styles/Contact.css';

function Contact() {
  const [activeTab, setActiveTab] = useState('contact');
  
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [queryForm, setQueryForm] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
    serviceInterested: ''
  });
  
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [querySubmitted, setQuerySubmitted] = useState(false);
  const [loadingContact, setLoadingContact] = useState(false);
  const [loadingQuery, setLoadingQuery] = useState(false);
  const [contactError, setContactError] = useState('');
  const [queryError, setQueryError] = useState('');

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleQueryChange = (e) => {
    setQueryForm({
      ...queryForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoadingContact(true);
    setContactError('');
    try {
      const mailBody = {
        _subject: `New General Enquiry from ${contactForm.name}`,
        "Name": contactForm.name,
        "Email": contactForm.email,
        "Phone": contactForm.phone,
        "Subject": contactForm.subject,
        "Message": contactForm.message
      };
      await axios.post(`https://formsubmit.co/ajax/${CONFIG.contactEmail}`, mailBody, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      // Construct WhatsApp message and redirect
      const whatsappMessage = `*New General Enquiry - Apex Physiotherapy*\n` +
        `---------------------------------------\n` +
        `*Name:* ${contactForm.name}\n` +
        `*Email:* ${contactForm.email}\n` +
        `*Phone:* ${contactForm.phone || 'N/A'}\n` +
        `*Subject:* ${contactForm.subject}\n` +
        `*Message:* ${contactForm.message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/91${CONFIG.phoneNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setContactSubmitted(true);
      setContactForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setContactSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setContactError('Error sending message. Please try again.');
    }
    setLoadingContact(false);
  };

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    setLoadingQuery(true);
    setQueryError('');
    try {
      const mailBody = {
        _subject: `New Service Query from ${queryForm.name}`,
        "Name": queryForm.name,
        "Email": queryForm.email,
        "Phone": queryForm.phone,
        "Service Interested": queryForm.serviceInterested,
        "Query": queryForm.query
      };
      await axios.post(`https://formsubmit.co/ajax/${CONFIG.contactEmail}`, mailBody, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      // Construct WhatsApp message and redirect
      const whatsappMessage = `*New Service Query - Apex Physiotherapy*\n` +
        `---------------------------------------\n` +
        `*Name:* ${queryForm.name}\n` +
        `*Email:* ${queryForm.email}\n` +
        `*Phone:* ${queryForm.phone}\n` +
        `*Service Interested:* ${queryForm.serviceInterested}\n` +
        `*Query:* ${queryForm.query}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/91${CONFIG.phoneNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setQuerySubmitted(true);
      setQueryForm({
        name: '',
        email: '',
        phone: '',
        query: '',
        serviceInterested: ''
      });
      setTimeout(() => setQuerySubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting query form:', err);
      setQueryError('Error submitting query. Please try again.');
    }
    setLoadingQuery(false);
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team. We're here to help!</p>
      </section>

      <section className="contact-container">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <h3>📍 Location</h3>
                <p>Apex Physiotherapy</p>
                <p>Bangalore, Karnataka, India</p>
              </div>

              <div className="info-card">
                <h3>📞 Phone & WhatsApp</h3>
                <p className="highlight">
                  <a href={CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {CONFIG.phoneNumberFormatted}
                  </a>
                </p>
                <p className="note">(Click number to chat directly on WhatsApp)</p>
              </div>

              <div className="info-card">
                <h3>🌐 Follow & Connect</h3>
                <div className="social-links-contact">
                  <a href={CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                    Chat on WhatsApp
                  </a>
                  <a href={CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                    Instagram
                  </a>
                  <a href={CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                    Facebook
                  </a>
                </div>
              </div>

              <div className="info-card">
                <h3>📧 Email</h3>
                <p>
                  <a href={`mailto:${CONFIG.contactEmail}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {CONFIG.contactEmail}
                  </a>
                </p>
              </div>

              <div className="info-card">
                <h3>🕐 Clinic Hours</h3>
                <p><strong>Monday - Saturday:</strong> 7:00 AM - 9:00 PM</p>
                <p><strong>Sunday:</strong> 9:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <div className="form-tabs">
                <button 
                  className={`form-tab ${activeTab === 'contact' ? 'active' : ''}`}
                  onClick={() => setActiveTab('contact')}
                  id="contact-tab"
                >
                  Contact Us
                </button>
                <button 
                  className={`form-tab ${activeTab === 'query' ? 'active' : ''}`}
                  onClick={() => setActiveTab('query')}
                  id="query-tab"
                >
                  Send a Query
                </button>
              </div>

              {/* Contact Form */}
              <div id="contact-form-section" style={{ display: activeTab === 'contact' ? 'block' : 'none' }}>
                {contactSubmitted && (
                  <div className="success-message">
                    ✓ Thank you for reaching out! We'll get back to you soon.
                  </div>
                )}
                {contactError && (
                  <div className="error-message">
                    ✗ {contactError}
                  </div>
                )}

                <form onSubmit={handleContactSubmit} className="contact-form">
                  <h2>Send us a Message</h2>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Name *</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email *</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleContactChange}
                      placeholder="What is this about?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      placeholder="Your message here..."
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={loadingContact}>
                    {loadingContact ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Query Form */}
              <div id="query-form-section" style={{ display: activeTab === 'query' ? 'block' : 'none' }}>
                {querySubmitted && (
                  <div className="success-message">
                    ✓ Thank you for your query! We'll get back to you shortly.
                  </div>
                )}
                {queryError && (
                  <div className="error-message">
                    ✗ {queryError}
                  </div>
                )}

                <form onSubmit={handleQuerySubmit} className="contact-form">
                  <h2>Send us a Query</h2>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="query-name">Name *</label>
                      <input
                        type="text"
                        id="query-name"
                        name="name"
                        value={queryForm.name}
                        onChange={handleQueryChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="query-email">Email *</label>
                      <input
                        type="email"
                        id="query-email"
                        name="email"
                        value={queryForm.email}
                        onChange={handleQueryChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="query-phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="query-phone"
                      name="phone"
                      value={queryForm.phone}
                      onChange={handleQueryChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service-interested">Service Interested In *</label>
                    <select
                      id="service-interested"
                      name="serviceInterested"
                      value={queryForm.serviceInterested}
                      onChange={handleQueryChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Advanced Dry Needling">Advanced Dry Needling</option>
                      <option value="Manual Therapy">Manual Therapy</option>
                      <option value="Neuro Rehabilitation">Neuro Rehabilitation</option>
                      <option value="Cupping Therapy">Cupping Therapy</option>
                      <option value="Sports Rehabilitation">Sports Rehabilitation</option>
                      <option value="Yoga & Wellness">Yoga & Wellness</option>
                      <option value="Tele-consultation">Tele-consultation</option>
                      <option value="Home Visit Appointment Booking">Home Visit Appointment Booking</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="query">Your Query *</label>
                    <textarea
                      id="query"
                      name="query"
                      value={queryForm.query}
                      onChange={handleQueryChange}
                      placeholder="Please describe your query or health concern..."
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={loadingQuery}>
                    {loadingQuery ? 'Submitting...' : 'Submit Query'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us on the Map</h2>
          <div className="map-placeholder">
            <p>📍 Google Map Integration Coming Soon</p>
            <p>Bangalore, Karnataka, India</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
