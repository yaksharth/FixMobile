import React from 'react';

export default function MoreServices() {
  return (
    <div className="container" style={{ padding: '6rem 2rem', minHeight: '60vh' }}>
      <span className="section-tag light">// MORE SERVICES</span>
      <h1 style={{ marginBottom: '2rem' }}>WE FIX EVERYTHING.</h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '1.125rem', marginBottom: '2rem' }}>
        Beyond standard repairs, our advanced lab is equipped to handle logic board micro-soldering, data recovery, speaker replacement, and more.
      </p>
      <ul style={{ color: 'var(--text-primary)', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>Data Recovery & Transfer</li>
        <li style={{ marginBottom: '0.5rem' }}>Logic Board Repair (Micro-soldering)</li>
        <li style={{ marginBottom: '0.5rem' }}>Speaker & Microphone Replacement</li>
        <li style={{ marginBottom: '0.5rem' }}>Button (Power/Volume) Repair</li>
        <li style={{ marginBottom: '0.5rem' }}>Software Flashing & Unlocking</li>
      </ul>
      <p style={{ color: 'var(--text-secondary)' }}>
        Contact us with your specific issue for a custom quote.
      </p>
    </div>
  );
}
