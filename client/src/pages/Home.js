import React from 'react';

function Home({ onNavigate }) {
  return (
    <>
      <div className="hero">
        <div className="hero-badge">🌿 At-home yoga sessions · Ghaziabad & Noida</div>
        <h1>Yoga that <em>comes to you</em>, not the other way around.</h1>
        <p>Expert-led personalised sessions at your home. No commute, no crowd — just you, your trainer, and your practice.</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => onNavigate('booking')}>
            Book a free trial
          </button>
          <button className="btn-secondary" onClick={() => onNavigate('services')}>
            Explore services
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">500+</div>
            <div className="stat-lbl">Happy students</div>
          </div>
          <div className="stat">
            <div className="stat-num">4</div>
            <div className="stat-lbl">Expert trainers</div>
          </div>
          <div className="stat">
            <div className="stat-num">6</div>
            <div className="stat-lbl">Specialisations</div>
          </div>
          <div className="stat">
            <div className="stat-num">4.9★</div>
            <div className="stat-lbl">Average rating</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="eyebrow">How it works</div>
          <h2>From curious to committed in 3 steps</h2>
        </div>
        <div className="how-grid">
          <div className="how-step">
            <div className="how-num">1</div>
            <h3>Choose your session</h3>
            <p>Pick from 6 specialisations — from morning flow to prenatal to corporate wellness.</p>
          </div>
          <div className="how-step">
            <div className="how-num">2</div>
            <h3>Select a trainer</h3>
            <p>Browse profiles, ratings, and specialities. Find the right fit for your goals.</p>
          </div>
          <div className="how-step">
            <div className="how-num">3</div>
            <h3>We come to you</h3>
            <p>Fill in your address and preferred time. Your trainer arrives — mat, plan, and energy included.</p>
          </div>
        </div>
      </div>

      <div style={{ background: '#EAF3DE', padding: '56px 2rem', textAlign: 'center' }}>
        <div className="eyebrow">Start today</div>
        <h2 style={{ fontSize: '28px', fontWeight: '700', margin: '12px 0 10px' }}>First session is on us</h2>
        <p style={{ color: '#555', fontSize: '16px', marginBottom: '28px' }}>
          No commitment. No catch. Book a free trial and experience the difference.
        </p>
        <button className="btn-primary" onClick={() => onNavigate('booking')} style={{ fontSize: '16px', padding: '14px 36px' }}>
          Book your free trial →
        </button>
      </div>
    </>
  );
}

export default Home;
