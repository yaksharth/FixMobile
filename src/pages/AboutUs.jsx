import React from 'react';

export default function AboutUs() {
  return (
    <div className="container" style={{ padding: '6rem 2rem', minHeight: '60vh' }}>
      <span className="section-tag light">// ABOUT US</span>
      <h1 style={{ marginBottom: '2rem' }}>OUR STORY</h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
        FIXMOBILE started with a simple mission: to provide the highest quality smartphone repairs with unmatched speed and transparency. Our team of certified technicians operates in a state-of-the-art lab environment, ensuring your device gets the premium care it deserves.
      </p>
    </div>
  );
}
