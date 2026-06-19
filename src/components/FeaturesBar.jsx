import React from 'react';
import { Star, ShieldCheck, Clock, Zap } from 'lucide-react';
import './FeaturesBar.css';

export default function FeaturesBar() {
  const features = [
    {
      icon: <Star className="feature-icon" />,
      title: "4.9 STAR RATING",
      desc: "Google & Trusted Customers"
    },
    {
      icon: <ShieldCheck className="feature-icon" />,
      title: "5000+ DEVICES",
      desc: "Successfully Repaired"
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "90 DAY WARRANTY",
      desc: "On All Repairs"
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "SAME DAY SERVICE",
      desc: "For Most Repairs"
    }
  ];

  return (
    <div className="features-wrapper">
      <div className="container features-bar">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="icon-wrapper">{feature.icon}</div>
            <div className="feature-text">
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
