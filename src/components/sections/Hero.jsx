import React from 'react';
import { motion } from 'framer-motion';
import { TechnicalAnnotation } from '../ui/TechnicalAnnotation';

export const Hero = () => {
  return (
    <section className="relative w-full" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: 'var(--space-xl)' }}>
      <div className="container relative h-full">
        {/* Mobile stacking, Desktop grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          height: '100%', 
          gap: 'var(--space-xl)',
          alignItems: 'center'
        }}>
          {/* Left: Typography */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <TechnicalAnnotation label="STATUS" value="AWAITING DEVICE" type="accent" style={{ marginBottom: 'var(--space-md)' }} />
              
              <h1 style={{ marginBottom: 'var(--space-lg)' }}>
                YOUR PHONE<br />
                ISN'T BROKEN.<br />
                <span style={{ color: 'var(--text-secondary)' }}>IT'S JUST<br />WAITING<br />FOR US.</span>
              </h1>

              <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', flexDirection: 'column' }}>
                <TechnicalAnnotation label="TIMESTAMP" value={new Date().toISOString().split('T')[0]} />
                <TechnicalAnnotation label="PROTOCOL" value="FX-MBL-001" />
              </div>
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="relative" style={{ height: 'min(80vh, 700px)', overflow: 'hidden' }}>
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ width: '100%', height: '100%' }}
            >
              <img 
                src="/hero.png" 
                alt="High-tech repair laboratory" 
                className="monochrome-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div className="blueprint-overlay"></div>
              
              {/* Floating Labels */}
              <div style={{ 
                position: 'absolute', 
                bottom: 'var(--space-md)', 
                left: 'var(--space-md)', 
                background: 'var(--bg-primary)', 
                padding: '0.5rem 1rem', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                border: '1px solid var(--text-primary)'
              }}>
                <span className="mono" style={{ color: 'var(--accent)' }}>●</span>
                <span className="mono">PRECISION CALIBRATED</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
