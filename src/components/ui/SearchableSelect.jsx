import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import './SearchableSelect.css';

export default function SearchableSelect({ label, options, value, onChange, placeholder, disabled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(opt => 
    opt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="form-group" ref={wrapperRef} style={{ position: 'relative', zIndex: isOpen ? 100 : 1 }}>
      {label && <label>{label}</label>}
      <div 
        className={`select-wrapper custom-select ${disabled ? 'disabled' : ''}`} 
        onClick={() => {
          if (!disabled) {
            setIsOpen(!isOpen);
            if (!isOpen) setSearch('');
          }
        }}
      >
        <div className="selected-value">
          {value || <span className="placeholder-text">{placeholder}</span>}
        </div>
        <ChevronDown className="select-icon" size={16} />
        
        {isOpen && (
          <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
            <div className="search-box">
              <Search size={14} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
              />
            </div>
            <ul className="options-list">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => (
                  <li 
                    key={opt} 
                    className={opt === value ? 'selected' : ''}
                    onClick={() => {
                      onChange(opt);
                      setIsOpen(false);
                      setSearch('');
                    }}
                  >
                    {opt}
                  </li>
                ))
              ) : (
                <li className="no-results">No matches found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
