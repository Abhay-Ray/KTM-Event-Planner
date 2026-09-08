// Navbar.jsx - WITH MODERN ANIMATED HAMBURGER MENU (Original Icons)
import React, { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import logo from "../assets/logo2.svg";

export default function Navbar({ onOpenBooking, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`knav ${isScrolled ? "knav-scrolled" : ""} ${mounted ? "knav-mounted" : ""}`}
    >
      <div className="container knav-container">
        <div className="knav-row">
          {/* Brand Logo */}
          <a href="#home" className="knav-brand">
            <img
              src={logo}
              alt="KTM Event Planner Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                objectFit: "cover",
                boxShadow: "0 4px 14px rgba(212, 175, 55, 0.3)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                className="font-serif"
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  lineHeight: 1.1,
                  color: "#ffffff",
                }}
              >
                KTM{" "}
                <span
                  style={{
                    color: "#d4af37",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  Event Planner
                </span>
              </span>
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "#9da4b0",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Kathmandu
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - centered */}
          <nav className="desktop-nav knav-center">
            {navLinks.map((link) => {
              const slug = link.name.toLowerCase().replace(" ", "-");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`knav-link ${activeSection === slug ? "is-active" : ""}`}
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

          {/* Mobile Hamburger Icon - Original */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`mobile-toggle knav-toggle ${mobileMenuOpen ? "is-active" : ""}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={26} className="hamburger-icon" />
            ) : (
              <Menu size={26} className="hamburger-icon" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - Full Height */}
      {mobileMenuOpen && (
        <div className="knav-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="knav-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="knav-drawer-content">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="knav-drawer-link"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.name}
                </a>
              ))}
              <div className="knav-drawer-actions">
                <button
                  className="btn-primary knav-drawer-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                >
                  <Calendar size={18} /> Book Now
                </button>
              </div>
            </div>
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

        /* ============================================
           HAMBURGER TOGGLE - ORIGINAL ICONS
           ============================================ */
        .knav-toggle {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 0.4rem;
          display: none;
          z-index: 1001;
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .knav-toggle:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .knav-toggle .hamburger-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .knav-toggle.is-active .hamburger-icon {
          transform: rotate(90deg);
          color: #d4af37;
        }

        /* ============================================
           MOBILE DRAWER - FULL HEIGHT
           ============================================ */
        .knav-drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .knav-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 85%;
          max-width: 400px;
          height: 100vh;
          height: 100dvh;
          background: linear-gradient(165deg, #1a1a1e 0%, #0b0b0d 100%);
          border-left: 1px solid rgba(255, 255, 255, 0.06);
          padding: 5rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.6);
        }

        .knav-drawer-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
          justify-content: center;
          padding: 0;
        }

        .knav-drawer-link {
          color: #e5e7eb;
          font-size: 1.6rem;
          font-weight: 500;
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: block;
          letter-spacing: 0.02em;
          opacity: 0;
          animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          position: relative;
        }

        .knav-drawer-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) scaleX(0);
          width: 3px;
          height: 24px;
          background: #d4af37;
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: left;
        }

        .knav-drawer-link:hover {
          color: #d4af37;
          padding-left: 1.5rem;
          background: rgba(212, 175, 55, 0.05);
        }

        .knav-drawer-link:hover::before {
          transform: translateY(-50%) scaleX(1);
        }

        .knav-drawer-link:active {
          color: #d4af37;
          transform: scale(0.98);
        }

        .knav-drawer-actions {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          opacity: 0;
          animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
        }

        .knav-drawer-btn {
          width: 100%;
          justify-content: center;
          padding: 0.9rem 1.5rem;
          font-size: 1rem;
          border-radius: 10px;
          background: linear-gradient(135deg, #d4af37 0%, #e5c158 100%);
          color: #111113;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        }

        .knav-drawer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.4);
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
            display: flex !important;
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
          .knav-drawer {
            width: 90%;
            padding: 4.5rem 1.5rem 1.5rem;
          }
          .knav-drawer-link {
            font-size: 1.3rem;
            padding: 0.6rem 0.8rem;
          }
        }

        @media (max-width: 380px) {
          .knav-drawer {
            width: 95%;
            padding: 4rem 1.25rem 1.25rem;
          }
          .knav-drawer-link {
            font-size: 1.1rem;
            padding: 0.5rem 0.6rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .knav {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .knav-drawer-overlay {
            animation: none !important;
          }
          .knav-drawer {
            animation: none !important;
          }
          .knav-drawer-link {
            animation: none !important;
            opacity: 1 !important;
          }
          .knav-drawer-actions {
            animation: none !important;
            opacity: 1 !important;
          }
          .knav-toggle .hamburger-icon {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}