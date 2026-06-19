import React from 'react';

function Trainers({ trainers }) {
  return (
    <div className="section">
      <div className="section-header">
        <div className="eyebrow">Our trainers</div>
        <h2>Certified. Experienced. At your door.</h2>
        <p>Every trainer is background-verified, RYT-certified, and committed to your progress.</p>
      </div>
      <div className="trainers-grid">
        {trainers.map(trainer => (
          <div key={trainer._id} className="trainer-card">
            <div className="trainer-avatar">{trainer.emoji}</div>
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <div className="trainer-meta">{trainer.role} · {trainer.experience} exp</div>
              <div className="trainer-bio">{trainer.bio}</div>
              <div className="trainer-tags">
                {trainer.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="trainer-rating">
                  <span className="stars">★</span> {trainer.rating}
                  <span style={{ color: '#aaa', fontSize: '12px' }}> ({trainer.reviews})</span>
                </div>
                <span style={{ fontSize: '12px', color: '#888' }}>{trainer.availability}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trainers;
