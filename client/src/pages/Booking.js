import React, { useState } from 'react';
import axios from 'axios';

function Booking({ services, trainers, onBookingCreated, onNavigate }) {
  const [step, setStep] = useState(1);
  const [bookingRef, setBookingRef] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    trainer: '',
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id.replace('f-', '')]: value }));
  };

  const handleNext = async () => {
    if (step === 1) {
      if (!form.name || !form.phone) {
        alert('Please enter your name and phone number.');
        return;
      }
    } else if (step === 2) {
      if (!form.service) {
        alert('Please select a service.');
        return;
      }
    } else if (step === 3) {
      if (!form.address || !form.date || !form.time) {
        alert('Please fill in your address, date, and preferred time.');
        return;
      }
    } else if (step === 4) {
      try {
        const response = await axios.post('/api/bookings', form);
        setBookingRef(response.data.bookingRef);
        onBookingCreated(response.data);
        setStep(5);
        return;
      } catch (error) {
        alert('Error creating booking: ' + error.response?.data?.error);
        return;
      }
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  if (step === 5) {
    return (
      <div className="section">
        <div className="booking-wrapper">
          <div className="booking-card">
            <div className="success-box">
              <div className="success-icon">🎉</div>
              <h2>Booking request sent!</h2>
              <p>Thank you, <strong>{form.name}</strong>. We've received your request and will confirm within 2 hours.</p>
              <div className="booking-ref">Reference: {bookingRef}</div>
              <p style={{ fontSize: '13px', color: '#999' }}>
                Check your WhatsApp/email for confirmation. Our team typically responds within 30 minutes.
              </p>
              <button 
                className="btn-primary" 
                style={{ marginTop: '24px' }}
                onClick={() => onNavigate('home')}
              >
                Back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const steps = ['Your details', 'Session info', 'Address & time', 'Confirm'];
  const stepDots = steps.map((s, i) => (
    <div key={i} className={`step ${i + 1 < step ? 'done' : i + 1 === step ? 'active' : ''}`}>
      {i < steps.length - 1 && <div className="step-line"></div>}
      <div className="step-dot">{i + 1 < step ? '✓' : i + 1}</div>
      <div className="step-label">{s}</div>
    </div>
  ));

  let stepContent = '';
  if (step === 1) {
    stepContent = (
      <>
        <div className="field">
          <label>Full name</label>
          <input 
            type="text" 
            id="f-name" 
            value={form.name}
            onChange={handleInputChange}
            placeholder="Your full name" 
          />
        </div>
        <div className="field">
          <label>Phone number</label>
          <input 
            type="tel" 
            id="f-phone" 
            value={form.phone}
            onChange={handleInputChange}
            placeholder="+91 XXXXX XXXXX" 
          />
        </div>
        <div className="field">
          <label>Email address</label>
          <input 
            type="email" 
            id="f-email" 
            value={form.email}
            onChange={handleInputChange}
            placeholder="you@email.com" 
          />
        </div>
      </>
    );
  } else if (step === 2) {
    stepContent = (
      <>
        <div className="field">
          <label>Service type</label>
          <select id="f-service" value={form.service} onChange={handleInputChange}>
            <option value="">Choose a service</option>
            {services.map(s => (
              <option key={s._id} value={s.name}>
                {s.name} — {s.price}/{s.per}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Preferred trainer</label>
          <select id="f-trainer" value={form.trainer} onChange={handleInputChange}>
            <option value="">Any available trainer</option>
            {trainers.map(t => (
              <option key={t._id} value={t.name}>
                {t.name} ({t.role})
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label>Special requirements or health notes</label>
          <textarea 
            id="f-notes" 
            value={form.notes}
            onChange={handleInputChange}
            placeholder="Any injuries, health conditions, or preferences we should know about..."
          ></textarea>
        </div>
      </>
    );
  } else if (step === 3) {
    stepContent = (
      <>
        <div className="field">
          <label>Home address</label>
          <input 
            type="text" 
            id="f-address" 
            value={form.address}
            onChange={handleInputChange}
            placeholder="Flat no., building, street, area" 
          />
        </div>
        <div className="field-row">
          <div className="field">
            <label>Preferred date</label>
            <input 
              type="date" 
              id="f-date" 
              value={form.date}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>Preferred time</label>
            <select id="f-time" value={form.time} onChange={handleInputChange}>
              <option value="">Choose time</option>
              {['05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '04:00 PM', '05:00 PM', '06:00 PM'].map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </>
    );
  } else if (step === 4) {
    stepContent = (
      <>
        <div style={{ background: '#f8fdf4', border: '0.5px solid #C0DD97', borderRadius: '12px', padding: '20px', marginBottom: '6px' }}>
          <div style={{ fontSize: '13px', color: '#555', marginBottom: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Booking summary
          </div>
          {[
            ['Name', form.name],
            ['Phone', form.phone],
            ['Email', form.email],
            ['Service', form.service || 'Not specified'],
            ['Trainer', form.trainer || 'Any available'],
            ['Date', form.date],
            ['Time', form.time],
            ['Address', form.address]
          ].map(([label, value], i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '0.5px solid #e8e5df', fontSize: '14px' }}>
              <span style={{ color: '#888' }}>{label}</span>
              <span style={{ color: '#1a1a1a', fontWeight: '500', textAlign: 'right', maxWidth: '60%' }}>
                {value || '—'}
              </span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '13px', color: '#888', marginTop: '12px' }}>
          By submitting, you agree to be contacted by our team to confirm your slot.
        </p>
      </>
    );
  }

  return (
    <div className="section">
      <div className="booking-wrapper">
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="eyebrow">Step {step} of 4</div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginTop: '8px' }}>
            {['', 'Your details', 'Session info', 'When & where', 'Review & submit'][step]}
          </h2>
        </div>
        <div className="booking-card">
          <div className="step-indicator">{stepDots}</div>
          <div id="step-content">{stepContent}</div>
          <div className="form-actions">
            {step > 1 && (
              <button className="btn-back" onClick={handleBack}>← Back</button>
            )}
            <button className="btn-next" onClick={handleNext}>
              {step === 4 ? '✓ Submit booking' : 'Continue →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
