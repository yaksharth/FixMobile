import React from 'react';
import { Outlet, NavLink, useNavigate, Navigate } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, IndianRupee, LogOut } from 'lucide-react';
import { isAuthenticated, logoutAdmin } from '../../data/db';
import './AdminLayout.css';

export default function AdminLayout() {
  const navigate = useNavigate();

  // Protect route
  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      {/* Sidebar Navigation */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>FIXMOBILE<span className="text-accent">.</span></h2>
          <span className="admin-badge">ADMIN PANEL</span>
        </div>

        <nav className="admin-nav">
          <NavLink to="/admin" end className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/admin/bookings" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}>
            <CalendarDays size={20} />
            <span>Bookings</span>
          </NavLink>
          <NavLink to="/admin/pricing" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}>
            <IndianRupee size={20} />
            <span>Pricing Engine</span>
          </NavLink>
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="admin-header-content">
            <h1>Admin Dashboard</h1>
            <div className="admin-user-info">
              <span className="status-dot"></span>
              Live Database Mode
            </div>
          </div>
        </header>
        
        <div className="admin-content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
