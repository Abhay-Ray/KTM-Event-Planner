import React, { useState } from 'react';
import { X, Mail, Lock, User, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function AuthModal({ isOpen, initialMode = 'login', onClose, showToast }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('host');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      showToast(`Welcome back, ${email.split('@')[0] || 'Planner'}! Accessing your event workspace...`);
    } else {
      showToast(`Account created successfully! Welcome to KTM Event Planner, ${name || 'Host'}.`);
    }
    onClose();
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
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '460px',
          padding: '2.25rem',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0,0,0,0.8)',
          animation: 'fadeIn 0.3s ease forwards',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: '#a1a1aa',
            cursor: 'pointer',
            padding: '0.4rem',
            borderRadius: '50%',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.target.style.color = '#a1a1aa')}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #d4af37 0%, #a8841a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.75rem auto',
            }}
          >
            <Sparkles size={22} color="#111113" />
          </div>
          <h3 className="font-serif" style={{ fontSize: '1.6rem', color: '#ffffff', fontWeight: 600 }}>
            {mode === 'login' ? 'Welcome Back' : 'Create Free Account'}
          </h3>
          <p style={{ fontSize: '0.86rem', color: '#9da4b0', marginTop: '0.3rem' }}>
            {mode === 'login'
              ? 'Log in to manage your active events & guest lists'
              : 'Join 10,000+ planners organizing beautiful celebrations'}
          </p>
        </div>

        {/* Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#111113',
            padding: '0.3rem',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <button
            onClick={() => setMode('login')}
            style={{
              flex: 1,
              padding: '0.55rem',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: mode === 'login' ? '#d4af37' : 'transparent',
              color: mode === 'login' ? '#111113' : '#9da4b0',
              fontWeight: mode === 'login' ? 700 : 500,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Log In
          </button>
          <button
            onClick={() => setMode('register')}
            style={{
              flex: 1,
              padding: '0.55rem',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: mode === 'register' ? '#d4af37' : 'transparent',
              color: mode === 'register' ? '#111113' : '#9da4b0',
              fontWeight: mode === 'register' ? 700 : 500,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <User size={16} color="#71717a" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Karki"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    backgroundColor: '#111113',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#ffffff',
                    padding: '0.7rem 0.75rem 0.7rem 2.5rem',
                    borderRadius: '6px',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#71717a" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                required
                placeholder="planner@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#111113',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  padding: '0.7rem 0.75rem 0.7rem 2.5rem',
                  borderRadius: '6px',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#71717a" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#111113',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  padding: '0.7rem 0.75rem 0.7rem 2.5rem',
                  borderRadius: '6px',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', color: '#d1d5db', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                Account Purpose
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#111113',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#ffffff',
                  padding: '0.7rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              >
                <option value="host">Event Host (Personal Celebration)</option>
                <option value="planner">Professional Event Planner</option>
                <option value="vendor">Vendor / Caterer / Venue Owner</option>
              </select>
            </div>
          )}

          <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.75rem' }}>
            {mode === 'login' ? 'Log In to Workspace' : 'Create Free Workspace'} <ArrowRight size={16} />
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#71717a', marginTop: '1.25rem' }}>
          Protected by 256-bit SSL SaaS Security Encryption.
        </p>
      </div>
    </div>
  );
}
