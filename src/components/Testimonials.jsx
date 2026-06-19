import React from 'react';
import { ArrowRight, Star, Play, ShieldCheck } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container testimonials-grid">
        
        {/* Left Side: Before & After */}
        <div className="before-after-section">
          <div className="ba-header">
            <span className="section-tag">// BEFORE & AFTER</span>
            <h2 className="ba-title">
              REPAIRS THAT<br/>
              BRING DEVICES<br/>
              BACK TO LIFE.
            </h2>
            <a href="#" className="view-gallery-link">
              VIEW GALLERY <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="ba-images">
            <div className="ba-image-wrapper">
              <span className="ba-label">BEFORE</span>
              <img src="/phone-before.png" alt="Broken phone" className="ba-img" />
            </div>
            
            <div className="ba-divider">
              <div className="ba-arrow">
                <ArrowRight size={20} color="white" />
              </div>
            </div>
            
            <div className="ba-image-wrapper">
              <span className="ba-label bg-dark-label">AFTER</span>
              <img src="/phone-after.png" alt="Fixed phone" className="ba-img" />
            </div>
          </div>
        </div>
        
        {/* Right Side: Testimonial & Video */}
        <div className="trusted-section">
          <div className="trusted-header">
            <span className="section-tag">// TRUSTED BY THOUSANDS</span>
            <div className="quote-mark">“</div>
            <p className="quote-text">
              Excellent service, quick<br/>
              repair and genuine parts.<br/>
              My iPhone works like new.<br/>
              Highly recommended!
            </p>
            <div className="quote-author">
              <span className="author-name">— RAHUL SHARMA</span>
              <div className="author-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--accent-green)" color="var(--accent-green)" />
                ))}
              </div>
            </div>
          </div>
          
          <div className="guarantee-card">
            <div className="guarantee-icon">
              <ShieldCheck size={32} className="text-accent" />
            </div>
            <div className="guarantee-content">
              <h4>PREMIUM QUALITY GUARANTEE</h4>
              <p>We use only 100% genuine or highest-grade OEM parts for all our repairs. Your device's performance and safety are our top priority.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
