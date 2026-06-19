import React, { useState, useEffect } from 'react';
import { getPricingData, updatePrice } from '../../data/db';
import SearchableSelect from '../../components/ui/SearchableSelect';
import { Save, Check } from 'lucide-react';

export default function PricingManager() {
  const [dbData, setDbData] = useState({});
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [issue, setIssue] = useState('');
  
  const [currentPrice, setCurrentPrice] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setDbData(getPricingData());
  }, []);

  const brands = Object.keys(dbData);
  const models = brand && dbData[brand] ? Object.keys(dbData[brand]) : [];
  const issues = (brand && model && dbData[brand][model]) ? Object.keys(dbData[brand][model]) : [];

  // Reset logic
  useEffect(() => {
    setModel('');
    setIssue('');
    setCurrentPrice('');
    setIsSaved(false);
  }, [brand]);

  useEffect(() => {
    setIssue('');
    setCurrentPrice('');
    setIsSaved(false);
  }, [model]);

  useEffect(() => {
    if (brand && model && issue && dbData[brand][model][issue]) {
      setCurrentPrice(dbData[brand][model][issue].toString());
    } else {
      setCurrentPrice('');
    }
    setIsSaved(false);
  }, [brand, model, issue, dbData]);

  const handleSave = () => {
    if (updatePrice(brand, model, issue, currentPrice)) {
      setDbData(getPricingData());
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Pricing Engine</h2>
      
      <div className="admin-card" style={{ maxWidth: '800px' }}>
        <div className="admin-card-header">
          <h3>Update Repair Costs</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            Changes made here will instantly reflect on the public Estimator.
          </p>
        </div>
        
        <div className="admin-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: '#121212', padding: '1rem', borderRadius: '8px' }}>
              <SearchableSelect 
                label="1. BRAND" 
                options={brands} 
                value={brand} 
                onChange={setBrand} 
                placeholder="Choose brand" 
              />
            </div>
            <div style={{ backgroundColor: '#121212', padding: '1rem', borderRadius: '8px' }}>
              <SearchableSelect 
                label="2. MODEL" 
                options={models} 
                value={model} 
                onChange={setModel} 
                placeholder="Choose model" 
                disabled={!brand}
              />
            </div>
            <div style={{ backgroundColor: '#121212', padding: '1rem', borderRadius: '8px' }}>
              <SearchableSelect 
                label="3. ISSUE" 
                options={issues} 
                value={issue} 
                onChange={setIssue} 
                placeholder="Choose issue" 
                disabled={!model}
              />
            </div>
          </div>

          {issue && (
            <div style={{ backgroundColor: 'rgba(52, 211, 153, 0.05)', padding: '2rem', border: '1px solid var(--accent-green)', borderRadius: '8px', display: 'flex', alignItems: 'flex-end', gap: '1.5rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>CURRENT PRICE (INR)</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontWeight: 700, color: 'var(--text-secondary)' }}>₹</span>
                  <input 
                    type="number" 
                    value={currentPrice}
                    onChange={(e) => { setCurrentPrice(e.target.value); setIsSaved(false); }}
                    style={{ 
                      width: '100%', 
                      padding: '1rem 1rem 1rem 2.5rem', 
                      fontSize: '1.5rem', 
                      fontWeight: 700, 
                      borderRadius: '4px',
                      border: '1px solid var(--border-light)'
                    }}
                  />
                </div>
              </div>
              <button 
                className="btn btn-accent" 
                onClick={handleSave}
                disabled={!currentPrice || isNaN(currentPrice)}
                style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                {isSaved ? <><Check size={20} /> SAVED</> : <><Save size={20} /> UPDATE PRICE</>}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
