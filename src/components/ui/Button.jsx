import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', style = {}, ...props }) => {
  const baseStyle = {
    padding: 'clamp(0.8rem, 1vw, 1.2rem) clamp(1.5rem, 2vw, 2.5rem)',
    fontFamily: 'var(--font-mono)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontSize: 'clamp(0.7rem, 0.8vw, 0.9rem)',
    cursor: 'pointer',
    border: '1px solid var(--text-primary)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    ...style
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--text-primary)',
      color: 'var(--bg-primary)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--text-primary)',
    },
    accent: {
      backgroundColor: 'var(--accent)',
      color: 'var(--bg-primary)',
      border: '1px solid var(--accent)'
    }
  };

  return (
    <motion.button 
      whileHover={{ y: -2, backgroundColor: variant === 'secondary' ? 'var(--text-primary)' : '', color: variant === 'secondary' ? 'var(--bg-primary)' : '' }}
      whileTap={{ y: 0 }}
      style={{ ...baseStyle, ...variants[variant] }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};
