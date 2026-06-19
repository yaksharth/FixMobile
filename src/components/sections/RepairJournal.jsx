import React from 'react';
import { TechnicalAnnotation } from '../ui/TechnicalAnnotation';

export const RepairJournal = () => {
  const articles = [
    {
      id: 'PUB-01',
      title: 'THE THERMAL DEGRADATION OF LITHIUM-ION CELLS',
      date: 'OCT 12, 2026',
      tag: 'BATTERY TECH'
    },
    {
      id: 'PUB-02',
      title: 'MICRO-SOLDERING: RESTORING TRACES AT THE NANOMETER SCALE',
      date: 'OCT 08, 2026',
      tag: 'LOGIC BOARD'
    },
    {
      id: 'PUB-03',
      title: 'WHY IP68 RATING DOES NOT MEAN WATERPROOF',
      date: 'SEP 29, 2026',
      tag: 'LIQUID DAMAGE'
    }
  ];

  return (
    <section id="journal" style={{ padding: 'var(--space-xxl) 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container relative">
        <div style={{ marginBottom: 'var(--space-xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2>REPAIR<br/>JOURNAL</h2>
          <TechnicalAnnotation label="PUBLICATION" value="SEO_INDEX" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {articles.map((article, i) => (
            <div 
              key={article.id}
              style={{
                borderTop: '1px solid var(--text-primary)',
                borderBottom: i === articles.length - 1 ? '1px solid var(--text-primary)' : 'none',
                padding: 'var(--space-lg) 0',
                display: 'grid',
                gridTemplateColumns: '1fr 3fr 1fr',
                gap: 'var(--space-md)',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              <span className="mono" style={{ color: 'var(--accent)' }}>[{article.id}]</span>
              <h3 style={{ margin: 0, fontSize: 'clamp(1.2rem, 1.5vw, 2rem)' }}>{article.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span className="mono">{article.tag}</span>
                <span className="mono" style={{ color: 'var(--text-secondary)' }}>{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
