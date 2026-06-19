import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BookingModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'var(--text-primary)',
            color: 'var(--bg-primary)',
            zIndex: 100,
            overflowY: 'auto',
            padding: 'var(--space-xl)'
          }}
        >
          <div className="container relative h-full">
            <button 
              onClick={onClose}
              className="mono"
              style={{
                position: 'absolute',
                top: 0, right: 'var(--space-md)',
                background: 'transparent',
                color: 'var(--bg-primary)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                zIndex: 110
              }}
            >
              [X] CLOSE PROTOCOL
            </button>

            <div style={{ maxWidth: '800px', margin: '10vh auto 0' }}>
              <h2 style={{ marginBottom: 'var(--space-xl)', color: 'var(--bg-primary)' }}>
                INITIALIZE<br/>SERVICE<br/>PROTOCOL
              </h2>

              <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="mono" style={{ color: 'var(--accent)' }}>01. IDENTIFICATION</label>
                  <input type="text" placeholder="FULL NAME" style={inputStyle} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="mono" style={{ color: 'var(--accent)' }}>02. CONTACT VECTOR</label>
                  <input type="tel" placeholder="PHONE NUMBER" style={inputStyle} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="mono" style={{ color: 'var(--accent)' }}>03. TARGET DEVICE</label>
                  <input type="text" placeholder="DEVICE MODEL" style={inputStyle} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label className="mono" style={{ color: 'var(--accent)' }}>04. FAILURE DESCRIPTION</label>
                  <textarea placeholder="DESCRIBE THE ISSUE" rows={4} style={{ ...inputStyle, resize: 'none' }}></textarea>
                </div>

                <button type="button" style={{
                  background: 'var(--accent)',
                  color: 'var(--text-primary)',
                  padding: '1.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  letterSpacing: '0.05em',
                  marginTop: 'var(--space-md)'
                }}>
                  SUBMIT DIAGNOSTIC REQUEST
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const inputStyle = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--text-secondary)',
  color: 'var(--bg-primary)',
  fontSize: 'clamp(1.5rem, 2vw, 2.5rem)',
  fontFamily: 'var(--font-editorial)',
  padding: '0.5rem 0',
  outline: 'none'
};
