import React from 'react';

export const TechnicalAnnotation = ({ label, value, type = 'default', style = {} }) => {
  const getStyle = () => {
    switch (type) {
      case 'accent':
        return { color: 'var(--accent)', borderBottom: '1px solid var(--accent)' };
      default:
        return { color: 'var(--text-secondary)', borderBottom: '1px solid var(--text-secondary)' };
    }
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', ...style }}>
      <span className="mono" style={{ opacity: 0.6 }}>[{label}]</span>
      <span className="mono" style={getStyle()}>{value}</span>
    </div>
  );
};
