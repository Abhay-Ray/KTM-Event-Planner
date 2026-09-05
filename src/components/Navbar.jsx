// Navbar.jsx - UPDATED WITH WIDER CONTAINER & INCREASED NAVLINK GAP
import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, User } from 'lucide-react';
import logo from '../assets/logo2.svg';

export default function Navbar({ onOpenAuth, onOpenBooking, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`knav ${isScrolled ? 'knav-scrolled' : ''} ${mounted ? 'knav-mounted' : ''}`}
    >
      <div className="container knav-container">
        <div className="knav-row">
          {/* Brand Logo */}
          <a href="#home" className="knav-brand">
            <img
              src={logo}
              alt="KTM Event Planner Logo"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                objectFit: 'cover',
                boxShadow: '0 4px 14px rgba(212, 175, 55, 0.3)',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="font-serif"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  lineHeight: 1.1,
                  color: '#ffffff',
                }}
              >
                KTM <span style={{ color: '#d4af37', fontWeight: 400, fontStyle: 'italic' }}>Event Planner</span>
              </span>
              <span style={{ fontSize: '0.65rem', color: '#9da4b0', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Kathmandu
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - centered */}
          <nav className="desktop-nav knav-center">
            {navLinks.map((link) => {
              const slug = link.name.toLowerCase().replace(' ', '-');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`knav-link ${activeSection === slug ? 'is-active' : ''}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Actions */}
          <div className="desktop-actions knav-actions">
            <button className="btn-primary" onClick={onOpenBooking}>
              <Calendar size={16} /> Book Now
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle knav-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="knav-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#e5e7eb',
                fontSize: '1.05rem',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              className="btn-primary"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={16} /> Book Now
            </button>
          </div>
        </div>
      )}

      <style>{`
        /* Navbar container - wider and closer to edges */
        .knav-container {
          max-width: 95% !important;
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }

        .knav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding 0.3s ease, opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          background-color: transparent;
          border-bottom: 1px solid transparent;
          padding: 1.5rem 0;
          opacity: 0;
          transform: translateY(-14px);
        }
        .knav-mounted { opacity: 1; transform: translateY(0); }
        .knav-scrolled {
          background-color: rgba(17, 17, 19, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1rem 0;
        }

        .knav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0;
        }

        .knav-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: #ffffff;
          flex: 0 0 auto;
          min-width: 180px;
        }

        .knav-center {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3.5rem;
        }

        .knav-actions {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          min-width: 130px;
        }

        .knav-link {
          position: relative;
          color: #e5e7eb;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          padding-bottom: 4px;
          text-shadow: 0 1px 10px rgba(0,0,0,0.45);
          transition: color 0.25s ease;
          white-space: nowrap;
          letter-spacing: 0.02em;
        }
        .knav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: #d4af37;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .knav-link:hover { color: #ffffff; }
        .knav-link:hover::after { width: 100%; }
        .knav-link.is-active { color: #d4af37; }
        .knav-link.is-active::after { width: 100%; }

        .knav-login {
          background: transparent;
          border: none;
          color: #f3f4f6;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0.4rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          transition: color 0.2s ease;
        }
        .knav-login:hover { color: #d4af37; }

        .btn-primary {
          background-color: #d4af37;
          color: #111113;
          font-weight: 600;
          padding: 0.55rem 1.4rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          white-space: nowrap;
          letter-spacing: 0.02em;
        }

        .btn-primary:hover {
          background-color: #e5c158;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
        }

        .knav-toggle {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 0.4rem;
          display: none;
        }

        .knav-drawer {
          background-color: #16161a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        /* Responsive - Large screens */
        @media (max-width: 1200px) {
          .knav-center {
            gap: 2.8rem;
          }
        }

        /* Responsive - Medium screens */
        @media (max-width: 1024px) {
          .knav-container {
            max-width: 100% !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .knav-center {
            gap: 2rem;
          }
          .knav-link {
            font-size: 0.88rem;
          }
          .btn-primary {
            padding: 0.45rem 1.1rem;
            font-size: 0.82rem;
          }
        }

        /* Responsive - Tablet */
        @media (max-width: 768px) {
          .knav-container {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          .knav-center {
            gap: 1.5rem;
          }
          .knav-link {
            font-size: 0.82rem;
          }
        }

        /* Responsive - Mobile */
        @media (max-width: 900px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .knav-toggle {
            display: block !important;
          }
        }

        @media (max-width: 480px) {
          .knav-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .knav-brand {
            min-width: auto;
          }
          .knav-brand span {
            font-size: 1.1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .knav {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </header>
  );
}