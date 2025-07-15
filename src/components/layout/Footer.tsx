import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import './Footer.css';
import logoImage from '../../assets/DevShiftLbLogoNoText.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-content">
                <img src={logoImage} alt="DevShiftLB" className="footer-logo-image" />
                <h3>DevShiftLB</h3>
              </div>
              <p>Comprehensive tech solutions for cutting-edge advancement and security.</p>
            </div>
            <div className="social-links">
              <a href="mailto:contact@devshiftlb.com" className="social-link">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/company/devshiftlb" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/devshiftlb" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Custom Software Development</Link></li>
              <li><Link to="/services">Cloud Solutions</Link></li>
              <li><Link to="/services">AI & Machine Learning</Link></li>
              <li><Link to="/services">Cybersecurity Consulting</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>contact@devshiftlb.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Lebanon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} DevShiftLB. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
