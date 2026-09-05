import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, showToast }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00 AM');
  const [eventType, setEventType] = useState('Wedding');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);
    showToast(`🎉 Appointment booked for ${date || 'selected date'} at ${time}! We look forward to meeting you.`);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(11, 11, 13, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        style={{
          backgroundColor: '#18181c',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '480px',
          padding: '2.25rem',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
        }}
      >
        <button
          onClick={() => {
            setBooked(false);
            onClose();
          }}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: '#a1a1aa',
            cursor: 'pointer',
            padding: '0.4rem',
          }}
        >
          <X size={20} />
        </button>

        {booked ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                border: '1px solid rgba(212, 175, 55, 0.4)',
              }}
            >
              <Sparkles size={32} color="#d4af37" />
            </div>
            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#ffffff' }}>
              Consultation Confirmed!
            </h3>
            <p style={{ color: '#9da4b0', fontSize: '0.92rem', margin: '0.75rem 0 1.5rem 0' }}>
              We have reserved <strong>{time}</strong> on <strong>{date || 'your chosen date'}</strong> for your <strong>{eventType}</strong> walkthrough.
            </p>
            <button
              className="btn-gold"
              onClick={() => {
                setBooked(false);
                onClose();
              }}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.78rem', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                VIP Private Consultation
              </span>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#ffffff', marginTop: '0.2rem' }}>
                Book Your Event Walkthrough
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#9da4b0' }}>
                Meet our senior event architects at Durbar Marg HQ or via video call.
              </p>
            </div>

            <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Suman Shrestha"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#111113',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    padding: '0.7rem',
                    borderRadius: '6px',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+977 98..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#111113',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    padding: '0.7rem',
                    borderRadius: '6px',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: '#111113',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: '#ffffff',
                      padding: '0.7rem',
                      borderRadius: '6px',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    style={{
                      width: '100%',
                      backgroundColor: '#111113',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: '#ffffff',
                      padding: '0.7rem',
                      borderRadius: '6px',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                  Occasion Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#111113',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    padding: '0.7rem',
                    borderRadius: '6px',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                >
                  <option value="Wedding">Wedding / Reception</option>
                  <option value="Corporate">Corporate Conference</option>
                  <option value="Birthday">Birthday / Anniversary</option>
                  <option value="Gala">Gala Dinner</option>
                </select>
              </div>

              <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.75rem' }}>
                Confirm Booking Appointment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
