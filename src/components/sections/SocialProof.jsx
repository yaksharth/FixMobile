import React from 'react';
import { motion } from 'framer-motion';

export const SocialProof = () => {
  const items = [
    "★★★★★ 4.9 RATING",
    "5000+ REPAIRS",
    "SAME DAY SERVICE",
    "90 DAY WARRANTY",
    "FEATURED IN",
    "CUSTOMER REVIEWS"
  ];

  return (
    <section style={{ 
      borderTop: '1px solid var(--text-primary)', 
      borderBottom: '1px solid var(--text-primary)',
      padding: 'var(--space-sm) 0',
      overflow: 'hidden',
      background: 'var(--text-primary)',
      color: 'var(--bg-primary)'
    }}>
      <motion.div
        animate={{ x: [0, -1030] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{ display: 'flex', gap: 'var(--space-xl)', whiteSpace: 'nowrap' }}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl)' }}>
            <span className="mono" style={{ fontSize: '1rem', letterSpacing: '0.1em' }}>
              {item}
            </span>
            <span style={{ color: 'var(--accent)' }}>●</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
