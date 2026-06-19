import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechnicalAnnotation } from '../ui/TechnicalAnnotation';

export const PhoneConfigurator = ({ onOpenBooking }) => {
  const [step, setStep] = useState(1);
  const [device, setDevice] = useState(null);
  const [issue, setIssue] = useState(null);

  const devices = [
    { id: 'IP15P', name: 'iPhone 15 Pro', year: '2023' },
    { id: 'IP14P', name: 'iPhone 14 Pro', year: '2022' },
    { id: 'S24U', name: 'Galaxy S24 Ultra', year: '2024' },
    { id: 'P8P', name: 'Pixel 8 Pro', year: '2023' }
  ];

  const issues = [
    { id: 'SCRN', name: 'Display Calibration', price: '$279', time: '45m' },
    { id: 'BATT', name: 'Power Cell Replacement', price: '$89', time: '30m' },
    { id: 'PORT', name: 'I/O Module Repair', price: '$129', time: '60m' },
    { id: 'LENS', name: 'Optical Array Repair', price: '$149', time: '45m' }
  ];

  const nextStep = () => setStep(step + 1);
  const reset = () => {
    setStep(1);
    setDevice(null);
    setIssue(null);
  };

  return (
    <section id="process" style={{ padding: 'var(--space-xxl) 0', backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
      <div className="container relative">
        <div style={{ marginBottom: 'var(--space-xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2 style={{ color: 'var(--bg-primary)' }}>DIAGNOSTIC<br/>PROTOCOL</h2>
          <TechnicalAnnotation label="STEP" value={`0${step}/03`} type="accent" />
        </div>

        <div style={{ minHeight: '400px', position: 'relative' }}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 style={{ marginBottom: 'var(--space-lg)' }}>IDENTIFY TARGET DEVICE</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--text-secondary)' }}>
                  {devices.map(d => (
                    <div 
                      key={d.id}
                      onClick={() => { setDevice(d); nextStep(); }}
                      style={{ 
                        padding: 'var(--space-md)', 
                        background: 'var(--text-primary)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#222'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'var(--text-primary)'}
                    >
                      <span style={{ fontSize: '1.5rem', fontWeight: 500 }}>{d.name}</span>
                      <span className="mono" style={{ color: 'var(--text-secondary)' }}>{d.year}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                  <button onClick={() => setStep(1)} className="mono" style={{ background: 'transparent', color: 'var(--text-secondary)', border: 'none', cursor: 'pointer' }}>
                    ← BACK
                  </button>
                  <TechnicalAnnotation label="TARGET" value={device.name} />
                </div>

                <h3 style={{ marginBottom: 'var(--space-lg)' }}>SELECT COMPONENT FAILURE</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'var(--text-secondary)' }}>
                  {issues.map(i => (
                    <div 
                      key={i.id}
                      onClick={() => { setIssue(i); nextStep(); }}
                      style={{ 
                        padding: 'var(--space-md)', 
                        background: 'var(--text-primary)',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#222'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'var(--text-primary)'}
                    >
                      <span className="mono" style={{ display: 'block', color: 'var(--accent)', marginBottom: 'var(--space-xs)' }}>[{i.id}]</span>
                      <span style={{ fontSize: '1.5rem', fontWeight: 500, display: 'block', marginBottom: 'var(--space-sm)' }}>{i.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 style={{ marginBottom: 'var(--space-lg)', color: 'var(--accent)' }}>DIAGNOSTIC COMPLETE</h3>
                
                <div style={{ 
                  border: '1px solid var(--text-secondary)', 
                  padding: 'var(--space-lg)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-lg)',
                  marginBottom: 'var(--space-lg)'
                }}>
                  <div>
                    <TechnicalAnnotation label="DEVICE" value={device.name} style={{ marginBottom: 'var(--space-sm)' }} />
                    <h4 style={{ fontSize: '2rem' }}>{issue.name}</h4>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <TechnicalAnnotation label="EST. TIME" value={issue.time} style={{ marginBottom: 'var(--space-sm)', justifyContent: 'flex-end' }} />
                    <h4 style={{ fontSize: '2rem', color: 'var(--accent)' }}>{issue.price}</h4>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                  <button onClick={onOpenBooking} style={{
                    background: 'var(--accent)',
                    color: 'var(--text-primary)',
                    padding: '1rem 2rem',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                  }}>
                    INITIALIZE REPAIR
                  </button>
                  <button onClick={reset} style={{
                    background: 'transparent',
                    color: 'var(--bg-primary)',
                    padding: '1rem 2rem',
                    border: '1px solid var(--text-secondary)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.05em'
                  }}>
                    RESTART PROTOCOL
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
