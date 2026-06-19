import React, { useState, useEffect } from 'react';
import { getBookings, updateBookingStatus, deleteBooking } from '../../data/db';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(getBookings().reverse()); // Newest first
  }, []);

  const handleStatusChange = (id, newStatus) => {
    updateBookingStatus(id, newStatus);
    setBookings(getBookings().reverse());
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      deleteBooking(id);
      setBookings(getBookings().reverse());
    }
  };

  const getBadgeClass = (status) => {
    switch(status) {
      case 'Pending': return 'badge-pending';
      case 'Diagnosing': return 'badge-diagnosing';
      case 'Repaired': return 'badge-repaired';
      case 'Completed': return 'badge-completed';
      default: return 'badge-pending';
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Appointment Bookings</h2>
      
      <div className="admin-card">
        <div style={{ overflowX: 'auto' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Customer</th>
                <th>Device</th>
                <th>Issue</th>
                <th>Appointment</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
                    No bookings found.
                  </td>
                </tr>
              ) : (
                bookings.map(booking => (
                  <tr key={booking.id}>
                    <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{booking.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{booking.phone}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{booking.brand}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{booking.model}</div>
                    </td>
                    <td style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {booking.issue || 'No details provided'}
                    </td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{booking.date}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{booking.time.split(' ')[0]}</div>
                    </td>
                    <td>
                      <span className={`badge ${getBadgeClass(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td>
                      <select 
                        value={booking.status} 
                        onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                        style={{ padding: '0.25rem', borderRadius: '4px', border: '1px solid var(--border-light)', marginRight: '0.5rem' }}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Diagnosing">Diagnosing</option>
                        <option value="Repaired">Repaired</option>
                        <option value="Completed">Completed</option>
                      </select>
                      <button 
                        onClick={() => handleDelete(booking.id)}
                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600 }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
