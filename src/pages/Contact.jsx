import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getPricingData, addBooking } from '../data/db';
import SearchableSelect from '../components/ui/SearchableSelect';
import './Contact.css';

export default function Contact() {
  const [dbData, setDbData] = useState({});

  useEffect(() => {
    setDbData(getPricingData());
    const handleStorageChange = () => setDbData(getPricingData());
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: '',
    model: '',
    issue: '',
    date: '',
    time: ''
  });

  const brands = Object.keys(dbData);
  const models = formData.brand && dbData[formData.brand] ? Object.keys(dbData[formData.brand]) : [];

  // Reset model when brand changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, model: '' }));
  }, [formData.brand]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBrandChange = (val) => setFormData(prev => ({ ...prev, brand: val }));
  const handleModelChange = (val) => setFormData(prev => ({ ...prev, model: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to simulated DB
    addBooking(formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="contact-split-screen">
      {/* Left Column: Info */}
      <div className="contact-left">
        <span className="section-tag">// BOOK APPOINTMENT</span>
        <h1 className="contact-title">SCHEDULE A REPAIR</h1>
        <p className="contact-desc">
          Skip the line. Book your device repair appointment in advance and let our expert technicians get you back online faster.
        </p>

        <div className="info-block">
          <div className="info-label">Email Us</div>
          <div className="info-text">hello@fixmobile.com</div>
        </div>

        <div className="info-block">
          <div className="info-label">Call Us</div>
          <div className="info-text">+91 9257841853</div>
        </div>

        <div className="info-block">
          <div className="info-label">Lab Address</div>
          <div className="info-text">Sikandra road, Sham complex, Rawat mobile repearing</div>
        </div>
        
        <div className="info-block" style={{ marginTop: '2rem' }}>
          <div className="info-label">Operating Hours</div>
          <div style={{ color: 'var(--text-secondary)' }}>
            <p>Monday - Saturday: 9:00 AM - 7:30 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="contact-right">
        {isSubmitted ? (
          <div className="success-message">
            <CheckCircle2 size={48} style={{ margin: '0 auto 1rem auto' }} />
            <h3>Appointment Confirmed!</h3>
            <p>Thank you, {formData.name}. We've received your booking request for the {formData.brand} {formData.model}. Our team will contact you shortly to confirm your time slot.</p>
            <button 
              className="btn btn-outline" 
              style={{ marginTop: '2rem' }}
              onClick={() => {
                setIsSubmitted(false);
                setFormData({name: '', phone: '', email: '', brand: '', model: '', issue: '', date: '', time: ''});
              }}
            >
              Book Another Repair
            </button>
          </div>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>FULL NAME *</label>
                <input required type="text" name="name" className="form-input" value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>PHONE NUMBER *</label>
                <input required type="tel" name="phone" className="form-input" value={formData.phone} onChange={handleInputChange} placeholder="+91 90000 00000" />
              </div>
            </div>

            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input type="email" name="email" className="form-input" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
            </div>

            <div className="form-row">
              <SearchableSelect 
                label="DEVICE BRAND *" 
                options={brands} 
                value={formData.brand} 
                onChange={handleBrandChange} 
                placeholder="Choose brand" 
              />
              <SearchableSelect 
                label="DEVICE MODEL *" 
                options={models} 
                value={formData.model} 
                onChange={handleModelChange} 
                placeholder="Choose model" 
                disabled={!formData.brand}
              />
            </div>

            <div className="form-group">
              <label>ISSUE DESCRIPTION</label>
              <textarea 
                name="issue" 
                className="form-textarea" 
                value={formData.issue} 
                onChange={handleInputChange} 
                placeholder="Describe the problem you're experiencing (e.g., shattered screen, battery drains fast)..."
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>PREFERRED DATE *</label>
                <input required type="date" name="date" className="form-input" value={formData.date} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>PREFERRED TIME *</label>
                <select required name="time" className="form-input" value={formData.time} onChange={handleInputChange} style={{ color: formData.time ? 'var(--text-light)' : 'var(--text-light-muted)' }}>
                  <option value="" disabled>Select time slot</option>
                  <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                  <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-accent" style={{ marginTop: '1rem' }} disabled={!formData.brand || !formData.model}>
              CONFIRM BOOKING <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
