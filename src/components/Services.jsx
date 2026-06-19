import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Battery, Droplet, Plug, Camera, ArrowRight } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      icon: <Smartphone className="service-icon" />,
      title: "SCREEN REPLACEMENT",
      desc: "Cracked or broken screen? We've got you covered.",
      time: "30-60 MIN",
      link: "/service/screen-replacement"
    },
    {
      icon: <Battery className="service-icon" />,
      title: "BATTERY REPLACEMENT",
      desc: "Fast draining battery? Get back to full power.",
      time: "20-30 MIN",
      link: "/service/battery-replacement"
    },
    {
      icon: <Droplet className="service-icon" />,
      title: "WATER DAMAGE REPAIR",
      desc: "Dropped in water? We'll revive your device.",
      time: "24-48 HRS",
      link: "/service/water-damage-repair"
    },
    {
      icon: <Plug className="service-icon" />,
      title: "CHARGING PORT REPAIR",
      desc: "Charging issues? We'll fix the connection.",
      time: "30-45 MIN",
      link: "/service/charging-port-repair"
    },
    {
      icon: <Camera className="service-icon" />,
      title: "CAMERA REPAIR",
      desc: "Blurry shots? We'll bring your camera back.",
      time: "30-60 MIN",
      link: "/service/camera-repair"
    }
  ];

  return (
    <section className="services container" id="services">
      <div className="services-header">
        <div className="services-title-area">
          <span className="section-tag">// OUR SERVICES</span>
          <h2>WHAT CAN<br/>WE FIX FOR<br/><span className="text-accent">YOU?</span></h2>
          <p className="services-desc">High quality repairs for<br/>all major issues.</p>
          <Link to="/service/more-services" className="view-all-link">
            VIEW ALL SERVICES <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <Link key={index} to={service.link} className="service-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="icon-container">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <div className="service-time">{service.time}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
