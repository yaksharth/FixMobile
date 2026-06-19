import React from 'react';
import { Calendar, Search, PenTool, ShieldCheck, Smartphone, ArrowRight } from 'lucide-react';
import './Process.css';

export default function Process() {
  const steps = [
    { num: '01', icon: <Calendar />, title: 'BOOK REPAIR', desc: 'Choose your device, select issue and schedule a slot.' },
    { num: '02', icon: <Search />, title: 'DIAGNOSIS', desc: 'We run a complete check and confirm the issue.' },
    { num: '03', icon: <PenTool />, title: 'REPAIR', desc: 'Our experts fix it using premium tools & parts.' },
    { num: '04', icon: <ShieldCheck />, title: 'QUALITY CHECK', desc: 'Multi-point testing to ensure everything works perfectly.' },
    { num: '05', icon: <Smartphone />, title: 'DELIVERED', desc: 'Your device is ready. Pick up and enjoy like new.' }
  ];

  return (
    <section className="process container">
      <div className="process-header">
        <span className="section-tag">// REPAIR PROCESS</span>
        <h2 className="process-title">
          SIMPLE PROCESS.<br/>
          PERFECT <span className="text-accent">RESULTS.</span>
        </h2>
        <p className="process-desc">
          From diagnosis to delivery,<br/>
          we handle everything.
        </p>
        <a href="#" className="how-it-works-link">
          HOW IT WORKS <ArrowRight size={16} />
        </a>
      </div>
      
      <div className="process-steps">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="process-step">
              <div className="step-num">{step.num}</div>
              <div className="step-icon">{step.icon}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="step-connector">
                <ArrowRight size={24} className="connector-icon" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
