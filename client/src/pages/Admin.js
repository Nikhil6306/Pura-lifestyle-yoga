import React, { useState } from 'react';
import axios from 'axios';

function Admin({ bookings, onRefresh, onNavigate }) {
  const [adminTab, setAdminTab] = useState('bookings');
  const [filterStatus, setFilterStatus] = useState('all');
  const [modal, setModal] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  const filteredBookings = filterStatus === 'all' 
    ? bookings 
    : bookings.filter(b => b.status === filterStatus);

  const counts = {
    all: bookings.length,
    new: bookings.filter(b => b.status === 'new').length,
    pending: bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length
  };

  const handleQuickConfirm = async (bookingId) => {
    try {
      await axios.put(`/api/bookings/${bookingId}`, { status: 'confirmed' });
      onRefresh();
    } catch (error) {
      alert('Error confirming booking');
    }
  };

  const handleUpdateClick = (booking) => {
    setSelectedBooking(booking);
    setNewStatus(booking.status);
    setModal(true);
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`/api/bookings/${selectedBooking._id}`, { status: newStatus });
      onRefresh();
      setModal(false);
    } catch (error) {
      alert('Error updating booking');
    }
  };

  const statusMap = {
    new: 'badge-new',
    confirmed: 'badge-confirmed',
    pending: 'badge-pending',
    cancelled: 'badge-cancelled'
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p style={{ color: '#888', fontSize: '14px', marginTop: '4px' }}>
            Pure Lifestyle Yoga · Manage bookings & leads
          </p>
        </div>
        <button 
          className="btn-secondary" 
          style={{ fontSize: '13px', padding: '8px 16px' }}
          onClick={() => onNavigate('home')}
        >
          ← Customer view
        </button>
      </div>

      <div className="metrics">
        <div className="metric-card">
          <div className="metric-label">Total bookings</div>
          <div className="metric-value">{bookings.length}</div>
          <div className="metric-delta">↑ 12% this week</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">New requests</div>
          <div className="metric-value" style={{ color: '#185FA5' }}>{counts.new}</div>
          <div className="metric-delta" style={{ color: '#185FA5' }}>Needs action</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Confirmed</div>
          <div className="metric-value" style={{ color: '#3B6D11' }}>{counts.confirmed}</div>
          <div className="metric-delta">Sessions scheduled</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Est. revenue</div>
          <div className="metric-value">₹18,500</div>
          <div className="metric-delta">↑ This month</div>
        </div>
      </div>

      <div className="admin-tabs">
        <button 
          className={`admin-tab ${adminTab === 'bookings' ? 'active' : ''}`}
          onClick={() => setAdminTab('bookings')}
        >
          Booking Requests
        </button>
        <button 
          className={`admin-tab ${adminTab === 'leads' ? 'active' : ''}`}
          onClick={() => setAdminTab('leads')}
        >
          Leads / Enquiries
        </button>
      </div>

      {adminTab === 'bookings' && (
        <div className="table-card">
          <div className="table-topbar">
            <div className="table-title">All booking requests</div>
            <div className="filter-row">
              {['all', 'new', 'pending', 'confirmed'].map(s => (
                <button 
                  key={s}
                  className={`filter-btn ${filterStatus === s ? 'active' : ''}`}
                  onClick={() => setFilterStatus(s)}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)} {s !== 'all' ? `(${counts[s]})` : ''}
                </button>
              ))}
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Trainer</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map(booking => (
                  <tr key={booking._id}>
                    <td style={{ fontWeight: '600', color: '#3B6D11' }}>{booking.bookingRef}</td>
                    <td>
                      <div style={{ fontWeight: '500' }}>{booking.name}</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>{booking.phone}</div>
                    </td>
                    <td>{booking.service}</td>
                    <td>{booking.trainer}</td>
                    <td>
                      <div>{new Date(booking.date).toLocaleDateString()}</div>
                      <div style={{ fontSize: '12px', color: '#888' }}>{booking.time}</div>
                    </td>
                    <td>
                      <span className={`badge ${statusMap[booking.status]}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td>
                      {booking.status === 'new' && (
                        <button 
                          className="action-btn confirm"
                          onClick={() => handleQuickConfirm(booking._id)}
                        >
                          ✓ Confirm
                        </button>
                      )}
                      <button 
                        className="action-btn"
                        onClick={() => handleUpdateClick(booking)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {modal && selectedBooking && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, padding: '20px' }}>
          <div className="modal-box">
            <h3>Update booking · {selectedBooking.bookingRef}</h3>
            <div style={{ background: '#f8fdf4', borderRadius: '10px', padding: '14px', marginBottom: '16px', fontSize: '13px' }}>
              <strong>{selectedBooking.name}</strong> · {selectedBooking.service}<br />
              <span style={{ color: '#777' }}>
                {new Date(selectedBooking.date).toLocaleDateString()} at {selectedBooking.time}
              </span><br />
              <span style={{ color: '#777' }}>{selectedBooking.address}</span>
            </div>
            <div className="modal-field">
              <label>Update status</label>
              <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                <option value="new">New</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="modal-actions">
              <button className="modal-cancel" onClick={() => setModal(false)}>Cancel</button>
              <button className="modal-save" onClick={handleSaveChanges}>Save changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
