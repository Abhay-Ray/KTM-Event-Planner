import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    guests: '150',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('✨ Thank you! Our senior event concierge will contact you within 2 hours.');
  };

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 0',
        backgroundColor: '#16161a',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container contact-container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              fontSize: '0.85rem',
              color: '#d4af37',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 600,
            }}
          >
            Get In Touch
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#ffffff', fontWeight: 400, marginTop: '0.4rem' }}>
            Let's plan something <span style={{ color: '#d4af37', fontStyle: 'italic' }}>extraordinary together.</span>
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '1.05rem', marginTop: '0.5rem' }}>
            Schedule a private consultation or send us your event outline for a custom proposal.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '0',
            backgroundColor: '#111113',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
          }}
          className="contact-container-card"
        >
          {/* Contact Details - Left */}
          <div 
            style={{ 
              gridColumn: 'span 6',
              backgroundColor: '#18181c',
              padding: '2.5rem',
            }} 
            className="contact-info"
          >
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 600, marginBottom: '1.25rem' }}>
              Kathmandu Headquarters
            </h3>
            <p style={{ color: '#a1a1aa', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '90%' }}>
              Our senior event architects are available for in-person venue walk-throughs, tasting sessions, and digital planning meetings.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} color="#d4af37" />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 600 }}>Main Office Location</h4>
                  <p style={{ color: '#9da4b0', fontSize: '0.88rem' }}>Durbar Marg, Level 4, KTM Tower, Kathmandu, Nepal</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} color="#d4af37" />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 600 }}>Direct Line & Hotline</h4>
                  <p style={{ color: '#9da4b0', fontSize: '0.88rem' }}>+977 (1) 425-9988 / +977 98012-34567</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} color="#d4af37" />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 600 }}>Email Concierge</h4>
                  <p style={{ color: '#9da4b0', fontSize: '0.88rem' }}>hello@ktmeventplanner.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={20} color="#d4af37" />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: 600 }}>Office Hours</h4>
                  <p style={{ color: '#9da4b0', fontSize: '0.88rem' }}>Sun – Fri: 9:00 AM – 7:00 PM NPT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Right */}
          <div 
            style={{ 
              gridColumn: 'span 6',
              backgroundColor: '#111113',
              padding: '2.5rem',
            }} 
            className="contact-form-col"
          >
            {submitted ? (
              <div
                style={{
                  backgroundColor: '#18181c',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '12px',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <CheckCircle2 size={32} color="#10b981" />
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  Consultation Request Received!
                </h3>
                <p style={{ color: '#9da4b0', maxWidth: '420px', fontSize: '0.95rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Our senior event architect will reach out to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '2rem',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#ffffff',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anjali Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#18181c',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#ffffff',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="anjali@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#18181c',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#ffffff',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+977 98..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#18181c',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#ffffff',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#18181c',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#ffffff',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    >
                      <option value="Wedding">Wedding / Marriage</option>
                      <option value="Corporate">Corporate Conference</option>
                      <option value="Birthday">Birthday / Anniversary</option>
                      <option value="Gala">Gala / Award Ceremony</option>
                      <option value="Private">Private Soirée</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
                      Approx. Guests
                    </label>
                    <input
                      type="number"
                      placeholder="150"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      style={{
                        width: '100%',
                        backgroundColor: '#18181c',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: '#ffffff',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: 500 }}>
                    Event Vision & Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your preferred venue style, budget goals, or specific themes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#18181c',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: '#ffffff',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button className="btn-gold" type="submit" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}>
                  Submit Consultation Request <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        /* Contact container - wider and closer to edges */
        .contact-container {
          max-width: 95% !important;
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }

        /* Main contact card fills the wider container */
        .contact-container-card {
          width: 100% !important;
          max-width: 100% !important;
        }

        @media (max-width: 1024px) {
          .contact-container {
            max-width: 100% !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
        }

        @media (max-width: 900px) {
          .contact-container {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          .contact-container-card {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .contact-info, .contact-form-col {
            grid-column: span 1 !important;
          }
          .contact-info {
            margin-bottom: 0;
          }
          .contact-info p {
            max-width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .contact-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .contact-info, .contact-form-col {
            padding: 1.5rem !important;
          }
          .contact-container-card form > div:first-child,
          .contact-container-card form > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}