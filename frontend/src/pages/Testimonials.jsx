import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Testimonials.css';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    patientName: '',
    content: '',
    rating: 5,
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('/api/testimonials');
        setTestimonials(response.data);
      } catch (error) {
        console.log('Error fetching testimonials:', error);
        setTestimonials(mockTestimonials);
      }
    };

    fetchTestimonials();
  }, []);

  const mockTestimonials = [
    {
      _id: '1',
      patientName: 'R Rajesh Kumar',
      content: 'I had severe L4-L5 disc herniation and was advised surgery. After 3 weeks of treatment at Apex, I am pain-free and back at work. Dr. Vikas is truly exceptional.',
      rating: 5,
      service: 'Spine Rehabilitation'
    },
    {
      _id: '2',
      patientName: 'P Priya Menon',
      content: 'My mother had a stroke and we were told recovery would take years. The neuro rehab team at Apex was incredible — she is walking again in 6 months.',
      rating: 5,
      service: 'Neuro Rehabilitation'
    },
    {
      _id: '3',
      patientName: 'A Arjun Nair',
      content: 'Dry needling by Dr. Vikas changed my life. 5 years of chronic shoulder pain resolved in 4 sessions. Highly recommend this centre to anyone suffering from chronic pain.',
      rating: 5,
      service: 'Dry Needling'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/testimonials', formData);
      console.log('Testimonial submitted:', response.data);
      setSubmitted(true);
      setFormData({
        patientName: '',
        content: '',
        rating: 5,
        service: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
      // Refresh testimonials
      const updatedTestimonials = await axios.get('/api/testimonials');
      setTestimonials(updatedTestimonials.data);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    }
    setLoading(false);
  };

  return (
    <div className="testimonials-page">
      <section className="testimonials-header">
        <h1>Patient Testimonials</h1>
        <p>Real stories from our satisfied patients</p>
      </section>

      <section className="testimonials-container">
        <div className="container">
          <div className="testimonials-grid">
            {(testimonials.length > 0 ? testimonials : mockTestimonials).map((testimonial) => (
              <div key={testimonial._id} className="testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <p className="testimonial-author">— {testimonial.patientName}</p>
                {testimonial.service && (
                  <p className="testimonial-service">{testimonial.service}</p>
                )}
              </div>
            ))}
          </div>

          <div className="testimonial-stats">
            <div className="stat">
              <h3>460+</h3>
              <p>Verified Reviews</p>
            </div>
            <div className="stat">
              <h3>4.9⭐</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat">
              <h3>95%</h3>
              <p>Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="submit-testimonial">
        <div className="container">
          <h2>Share Your Experience</h2>
          <p>Help other patients by sharing your recovery journey</p>
          
          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your testimonial has been submitted and will be reviewed soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="testimonial-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="patientName">Your Name *</label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Received</label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Which service did you use?"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="content">Your Testimonial *</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Share your experience and how our services helped you..."
                rows="6"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating *</label>
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              >
                <option value="5">5 Stars - Excellent</option>
                <option value="4">4 Stars - Very Good</option>
                <option value="3">3 Stars - Good</option>
                <option value="2">2 Stars - Fair</option>
                <option value="1">1 Star - Poor</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Testimonial'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
