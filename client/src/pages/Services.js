import React from 'react';

function Services({ services, onNavigate }) {
  return (
    <div className="section">
      <div className="section-header">
        <div className="eyebrow">What we offer</div>
        <h2>Sessions designed around your life</h2>
        <p>Every service is delivered at your home, at your pace, on your schedule.</p>
      </div>
      <div className="services-grid">
        {services.map(service => (
          <div key={service._id} className={`service-card ${service.popular ? 'popular' : ''}`}>
            <div className="service-icon">{service.icon}</div>
            {service.popular && <div className="popular-badge">Most popular</div>}
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <span className="tag">⏱ {service.duration}</span>
              <span className="tag">🎯 {service.level}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="service-price">
                {service.price} <span>/{service.per}</span>
              </div>
              <button 
                className="btn-primary" 
                style={{ fontSize: '13px', padding: '7px 14px' }}
                onClick={() => onNavigate('booking')}
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
