import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Jeddah Season</h3>
          <p>Experience the vibe of the city.</p>
        </div>
        <div className="footer-contact">
          <div className="contact-item">
            <Mail size={16} />
            <span>info@jeddahseason.sa</span>
          </div>
          <div className="contact-item">
            <Phone size={16} />
            <span>+966 12 345 6789</span>
          </div>
        </div>
        <div className="footer-social">
          <a href="#"><Facebook size={20} /></a>
          <a href="#"><Twitter size={20} /></a>
          <a href="#"><Instagram size={20} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Jeddah Season. Made for Jeddah Season.</p>
      </div>
    </footer>
  );
};

export default Footer;
