// Hero.jsx - WITH PLAN YOUR EVENT BUTTON
import React, { useEffect, useRef, useState } from 'react';
import { Star, Sparkles, MessageCircle, Calendar } from 'lucide-react';

export default function Hero({ onOpenAuth, onOpenBooking }) {
  const sectionRef = useRef(null);
  const ratingInnerRef = useRef(null);
  const frameRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Original images
  const heroImages = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
  ];

  const extendedImages = [...heroImages, heroImages[0]];
  const totalSlides = extendedImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === totalSlides - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 1200);
    }
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const applyTransform = (el, x, y, strength) => {
      if (el) el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseMove = (e) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        applyTransform(ratingInnerRef.current, x, y, 8);
      });
    };

    const handleMouseLeave = () => {
      applyTransform(ratingInnerRef.current, 0, 0, 0);
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // WhatsApp handler
  const handleWhatsApp = () => {
    const phoneNumber = '9779801234567';
    const message = 'Hello! I\'d like to plan an event with KTM Event Planner.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="home" ref={sectionRef} className="khero">
      <div className="khero-media">
        <div className="khero-slider-wrapper">
          {extendedImages.map((img, index) => {
            const offset = index - currentIndex;
            return (
              <div
                key={`slide-${index}`}
                className="khero-slide"
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: `translateX(${offset * 100}%)`,
                  transition: isTransitioning
                    ? 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    : 'none',
                  willChange: 'transform',
                  zIndex: offset === 0 ? 1 : 0,
                }}
              >
                <img
                  src={img}
                  alt={`Luxury event venue ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="khero-scrim" />
      </div>

      <div className="khero-content">
        <div className="khero-badge">
          <Sparkles size={14} color="#d4af37" />
          <span>Be a Guest at Your Own Event</span>
        </div>

        <h1 className="khero-headline" style={{ fontFamily: "'Playfair Display', serif" }}>
          <div className="khero-line">Plan <span className="khero-word-accent">beautifully.</span></div>
          <div className="khero-line">Celebrate <span className="khero-word-strong">effortlessly.</span></div>
        </h1>

        <p className="khero-desc">
          Kathmandu's premier event planning company. We create meaningful and memorable weddings, corporate galas, and celebrations with care, creativity, and precision.
        </p>

        {/* CTA Button - Plan Your Event */}
        <div className="khero-cta">
          <button className="khero-btn-primary" onClick={onOpenBooking}>
            <Calendar size={18} /> Plan Your Event
          </button>
        </div>
      </div>

      <button
        onClick={handleWhatsApp}
        className="khero-whatsapp"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          border: 'none',
          color: '#ffffff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease',
          animation: 'whatsappPulse 2s ease-in-out infinite',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 6px 30px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
        }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={30} />
      </button>

      <button className="khero-scroll-cue" onClick={scrollToNext} aria-label="Scroll to explore">
        <span className="khero-scroll-line" />
      </button>

      <style>{`
        @keyframes whatsappPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .khero {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          overflow: hidden;
          background-color: #0b0b0d;
        }

        .khero-media {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .khero-slider-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .khero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          will-change: transform;
        }

        .khero-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .khero-scrim {
          position: absolute;
          inset: 0;
          z-index: 2;
          background:
            linear-gradient(to top, rgba(9,9,11,1) 0%, rgba(9,9,11,0.8) 30%, rgba(9,9,11,0.5) 55%, rgba(9,9,11,0.4) 100%),
            linear-gradient(to right, rgba(9,9,11,0.5) 0%, transparent 45%);
            // linear-gradient(to bottom, rgba(11, 11, 13, 0.8) 0%, transparent 25%),
            // linear-gradient(to top, rgba(11, 11, 13, 0.98) 0%, rgba(11, 11, 13, 0.8) 35%, rgba(11, 11, 13, 0.35) 65%, rgba(11, 11, 13, 0.6) 100%),
            // linear-gradient(to right, rgba(11, 11, 13, 0.85) 0%, rgba(11, 11, 13, 0.5) 45%, transparent 75%),
            // radial-gradient(circle at 10% 40%, rgba(212, 175, 55, 0.06) 0%, transparent 50%);
            }

        .khero-content {
          position: relative;
          z-index: 3;
          min-height: 80vh;
          min-height: 80svh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1rem clamp(1.5rem, 6vw, 5rem) clamp(4rem, 8vw, 6rem);
          max-width: 900px;
          
          margin-top:3.9%;
        }

        @keyframes kheroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .khero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.7rem;
          border-radius: 50px;
          background-color: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.28);
          font-size: 0.8rem;
          color: #d4af37;
          letter-spacing: 0.04em;
          width: fit-content;
          margin-bottom: 0.6rem;
          animation: kheroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
          white-space: nowrap;
        }

        .khero-headline {
          font-size: clamp(3.5rem, 8vw, 6rem);
          line-height: 1.2;
          font-weight: 400;
          color: #f8f9fa;
          letter-spacing: -0.01em;
          margin-bottom: 1.5rem;
          text-shadow: 0 4px 30px rgba(0,0,0,0.35);
          animation: kheroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
        }

        .khero-line {
          display: block;
          white-space: nowrap;
        }

        .khero-word-accent { 
          color: #d4af37; 
          font-style: italic; 
          font-weight: 500; 
        }
        .khero-word-strong { 
          color: #ffffff; 
          font-weight: 600; 
        }

        .khero-desc {
          font-size: clamp(1rem, 1.6vw, 1.18rem);
          color: #d1d5db;
          max-width: 560px;
          line-height: 1.65;
          animation: kheroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.75s both;
          margin-bottom: 2rem;
        }

        /* CTA Button */
        .khero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          animation: kheroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1s both;
        }

        .khero-btn-primary {
          background-color: #d4af37;
          color: #111113;
          padding: 0.85rem 2.5rem;
          border-radius: 4px;
          border: none;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        }

        .khero-btn-primary:hover {
          background-color: #e5c158;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.4);
        }

        .khero-scroll-cue {
          position: absolute;
          left: 50%;
          bottom: 1.75rem;
          transform: translateX(-50%);
          z-index: 3;
          width: 26px;
          height: 42px;
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 14px;
          background: transparent;
          cursor: pointer;
          padding: 0;
          animation: kheroCueFade 0.8s ease 1.6s both;
        }
        @keyframes kheroCueFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .khero-scroll-cue:hover { border-color: rgba(212, 175, 55, 0.75); }
        .khero-scroll-line {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 8px;
          border-radius: 2px;
          background-color: #d4af37;
          animation: kheroScrollBounce 1.8s ease-in-out infinite;
        }
        @keyframes kheroScrollBounce {
          0%, 100% { transform: translate(-50%, 0); opacity: 1; }
          50% { transform: translate(-50%, 12px); opacity: 0.4; }
        }

        @media (max-width: 700px) {
          .khero-content { 
            min-height: 70vh;
            min-height: 70svh;
            padding: 1rem 1.25rem 9rem; 
          }
          .khero-headline { 
            font-size: clamp(2.1rem, 9.5vw, 2.9rem);
          }
          .khero-badge {
            font-size: 0.7rem;
            padding: 0.2rem 0.6rem;
            white-space: nowrap;
          }
          .khero-cta {
            flex-direction: column;
            width: 100%;
          }
          .khero-btn-primary {
            width: 100%;
            justify-content: center;
          }
          .khero-scroll-cue { display: none; }
          .khero-whatsapp {
            width: 50px !important;
            height: 50px !important;
            bottom: 1.5rem !important;
            right: 1.5rem !important;
          }
          .khero-whatsapp svg {
            width: 24px !important;
            height: 24px !important;
          }
        }

        @media (max-width: 480px) {
          .khero-headline {
            font-size: clamp(1.8rem, 8vw, 2.2rem);
          }
          .khero-line {
            white-space: normal;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .khero-slide,
          .khero-headline,
          .khero-badge,
          .khero-desc,
          .khero-cta,
          .khero-scroll-cue,
          .khero-scroll-line {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
          .khero-whatsapp {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}