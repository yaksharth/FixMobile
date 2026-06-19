import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { getPricingData } from '../data/db';
import SearchableSelect from './ui/SearchableSelect';
import './Estimator.css';

export default function Estimator() {
  const [dbData, setDbData] = useState({});

  useEffect(() => {
    // Load fresh data on mount (in case it was updated by admin)
    setDbData(getPricingData());
    
    // Also listen for storage changes (if updated in another tab)
    const handleStorageChange = () => {
      setDbData(getPricingData());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [issue, setIssue] = useState('');
  const [price, setPrice] = useState(null);

  const brands = Object.keys(dbData);
  const models = brand && dbData[brand] ? Object.keys(dbData[brand]) : [];
  const issues = (brand && model && dbData[brand][model]) ? Object.keys(dbData[brand][model]) : [];

  // Reset dependent fields when parent field changes
  useEffect(() => {
    setModel('');
    setIssue('');
    setPrice(null);
  }, [brand]);

  useEffect(() => {
    setIssue('');
    setPrice(null);
  }, [model]);

  // Calculate price
  useEffect(() => {
    if (brand && model && issue && dbData[brand] && dbData[brand][model] && dbData[brand][model][issue]) {
      setPrice(dbData[brand][model][issue]);
    } else {
      setPrice(null);
    }
  }, [brand, model, issue, dbData]);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="container">
      <section className="estimator">
        <div className="estimator-content">
          <div className="estimator-info">
            <span className="section-tag light">// INSTANT ESTIMATOR</span>
            <h2 className="estimator-title">
              GET YOUR REPAIR<br/>
              ESTIMATE <span className="text-accent">NOW</span>
            </h2>
            <p className="estimator-desc">
              Fast. Transparent. No hidden charges.
            </p>
          </div>
          
          <div className="estimator-form">
            <SearchableSelect 
              label="1. SELECT BRAND" 
              options={brands} 
              value={brand} 
              onChange={setBrand} 
              placeholder="Choose brand" 
            />
            
            <SearchableSelect 
              label="2. SELECT MODEL" 
              options={models} 
              value={model} 
              onChange={setModel} 
              placeholder="Search or select model" 
              disabled={!brand}
            />
            
            <SearchableSelect 
              label="3. SELECT ISSUE" 
              options={issues} 
              value={issue} 
              onChange={setIssue} 
              placeholder="Choose issue" 
              disabled={!model}
            />
          </div>
          
          <div className="estimator-result">
            <div className="result-label">ESTIMATED PRICE</div>
            <div className="price-display">
              <span className="price text-accent">{price ? formatPrice(price) : '₹--'}</span>
              <span className="price-tax">+ Taxes</span>
            </div>
            
            <div className="result-features">
              <div className="result-feature">
                <Clock size={16} />
                <div className="feature-text">
                  <strong>45 MIN</strong><br/>
                  <span>Repair Time</span>
                </div>
              </div>
              <div className="result-feature">
                <ShieldCheck size={16} />
                <div className="feature-text">
                  <strong>90 DAYS</strong><br/>
                  <span>Warranty</span>
                </div>
              </div>
            </div>
            
            <button 
              className={`btn w-full ${price ? 'btn-accent' : 'btn-outline'}`} 
              disabled={!price} 
              style={!price ? { color: 'var(--text-light-muted)', borderColor: 'var(--border-dark)', cursor: 'not-allowed' } : {}}
            >
              SEE FULL QUOTE <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
