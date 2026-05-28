import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Apex Healthcare</h1>
          <p>Advanced, Evidence-Based Healthcare Services for Your Complete Recovery</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Explore Services</Link>
            <Link to="/appointments" className="btn btn-secondary">Book Appointment</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Apex Healthcare?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h3>Evidence-Based</h3>
              <p>All treatments backed by latest medical research and clinical expertise</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍⚕️</div>
              <h3>Expert Specialists</h3>
              <p>Multidisciplinary team of 8+ certified specialists</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💊</div>
              <h3>Drug-Free Recovery</h3>
              <p>Focus on natural healing methods without unnecessary medications</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Proven Results</h3>
              <p>460+ patient testimonials with 4.9★ ratings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>💉 Advanced Dry Needling</h3>
              <p>Certified intramuscular stimulation for chronic pain relief</p>
            </div>
            <div className="service-item">
              <h3>🤲 Manual Therapy</h3>
              <p>Hands-on joint mobilization and soft tissue techniques</p>
            </div>
            <div className="service-item">
              <h3>🧠 Neuro Rehabilitation</h3>
              <p>Specialized protocols for stroke, Parkinson's, and brain injuries</p>
            </div>
            <div className="service-item">
              <h3>🌀 Cupping Therapy</h3>
              <p>Traditional myofascial cupping for muscle tightness</p>
            </div>
            <div className="service-item">
              <h3>🏃 Sports Rehabilitation</h3>
              <p>Return-to-sport programs for amateur and professional athletes</p>
            </div>
            <div className="service-item">
              <h3>🧘 Yoga & Wellness</h3>
              <p>Therapeutic yoga integrated with physiotherapy</p>
            </div>
            <div className="service-item">
              <h3>💻 Tele-consultation</h3>
              <p>Virtual consultation and remote expert guidance from home</p>
            </div>
            <div className="service-item">
              <h3>🏠 Home Visit Booking</h3>
              <p>Professional healthcare and physiotherapy services at your doorstep</p>
            </div>
          </div>
          <Link to="/services" className="btn btn-primary">View All Services</Link>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="conditions">
        <div className="container">
          <h2>Conditions We Treat</h2>
          <div className="conditions-grid">
            <div className="condition-item">🦴 Back & Spine Pain</div>
            <div className="condition-item">🦵 Knee Pain</div>
            <div className="condition-item">🧠 Stroke Rehabilitation</div>
            <div className="condition-item">💪 Frozen Shoulder</div>
            <div className="condition-item">🏃 Sports Injuries</div>
            <div className="condition-item">🤲 Parkinson's Disease</div>
            <div className="condition-item">🦶 Heel & Foot Pain</div>
            <div className="condition-item">🔄 Post-Surgery Rehab</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Start Your Recovery Journey Today</h2>
          <p>Book a consultation with our specialist team</p>
          <Link to="/appointments" className="btn btn-primary btn-large">Schedule Your Appointment</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
