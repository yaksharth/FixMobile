import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <span className="section-tag light">PREMIUM MOBILE REPAIR</span>
        <h1 className="hero-title">
          EXPERT CARE.<br/>
          GENUINE PARTS.<br/>
          FAST RESULTS<span className="text-accent">.</span>
        </h1>
        <p className="hero-desc">
          We fix smartphones the right way.<br/>
          Premium parts, expert technicians and<br/>
          a commitment to perfection.
        </p>
        
        <div className="hero-actions">
          <button className="btn btn-primary">
            BOOK REPAIR <ArrowUpRight size={16} className="text-accent" />
          </button>
          <button className="btn btn-ghost">
            GET ESTIMATE <ArrowUpRight size={16} className="text-accent" />
          </button>
        </div>

        <div className="hero-status">
          <div className="status-box">
            <div className="status-item">
              <span className="status-label">LAB STATUS:</span>
              <span className="status-value text-accent">ONLINE</span>
            </div>
            <div className="status-item">
              <span className="status-label">TECHNICIANS:</span>
              <span className="status-value text-accent">12</span>
            </div>
            <div className="status-item">
              <span className="status-label">AVG REPAIR TIME:</span>
              <span className="status-value text-accent">45 MIN</span>
            </div>
          </div>
          <div className="status-lines">
            <div className="line-h"></div>
            <div className="line-diag"></div>
            <div className="line-v"></div>
            <div className="crosshair"></div>
          </div>
        </div>
      </div>
      
      <div className="hero-image-wrapper">
        <img src="/hero.png" alt="Phone being repaired" className="hero-img" />
        <div className="time-badge">
          <div className="badge-value">45<br/>MIN</div>
          <div className="badge-label">AVERAGE<br/>REPAIR TIME</div>
        </div>
      </div>
    </section>
  );
}
