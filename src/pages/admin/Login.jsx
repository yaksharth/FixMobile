import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';
import { loginAdmin, isAuthenticated } from '../../data/db';
import './Login.css';

export default function Login() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (isAuthenticated()) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginAdmin(pin)) {
      navigate('/admin');
    } else {
      setError('Invalid PIN code.');
      setPin('');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <div className="admin-login-icon">
            <Lock size={24} className="text-accent" />
          </div>
          <h2>Admin Access</h2>
          <p>Please enter your PIN to continue.</p>
        </div>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          {error && <div className="admin-login-error">{error}</div>}
          
          <div className="form-group">
            <input 
              type="password" 
              className="form-input admin-pin-input" 
              placeholder="Enter PIN (1234)" 
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              autoFocus
              maxLength={4}
            />
          </div>
          
          <button type="submit" className="btn btn-accent w-full mt-4" disabled={!pin}>
            VERIFY <ArrowRight size={16} />
          </button>
        </form>
        
        <div className="admin-login-footer">
          <p>Mock DB Mode • Use PIN: 1234</p>
        </div>
      </div>
    </div>
  );
}
