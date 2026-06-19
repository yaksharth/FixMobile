import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export const Navbar = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: 'var(--space-md) var(--space-xl)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(247, 244, 238, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(122, 122, 122, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.05em' }}>FIXMOBILE</span>
        <span className="mono" style={{ fontSize: '0.6rem', marginTop: '4px' }}>// LAB</span>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
        <a href="#services" className="mono" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.8rem' }}>SERVICES</a>
        <a href="#process" className="mono" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.8rem' }}>DIAGNOSTICS</a>
        <a href="#journal" className="mono" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.8rem' }}>JOURNAL</a>
        
        <button onClick={onOpenBooking} className="mono" style={{
          background: 'var(--text-primary)',
          color: 'var(--bg-primary)',
          padding: '0.5rem 1rem',
          border: 'none',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginLeft: 'var(--space-sm)'
        }}>
          INITIATE REPAIR
        </button>
      </div>
    </motion.nav>
  );
};
