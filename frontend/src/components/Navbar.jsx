import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🏥 Apex Healthcare
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/doctors" className="nav-link">Our Doctors</Link>
          </li>
          <li className="nav-item">
            <Link to="/appointments" className="nav-link">Book Appointment</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials" className="nav-link">Testimonials</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
