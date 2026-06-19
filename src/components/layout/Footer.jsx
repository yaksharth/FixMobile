import React from 'react';
import { TechnicalAnnotation } from '../ui/TechnicalAnnotation';

export const Footer = () => {
  return (
    <footer style={{ padding: 'var(--space-xxl) 0 var(--space-md) 0', backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
      <div className="container relative">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)', marginBottom: 'var(--space-xxl)' }}>
          <div>
            <TechnicalAnnotation label="LABORATORY" value="HQ_01" style={{ marginBottom: 'var(--space-md)' }} />
            <p className="mono" style={{ color: 'var(--text-secondary)' }}>
              100 PRECISION WAY<br/>
              SILICON DISTRICT<br/>
              SYSTEM ONLINE 24/7
            </p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="mono" style={{ color: 'var(--accent)' }}>// SYSTEMS</span>
              <a href="#" className="mono" style={{ color: 'var(--bg-primary)', textDecoration: 'none' }}>DIAGNOSTICS</a>
              <a href="#" className="mono" style={{ color: 'var(--bg-primary)', textDecoration: 'none' }}>REPAIR PROTOCOLS</a>
              <a href="#" className="mono" style={{ color: 'var(--bg-primary)', textDecoration: 'none' }}>DATA RECOVERY</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="mono" style={{ color: 'var(--accent)' }}>// COMMS</span>
              <a href="#" className="mono" style={{ color: 'var(--bg-primary)', textDecoration: 'none' }}>INSTAGRAM</a>
              <a href="#" className="mono" style={{ color: 'var(--bg-primary)', textDecoration: 'none' }}>TWITTER</a>
              <a href="#" className="mono" style={{ color: 'var(--bg-primary)', textDecoration: 'none' }}>SUPPORT NODE</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--text-secondary)', paddingTop: 'var(--space-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <h1 style={{ fontSize: 'clamp(4rem, 12vw, 15rem)', lineHeight: 0.8, letterSpacing: '-0.05em', margin: 0, color: 'var(--bg-primary)' }}>FIXMOBILE</h1>
          <span className="mono" style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-md)' }}>©2026 FXMBL</span>
        </div>
      </div>
    </footer>
  );
};
