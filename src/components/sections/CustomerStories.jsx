import React from 'react';
import { TechnicalAnnotation } from '../ui/TechnicalAnnotation';

export const CustomerStories = () => {
  return (
    <section style={{ padding: 'var(--space-xxl) 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container relative">
        <div style={{ marginBottom: 'var(--space-xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2>FIELD<br/>REPORTS</h2>
          <TechnicalAnnotation label="DATA" value="CLIENT_LOGS" />
        </div>

        <div style={{ borderTop: '1px solid var(--text-primary)', paddingTop: 'var(--space-xl)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)' }}>
            
            {/* Story 1 */}
            <div>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)', flexWrap: 'wrap' }}>
                <TechnicalAnnotation label="SUBJECT" value="AMAN S." />
                <TechnicalAnnotation label="TIME" value="35 MIN" type="accent" />
              </div>
              <p style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', lineHeight: 1.2, fontWeight: 500, marginBottom: 'var(--space-lg)' }}>
                "I dropped my iPhone two hours before a wedding. It was restored to factory specifications before the ceremony started."
              </p>
              <p className="mono" style={{ color: 'var(--text-secondary)' }}>DEVICE: iPHONE 14 PRO<br/>ISSUE: SHATTERED DISPLAY</p>
            </div>

            {/* Story 2 */}
            <div>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)', flexWrap: 'wrap' }}>
                <TechnicalAnnotation label="SUBJECT" value="ELENA R." />
                <TechnicalAnnotation label="TIME" value="45 MIN" type="accent" />
              </div>
              <p style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', lineHeight: 1.2, fontWeight: 500, marginBottom: 'var(--space-lg)' }}>
                "Water damage completely killed my device. Their micro-soldering precision recovered all of my data."
              </p>
              <p className="mono" style={{ color: 'var(--text-secondary)' }}>DEVICE: GALAXY S23<br/>ISSUE: LOGIC BOARD SHORT</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
