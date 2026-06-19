import React from 'react';
import { Camera, ArrowRight } from 'lucide-react';

export default function CameraRepair() {
  return (
    <div className="container" style={{ padding: '6rem 2rem', minHeight: '60vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '50%', border: '1px solid var(--border-light)' }}>
          <Camera size={48} className="text-accent" />
        </div>
        <div>
          <span className="section-tag light">// CAMERA REPAIR</span>
          <h1>PICTURE PERFECT.</h1>
        </div>
      </div>
      
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.125rem', marginBottom: '2rem' }}>
        Cracked lens or broken sensor ruining your photos? Our expert technicians can repair or replace your front and rear cameras to bring back crystal clear photography.
      </p>
      
      <div style={{ backgroundColor: 'var(--bg-card-dark)', color: 'var(--text-light)', padding: '2rem', borderRadius: '8px', maxWidth: '400px' }}>
        <h4 style={{ marginBottom: '1rem' }}>SERVICE DETAILS</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-light-muted)' }}>Average Time</span>
          <strong>30-60 MIN</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-dark)', paddingBottom: '0.5rem' }}>
          <span style={{ color: 'var(--text-light-muted)' }}>Warranty</span>
          <strong>90 DAYS</strong>
        </div>
        <button className="btn btn-accent w-full">
          BOOK REPAIR <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
