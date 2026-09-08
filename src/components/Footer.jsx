import React, { useState } from "react";
import { Sparkles, Send, Heart, ArrowUp } from "lucide-react";
import logoUrl from "../assets/logo2.svg";

export default function Footer({ showToast }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      showToast("✨ Thank you for subscribing to KTM Event Planner updates!");
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#0c0c0e",
        color: "#9da4b0",
        paddingTop: "5rem",
        paddingBottom: "2.5rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
      }}
    >
      <div className="container footer-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "3rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          }}
          className="footer-grid"
        >
          {/* Brand Col */}
          <div style={{ gridColumn: "span 4" }} className="footer-col-main">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1rem",
              }}
            >
              <img
                src={logoUrl}
                alt="KTM Event Planner logo"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <span
                className="font-serif"
                style={{
                  fontSize: "1.3rem",
                  color: "#ffffff",
                  fontWeight: 700,
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
            </div>

            <p
              style={{
                fontSize: "0.9rem",
                color: "#9da4b0",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                maxWidth: "320px",
              }}
            >
              Plan beautifully. Celebrate effortlessly. The modern SaaS standard
              for weddings, corporate summits, and luxury celebrations.
            </p>

            <div style={{ fontSize: "0.85rem", color: "#71717a" }}>
              Durbar Marg, Level 4, Kathmandu, Nepal
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ gridColumn: "span 2" }} className="footer-col">
            <h4
              style={{
                color: "#ffffff",
                fontSize: "0.95rem",
                fontWeight: 600,
                marginBottom: "1.2rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.88rem",
              }}
            >
              <li>
                <a
                  href="#home"
                  style={{ color: "#9da4b0", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{ color: "#9da4b0", textDecoration: "none" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  style={{ color: "#9da4b0", textDecoration: "none" }}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ktmeventplanner/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#9da4b0",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {/* <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-label="Instagram"
                    style={{ display: "block" }}
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg> */}
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div style={{ gridColumn: "span 2" }} className="footer-col">
            <h4
              style={{
                color: "#ffffff",
                fontSize: "0.95rem",
                fontWeight: 600,
                marginBottom: "1.2rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Services
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.88rem",
              }}
            >
              <li>
                <a
                  href="#services"
                  style={{ color: "#9da4b0", textDecoration: "none" }}
                >
                  Luxury Weddings
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  style={{ color: "#9da4b0", textDecoration: "none" }}
                >
                  Corporate Summits
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  style={{ color: "#9da4b0", textDecoration: "none" }}
                >
                  Milestone Birthdays
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  style={{ color: "#9da4b0", textDecoration: "none" }}
                >
                  Award Galas
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  style={{ color: "#9da4b0", textDecoration: "none" }}
                >
                  Destination Resorts
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div style={{ gridColumn: "span 4" }} className="footer-col-news">
            <h4
              style={{
                color: "#ffffff",
                fontSize: "0.95rem",
                fontWeight: 600,
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Event Trends Journal
            </h4>
            <p
              style={{
                fontSize: "0.86rem",
                color: "#9da4b0",
                marginBottom: "1rem",
              }}
            >
              Subscribe to get luxury venue reviews, seasonal decor guides, and
              SaaS event tips.
            </p>

            <form
              onSubmit={handleSubscribe}
              style={{ display: "flex", gap: "0.5rem" }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  backgroundColor: "#18181c",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#ffffff",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "6px",
                  fontSize: "0.86rem",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#d4af37",
                  border: "none",
                  color: "#111113",
                  padding: "0.65rem 1rem",
                  borderRadius: "6px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div
          style={{
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.82rem",
          }}
        >
          <p style={{ margin: 0 }}>
            © 2026 <strong>KTM Event Planner</strong>. All rights reserved. Plan
            beautifully. Celebrate effortlessly.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a
              href="#home"
              style={{ color: "#71717a", textDecoration: "none" }}
            >
              Privacy Policy
            </a>
            <a
              href="#home"
              style={{ color: "#71717a", textDecoration: "none" }}
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: "#18181c",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#d4af37",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* Footer container - wider and closer to edges */
        .footer-container {
          max-width: 95% !important;
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }

        @media (max-width: 1024px) {
          .footer-container {
            max-width: 100% !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-col-main, .footer-col, .footer-col-news {
            grid-column: span 1 !important;
          }
          .footer-container {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
