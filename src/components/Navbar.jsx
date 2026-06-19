import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleBookRepair = () => {
    closeMenu();
    navigate('/contact');
  };

  return (
    <nav className="navbar container">
      <Link to="/" className="logo-container" style={{ textDecoration: 'none' }} onClick={closeMenu}>
        <h1 className="logo">FIXMOBILE<span className="text-accent">.</span></h1>
        <span className="logo-sub">PREMIUM REPAIR LAB</span>
      </Link>
      
      <div className="nav-links">
        <Link to="/">SERVICES</Link>
        <Link to="/diary">REPAIR DIARY</Link>
        <Link to="/pricing">PRICING</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      <div className="nav-actions">
        <button className="btn btn-primary" onClick={handleBookRepair}>
          BOOK REPAIR <ArrowRight size={16} className="text-accent" />
        </button>
        <button className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav-links">
            <Link to="/" onClick={closeMenu}>SERVICES</Link>
            <Link to="/diary" onClick={closeMenu}>REPAIR DIARY</Link>
            <Link to="/pricing" onClick={closeMenu}>PRICING</Link>
            <Link to="/about" onClick={closeMenu}>ABOUT</Link>
            <Link to="/contact" onClick={closeMenu}>CONTACT</Link>
            <button className="btn btn-primary mobile-book-btn" onClick={handleBookRepair}>
              BOOK REPAIR <ArrowRight size={16} className="text-accent" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
