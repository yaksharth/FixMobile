import React, { useState, useEffect } from 'react';
import { Users, Wrench, CheckCircle, Clock } from 'lucide-react';
import { getBookings } from '../../data/db';

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    diagnosing: 0,
    completed: 0
  });

  useEffect(() => {
    const bookings = getBookings();
    setStats({
      total: bookings.length,
      pending: bookings.filter(b => b.status === 'Pending').length,
      diagnosing: bookings.filter(b => b.status === 'Diagnosing').length,
      completed: bookings.filter(b => b.status === 'Completed').length
    });
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Overview</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="admin-card">
          <div className="admin-card-body" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(52, 211, 153, 0.1)', color: 'var(--accent-green)', borderRadius: '12px' }}>
              <Users size={24} />
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '800' }}>{stats.total}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Total Bookings</div>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-body" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#fef3c7', color: '#d97706', borderRadius: '12px' }}>
              <Clock size={24} />
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '800' }}>{stats.pending}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Pending Requests</div>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-body" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#e0e7ff', color: '#4338ca', borderRadius: '12px' }}>
              <Wrench size={24} />
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '800' }}>{stats.diagnosing}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>In Repair</div>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-body" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ padding: '1rem', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: '12px' }}>
              <CheckCircle size={24} />
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: '800' }}>{stats.completed}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase' }}>Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
