import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo" style={{ textDecoration: 'none', display: 'block', marginBottom: '1.5rem' }}>
            <h2 style={{ color: 'var(--text-light)' }}>FIXMOBILE<span className="text-accent">.</span></h2>
            <span className="logo-sub">PREMIUM REPAIR LAB</span>
          </Link>
          <p className="footer-desc">
            Premium repairs. Genuine parts.<br/>
            Blazing fast service. Because<br/>
            your device deserves more.
          </p>
        </div>

        {/* Services Links */}
        <div className="footer-links">
          <h4>SERVICES</h4>
          <ul>
            <li><Link to="/service/screen-replacement">Screen Replacement</Link></li>
            <li><Link to="/service/battery-replacement">Battery Replacement</Link></li>
            <li><Link to="/service/water-damage-repair">Water Damage Repair</Link></li>
            <li><Link to="/service/charging-port-repair">Charging Port Repair</Link></li>
            <li><Link to="/service/camera-repair">Camera Repair</Link></li>
            <li><Link to="/service/more-services">More Services</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link to="/diary">Repair Diary</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>CONTACT</h4>
          <div className="contact-item">
            <Phone size={16} className="text-accent" />
            <span>+91 9257841853</span>
          </div>
          <div className="contact-item">
            <Mail size={16} className="text-accent" />
            <span>hello@fixmobile.com</span>
          </div>
          <div className="contact-item">
            <MapPin size={16} className="text-accent" />
            <span>
              Sikandra road, Sham complex<br/>
              Rawat mobile repearing
            </span>
          </div>
          <div className="contact-item">
            <Clock size={16} className="text-accent" />
            <span>
              9:00 AM - 7:30 PM<br/>
              (All Days Open)
            </span>
          </div>
        </div>

        {/* Map & Booking */}
        <div className="footer-map-section">
          <div style={{ borderRadius: '8px', overflow: 'hidden', height: '160px' }}>
            <iframe
              title="Store Location"
              src="https://www.google.com/maps?q=Sikandra+road,+Sham+complex+Rawat+mobile+repairing&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn btn-accent w-full mt-4">
              BOOK REPAIR <ArrowRight size={16} />
            </button>
          </Link>
        </div>
        
      </div>
    </footer>
  );
}
