import React from 'react';

function Navigation({ currentPage, onNavigate }) {
  const pages = ['home', 'services', 'trainers', 'booking'];
  const labels = { home: 'Home', services: 'Services', trainers: 'Trainers', booking: 'Book Now' };

  return (
    <nav className="nav">
      <div className="nav-logo">
        Pure<span>Yoga</span>
      </div>
      <div className="nav-links">
        {pages.map(page => (
          <button
            key={page}
            className={`nav-link ${currentPage === page ? 'active' : ''}`}
            onClick={() => onNavigate(page)}
          >
            {labels[page]}
          </button>
        ))}
        <button 
          className="nav-admin" 
          onClick={() => onNavigate('admin')}
        >
          Admin ↗
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
