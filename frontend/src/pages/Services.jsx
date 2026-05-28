import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Services.css';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch (error) {
        console.log('Error fetching services:', error);
        // Load mock data if API fails
        setServices(mockServices);
      }
      setLoading(false);
    };

    fetchServices();
  }, []);

  const mockServices = [
    {
      _id: '1',
      name: 'Advanced Dry Needling',
      category: 'Pain Management',
      description: 'Certified intramuscular stimulation to release trigger points, reduce chronic pain and restore function.',
      icon: '💉',
      conditions: ['Chronic pain', 'Muscle tension', 'Trigger points'],
      detailedWriteup: 'Intramuscular stimulation (Dry Needling) is a scientifically proven technique where thin, sterile needles are inserted into myofascial trigger points (muscle knots). This triggers a localized healing response, releases tight muscle bands, improves joint range of motion, and significantly reduces chronic musculoskeletal pain. It is highly effective for chronic back pain, tension headaches, and neck stiffness.',
      whatToExpect: 'Mild muscle twitching during insertion, followed by an immediate release of muscle tension. Some mild, temporary post-treatment soreness is normal and typically resolves within 24 hours.'
    },
    {
      _id: '2',
      name: 'Manual Therapy',
      category: 'Physical Therapy',
      description: 'Hands-on joint mobilisation and soft tissue techniques for mechanical pain and joint stiffness.',
      icon: '🤲',
      conditions: ['Joint stiffness', 'Mechanical pain', 'Post-surgical restriction'],
      detailedWriteup: 'A specialized hands-on clinical approach consisting of joint mobilization, manipulation, and soft tissue mobilization. Our therapists use precise passive force to restore physiological movement to stiff joints, reduce guarding reflexes in surrounding tissues, and realign musculoskeletal structures for mechanical pain relief.',
      whatToExpect: 'Safe, controlled movements applied to specific joint segments. Highly customized to your pain threshold and mobility level to ensure comfort.'
    },
    {
      _id: '3',
      name: 'Neuro Rehabilitation',
      category: 'Neurological',
      description: 'Specialised protocols for stroke, Parkinson\'s, CP, and traumatic brain injury recovery.',
      icon: '🧠',
      conditions: ['Stroke', 'Parkinson\'s', 'Brain injury', 'Cerebral palsy'],
      detailedWriteup: 'Tailored therapeutic interventions designed for patients recovering from neurological conditions (Stroke, Parkinson\'s, Cerebral Palsy, Multiple Sclerosis). We focus on neuroplasticity—retraining the brain and nervous system to restore motor control, balance, coordination, gait, and daily functional independence.',
      whatToExpect: 'Comprehensive physical, cognitive, and functional training sessions utilizing specialized equipment and targeted, progressive exercises.'
    },
    {
      _id: '4',
      name: 'Cupping Therapy',
      category: 'Traditional Medicine',
      description: 'Traditional myofascial cupping combined with modern rehabilitation for chronic pain.',
      icon: '🌀',
      conditions: ['Chronic pain', 'Muscle tightness', 'Fascia release'],
      detailedWriteup: 'An ancient therapeutic practice integrated with modern myofascial release protocols. By applying suction cups to target areas, we create a negative pressure that increases local blood circulation, stretches deep fascial tissue, drains lymphatic fluid, and speeds up the recovery of damaged muscle tissue.',
      whatToExpect: 'Temporary red/purple circular marks on the skin which are a natural result of local blood flow enhancement, resolving in a few days. Minimal to no discomfort.'
    },
    {
      _id: '5',
      name: 'Sports Rehabilitation',
      category: 'Sports Medicine',
      description: 'Return-to-sport programs, performance enhancement, and injury prevention protocols.',
      icon: '🏃',
      conditions: ['Sports injuries', 'Muscle tears', 'Sprains', 'Performance enhancement'],
      detailedWriteup: 'Designed specifically for athletes and active individuals recovering from injuries (ligament tears, sprains, muscle strains, tendinopathy). We employ progressive load management, sports-specific biomechanical training, and strength conditioning to ensure a safe, quick, and stronger return to sports.',
      whatToExpect: 'High-energy exercises, movement analysis, and a structured timeline targeting full strength, mobility, and confidence.'
    },
    {
      _id: '6',
      name: 'Yoga & Wellness',
      category: 'Wellness',
      description: 'Therapeutic yoga integrated with physiotherapy for spinal health and stress relief.',
      icon: '🧘',
      conditions: ['Spinal health', 'Flexibility', 'Stress relief', 'Long-term wellness'],
      detailedWriteup: 'A holistic wellness program integrating therapeutic yoga postures, breathwork (pranayama), and mindfulness with clinical physiotherapy. Excellent for long-term spinal health, alignment correction, nervous system regulation, and preventing future injuries.',
      whatToExpect: 'Gentle to moderate physical poses, focused breathing exercises, and posture correction customized for your spinal health goals.'
    },
    {
      _id: '7',
      name: 'Tele-consultation',
      category: 'Remote Care',
      description: 'Virtual consultation with our expert specialists from the comfort of your home, ensuring continuous support.',
      icon: '💻',
      conditions: ['General advice', 'Follow-up consultations', 'Treatment planning', 'Remote consultation'],
      detailedWriteup: 'Secure and convenient virtual consultations with our expert physiotherapists. Ideal for remote assessments, home exercise plan reviews, progress tracking, general posture advice, and self-management guidelines when in-person clinic visits are not feasible.',
      whatToExpect: 'A high-definition video call where the therapist will evaluate your range of motion, guide you through self-assessment movements, and prescribe digital home exercises.'
    },
    {
      _id: '8',
      name: 'Home Visit Appointment Booking',
      category: 'Home Care',
      description: 'Professional healthcare services and physiotherapy assessments delivered directly to your doorstep.',
      icon: '🏠',
      conditions: ['Mobility limitations', 'Post-surgery recovery', 'Convenient home care', 'Home physiotherapy'],
      detailedWriteup: 'Professional, hospital-grade physiotherapy services delivered directly to the comfort and convenience of your home. Perfect for patients with severe mobility restrictions, elderly care, or post-surgical recovery (e.g., knee/hip replacement) who require intensive therapy without travel stress.',
      whatToExpect: 'A certified specialist visiting your home with necessary portable therapeutic equipment to deliver dedicated 1-on-1 rehabilitation.'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-header">
        <h1>Our Healthcare Services</h1>
        <p>Comprehensive, evidence-based medical services tailored to your needs</p>
      </section>

      <section className="services-container">
        <div className="container">
          {loading ? (
            <p>Loading services...</p>
          ) : (
            <div className="services-list">
              {(services.length > 0 ? services : mockServices).map((service) => (
                <div key={service._id} className="service-card">
                  <div className="service-icon">{service.icon || '🏥'}</div>
                  <h3>{service.name}</h3>
                  <p className="service-category">{service.category}</p>
                  <p className="service-description">{service.description}</p>
                  {service.conditions && (
                    <div className="conditions-list">
                      <strong>Conditions Treated:</strong>
                      <ul>
                        {service.conditions.map((condition, idx) => (
                          <li key={idx}>{condition}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Learn More Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>&times;</button>
            <div className="modal-header">
              <span className="modal-icon">{selectedService.icon || '🏥'}</span>
              <div>
                <h2>{selectedService.name}</h2>
                <span className="service-category">{selectedService.category}</span>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3>About the Treatment</h3>
                <p>{selectedService.detailedWriteup || selectedService.description}</p>
              </div>
              
              {selectedService.whatToExpect && (
                <div className="modal-section">
                  <h3>What to Expect</h3>
                  <p>{selectedService.whatToExpect}</p>
                </div>
              )}

              {selectedService.conditions && (
                <div className="modal-section">
                  <h3>Conditions We Address</h3>
                  <ul className="modal-conditions-list">
                    {selectedService.conditions.map((cond, idx) => (
                      <li key={idx}>✓ {cond}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedService(null)}>Close</button>
              <Link 
                to="/appointments" 
                state={{ serviceName: selectedService.name }} 
                className="btn btn-primary"
                onClick={() => setSelectedService(null)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
