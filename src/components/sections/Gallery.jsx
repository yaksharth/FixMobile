import React from 'react';
import { motion } from 'framer-motion';
import { TechnicalAnnotation } from '../ui/TechnicalAnnotation';

export const Gallery = () => {
  return (
    <section style={{ padding: 'var(--space-xxl) 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container relative">
        <div style={{ marginBottom: 'var(--space-xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2>VISUAL<br/>VERIFICATION</h2>
          <TechnicalAnnotation label="RECORD" value="ARCHIVE_V1" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-lg)' }}>
          {/* Gallery Item 1 */}
          <div className="relative" style={{ height: 'min(600px, 60vh)', overflow: 'hidden', cursor: 'pointer' }}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ height: '100%' }}>
              <img 
                src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=1000" 
                alt="Repaired Device"
                className="monochrome-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
            <div style={{ position: 'absolute', top: 'var(--space-md)', left: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span className="mono" style={{ background: 'var(--bg-primary)', padding: '4px 8px', display: 'inline-block' }}>REF: FX-092</span>
              <span className="mono" style={{ background: 'var(--accent)', color: 'var(--bg-primary)', padding: '4px 8px', display: 'inline-block' }}>RESTORED</span>
            </div>
          </div>

          {/* Gallery Item 2 */}
          <div className="relative" style={{ height: 'min(600px, 60vh)', overflow: 'hidden', cursor: 'pointer' }}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ height: '100%' }}>
              <img 
                src="https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&q=80&w=1000" 
                alt="Repaired Device"
                className="monochrome-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
            <div style={{ position: 'absolute', top: 'var(--space-md)', left: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span className="mono" style={{ background: 'var(--bg-primary)', padding: '4px 8px', display: 'inline-block' }}>REF: FX-104</span>
              <span className="mono" style={{ background: 'var(--accent)', color: 'var(--bg-primary)', padding: '4px 8px', display: 'inline-block' }}>RESTORED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
