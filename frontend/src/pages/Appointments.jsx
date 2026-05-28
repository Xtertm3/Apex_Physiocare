import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { CONFIG } from '../config';
import '../styles/Appointments.css';

function Appointments() {
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    service: location.state?.serviceName || '',
    doctor: location.state?.doctorName || '',
    appointmentDate: '',
    timeSlot: '',
    condition: '',
    notes: ''
  });

  useEffect(() => {
    if (location.state?.serviceName) {
      setFormData(prev => ({ ...prev, service: location.state.serviceName }));
    }
    if (location.state?.doctorName) {
      setFormData(prev => ({ ...prev, doctor: location.state.doctorName }));
    }
  }, [location]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const services = [
    'Advanced Dry Needling',
    'Manual Therapy',
    'Neuro Rehabilitation',
    'Cupping Therapy',
    'Sports Rehabilitation',
    'Yoga & Wellness',
    'Tele-consultation',
    'Home Visit Appointment Booking'
  ];

  const doctors = [
    'Dr. Akash Jana',
    'Dr. Kirtika Chakraborty',
    'Dr. Bhavesh Lulla'
  ];

  const conditions = [
    'Back & Spine Pain',
    'Knee Pain',
    'Stroke Rehabilitation',
    'Frozen Shoulder',
    'Sports Injuries',
    "Parkinson's Disease",
    'Heel & Foot Pain',
    'Post-Surgery Rehab'
  ];

  const timeSlots = [
    '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM',
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.patientName || !formData.patientEmail || !formData.patientPhone ||
        !formData.service || !formData.doctor || !formData.appointmentDate ||
        !formData.timeSlot || !formData.condition) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const mailBody = {
        _subject: `New Appointment Request from ${formData.patientName}`,
        "Patient Name": formData.patientName,
        "Patient Email": formData.patientEmail,
        "Patient Phone": formData.patientPhone,
        "Service Interested": formData.service,
        "Doctor Requested": formData.doctor,
        "Preferred Date": formData.appointmentDate,
        "Time Slot": formData.timeSlot,
        "Condition/Concern": formData.condition,
        "Additional Notes": formData.notes || "None"
      };
      await axios.post(`https://formsubmit.co/ajax/${CONFIG.contactEmail}`, mailBody, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      console.log('Appointment booked: Email sent');

      // Construct WhatsApp message and redirect
      const whatsappMessage = `*New Appointment Request - Apex Healthcare*\n` +
        `---------------------------------------\n` +
        `*Patient Name:* ${formData.patientName}\n` +
        `*Email:* ${formData.patientEmail}\n` +
        `*Phone:* ${formData.patientPhone}\n` +
        `*Service:* ${formData.service}\n` +
        `*Doctor:* ${formData.doctor}\n` +
        `*Preferred Date:* ${formData.appointmentDate}\n` +
        `*Time Slot:* ${formData.timeSlot}\n` +
        `*Condition/Concern:* ${formData.condition}\n` +
        `*Notes:* ${formData.notes || 'None'}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/91${CONFIG.phoneNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setSubmitted(true);
      setFormData({
        patientName: '',
        patientEmail: '',
        patientPhone: '',
        service: '',
        doctor: '',
        appointmentDate: '',
        timeSlot: '',
        condition: '',
        notes: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error booking appointment:', error);
      setError('Error booking appointment. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="appointments-page">
      <section className="appointments-header">
        <h1>Book Your Appointment</h1>
        <p>Schedule a consultation with our specialist team</p>
      </section>

      <section className="appointments-form-container">
        <div className="container">
          <div className="form-wrapper">
            {submitted && (
              <div className="success-message">
                ✓ Appointment booked successfully! We'll contact you soon to confirm.
              </div>
            )}
            
            {error && (
              <div className="error-message">
                ✗ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="patientName">Full Name *</label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="patientEmail">Email Address *</label>
                  <input
                    type="email"
                    id="patientEmail"
                    name="patientEmail"
                    value={formData.patientEmail}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="patientPhone">Phone Number *</label>
                  <input
                    type="tel"
                    id="patientPhone"
                    name="patientPhone"
                    value={formData.patientPhone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="condition">Condition/Concern *</label>
                  <select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                  >
                    <option value="">Select a condition</option>
                    {conditions.map((cond) => (
                      <option key={cond} value={cond}>{cond}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="doctor">Doctor/Specialist *</label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                  >
                    <option value="">Select a doctor</option>
                    {doctors.map((doctor) => (
                      <option key={doctor} value={doctor}>{doctor}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="appointmentDate">Preferred Date *</label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="timeSlot">Time Slot *</label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="notes">Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any additional information about your condition or treatment preference"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Booking...' : 'Book Appointment'}
              </button>
            </form>

            <div className="clinic-info">
              <h3>📍 Clinic Location</h3>
              <p><strong>Apex Healthcare Multi-Specialty Center</strong></p>
              <p>Bangalore, Karnataka, India</p>
              <p>📞 {CONFIG.phoneNumberFormatted} | 📧 {CONFIG.contactEmail}</p>
              <p><strong>Clinic Hours:</strong></p>
              <p>Monday - Saturday: 7:00 AM - 9:00 PM</p>
              <p>Sunday: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Appointments;
