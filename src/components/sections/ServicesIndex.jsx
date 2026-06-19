import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechnicalAnnotation } from '../ui/TechnicalAnnotation';

const services = [
  {
    id: '01',
    title: 'SCREEN CALIBRATION',
    desc: 'OLED / LCD replacement with true-tone restoration.',
    img: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '02',
    title: 'POWER SYSTEMS',
    desc: 'High-capacity cell replacements & diagnostics.',
    img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cd56e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '03',
    title: 'OPTICAL ARRAY',
    desc: 'Lens repair & sensor dust removal.',
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '04',
    title: 'LIQUID EXTRACTION',
    desc: 'Micro-soldering & ultrasonic logic board cleaning.',
    img: 'https://images.unsplash.com/photo-1588508065123-287b28e01397?auto=format&fit=crop&q=80&w=1000'
  }
];

export const ServicesIndex = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="relative w-full" style={{ padding: 'var(--space-xxl) 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container relative">
        <div style={{ marginBottom: 'var(--space-xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h2>SERVICE<br/>INDEX</h2>
          <TechnicalAnnotation label="MODULE" value="001-SVC" />
        </div>

        <div className="relative" style={{ borderTop: '1px solid var(--text-primary)' }}>
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ 
                borderBottom: '1px solid var(--text-primary)',
                padding: 'var(--space-lg) 0',
                cursor: 'pointer',
                display: 'grid',
                gridTemplateColumns: '100px 1fr 1fr',
                alignItems: 'center',
                transition: 'background-color 0.3s ease'
              }}
            >
              <span className="mono" style={{ fontSize: '1.5rem', color: hoveredIndex === index ? 'var(--accent)' : 'var(--text-secondary)' }}>
                {service.id}
              </span>
              <h3 style={{ margin: 0 }}>{service.title}</h3>
              <p className="mono" style={{ color: 'var(--text-secondary)', textAlign: 'right' }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Hover Image Reveal */}
        <div 
          style={{ 
            position: 'absolute', 
            top: '20%', 
            right: '10%', 
            width: '400px', 
            height: '500px', 
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ width: '100%', height: '100%', position: 'absolute' }}
              >
                <img 
                  src={services[hoveredIndex].img} 
                  alt="" 
                  className="monochrome-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Technical crosshair overlays on the image */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', width: '40px', height: '40px', transform: 'translate(-50%, -50%)' }}>
                  <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--accent)' }}></div>
                  <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', background: 'var(--accent)' }}></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
