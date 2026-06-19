import React from 'react';
import { Droplet, ArrowRight } from 'lucide-react';

export default function WaterDamageRepair() {
  return (
    <div className="container" style={{ padding: '6rem 2rem', minHeight: '60vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '50%', border: '1px solid var(--border-light)' }}>
          <Droplet size={48} className="text-accent" />
        </div>
        <div>
          <span className="section-tag light">// WATER DAMAGE REPAIR</span>
          <h1>LIQUID RESCUE.</h1>
        </div>
      </div>
      
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.125rem', marginBottom: '2rem' }}>
        Dropped in the pool, sink, or toilet? Turn it off immediately and bring it to us. Our advanced ultrasonic cleaning process removes corrosion and saves devices others consider dead.
      </p>
      
      <div style={{ backgroundColor: 'var(--bg-card-dark)', color: 'var(--text-light)', padding: '2rem', borderRadius: '8px', maxWidth: '400px' }}>
        <h4 style={{ marginBottom: '1rem' }}>SERVICE DETAILS</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-light-muted)' }}>Average Time</span>
          <strong>24-48 HRS</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-light-muted)' }}>Warranty</span>
          <strong>30 DAYS</strong>
        </div>
        <button className="btn btn-accent w-full">
          BOOK REPAIR <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
