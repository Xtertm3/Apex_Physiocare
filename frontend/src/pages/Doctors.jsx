import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Doctors.css';

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDoctors(mockDoctors);
    setLoading(false);
  }, []);

  const mockDoctors = [
    {
      _id: '1',
      name: 'Dr. Akash Jana',
      title: 'Founder and MD',
      specialization: 'Ortho, Neuro and Sports Rehab',
      qualifications: ['BPT', 'CCT', 'CDNT', 'MIAP'],
      bio: 'Specialised in Ortho, Neuro and Sports Rehab. Advanced Dry Needling and Cupping Therapist.',
      experience: 6,
      avatar: '👨‍⚕️'
    },
    {
      _id: '2',
      name: 'Dr. Kirtika Chakraborty',
      title: 'Senior Physiotherapist',
      specialization: 'Ortho and OBG Rehab',
      qualifications: ['MPT', 'PhD Scholar', 'CDNT', 'CCT'],
      bio: 'Specialised in Pain Management and Ortho Rehab.',
      experience: 6,
      avatar: '👩‍⚕️'
    },
    {
      _id: '3',
      name: 'Dr. Bhavesh Lulla',
      title: 'Senior Physiotherapist',
      specialization: 'Ortho, Neuro and Sports Rehab',
      qualifications: ['MPT', 'CDNT', 'CCT and IASTM', 'BCLS Basic'],
      bio: 'Specialised in Ortho and Sports Rehab. Advanced Dry Needling, Cupping and IASTM Therapist.',
      experience: 6,
      avatar: '👨‍⚕️'
    }
  ];

  return (
    <div className="doctors-page">
      <section className="doctors-header">
        <h1>Meet Our Specialists</h1>
        <p>Multidisciplinary team of certified experts committed to your recovery</p>
      </section>

      <section className="doctors-container">
        <div className="container">
          {loading ? (
            <p>Loading doctors...</p>
          ) : (
            <div className="doctors-grid">
              {(doctors.length > 0 ? doctors : mockDoctors).map((doctor) => (
                <div key={doctor._id} className="doctor-card">
                  <div className="doctor-avatar">{doctor.avatar || '👨‍⚕️'}</div>
                  <h3>{doctor.name}</h3>
                  <p className="doctor-title">{doctor.title}</p>
                  <p className="doctor-specialization">{doctor.specialization}</p>
                  <p className="doctor-experience">Experience: {doctor.experience}+ years</p>
                  
                  {doctor.qualifications && (
                    <div className="qualifications">
                      <strong>Qualifications:</strong>
                      <ul>
                        {doctor.qualifications.map((qual, idx) => (
                          <li key={idx}>{qual}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {doctor.bio && <p className="doctor-bio">{doctor.bio}</p>}
                  
                  <Link 
                    to="/appointments" 
                    state={{ doctorName: doctor.name }}
                    className="btn btn-primary"
                  >
                    Book Consultation
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Doctors;
