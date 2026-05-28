import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Services.css';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

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
      conditions: ['Chronic pain', 'Muscle tension', 'Trigger points']
    },
    {
      _id: '2',
      name: 'Manual Therapy',
      category: 'Physical Therapy',
      description: 'Hands-on joint mobilisation and soft tissue techniques for mechanical pain and joint stiffness.',
      icon: '🤲',
      conditions: ['Joint stiffness', 'Mechanical pain', 'Post-surgical restriction']
    },
    {
      _id: '3',
      name: 'Neuro Rehabilitation',
      category: 'Neurological',
      description: 'Specialised protocols for stroke, Parkinson\'s, CP, and traumatic brain injury recovery.',
      icon: '🧠',
      conditions: ['Stroke', 'Parkinson\'s', 'Brain injury', 'Cerebral palsy']
    },
    {
      _id: '4',
      name: 'Cupping Therapy',
      category: 'Traditional Medicine',
      description: 'Traditional myofascial cupping combined with modern rehabilitation for chronic pain.',
      icon: '🌀',
      conditions: ['Chronic pain', 'Muscle tightness', 'Fascia release']
    },
    {
      _id: '5',
      name: 'Sports Rehabilitation',
      category: 'Sports Medicine',
      description: 'Return-to-sport programs, performance enhancement, and injury prevention protocols.',
      icon: '🏃',
      conditions: ['Sports injuries', 'Muscle tears', 'Sprains', 'Performance enhancement']
    },
    {
      _id: '6',
      name: 'Yoga & Wellness',
      category: 'Wellness',
      description: 'Therapeutic yoga integrated with physiotherapy for spinal health and stress relief.',
      icon: '🧘',
      conditions: ['Spinal health', 'Flexibility', 'Stress relief', 'Long-term wellness']
    },
    {
      _id: '7',
      name: 'Tele-consultation',
      category: 'Remote Care',
      description: 'Virtual consultation with our expert specialists from the comfort of your home, ensuring continuous support.',
      icon: '💻',
      conditions: ['General advice', 'Follow-up consultations', 'Treatment planning', 'Remote consultation']
    },
    {
      _id: '8',
      name: 'Home Visit Appointment Booking',
      category: 'Home Care',
      description: 'Professional healthcare services and physiotherapy assessments delivered directly to your doorstep.',
      icon: '🏠',
      conditions: ['Mobility limitations', 'Post-surgery recovery', 'Convenient home care', 'Home physiotherapy']
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
                  <button className="btn btn-primary">Learn More</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Services;
