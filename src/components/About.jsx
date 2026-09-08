import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [counters, setCounters] = useState({
    events: 0,
    experience: 0,
    satisfaction: 0,
    venues: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { 
      key: 'events',
      label: 'Events Organized', 
      value: '1000+',
      target: 1000,
      suffix: '+'
    },
    { 
      key: 'experience',
      label: 'Experience', 
      value: '5 years+',
      target: 5,
      suffix: ' years+'
    },
    { 
      key: 'satisfaction',
      label: 'Client Satisfaction', 
      value: '99.8%',
      target: 99.8,
      suffix: '%',
      isDecimal: true
    },
    { 
      key: 'venues',
      label: 'Partnered Venues', 
      value: '450+',
      target: 450,
      suffix: '+'
    },
  ];

  const pillars = [
    {
      icon: Award,
      title: 'Uncompromised Elegance',
      desc: 'Every detail, from typography to floral arrangements, is curated with timeless luxury aesthetics.',
    },
    {
      icon: ShieldCheck,
      title: 'Mathematical Precision',
      desc: 'Our real-time budget engine and minute-by-minute day-of timelines leave zero room for unexpected surprises.',
    },
    {
      icon: HeartHandshake,
      title: 'Seamless Hospitality',
      desc: 'We empower hosts to be present at their own celebrations rather than managing behind-the-scenes chaos.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3, triggerOnce: true }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500; // 2.5 seconds for smoother animation
    const startTime = Date.now();
    
    const targetValues = {
      events: 1000,
      experience: 5,
      satisfaction: 99.8,
      venues: 450
    };

    const startValues = {
      events: 0,
      experience: 0,
      satisfaction: 0,
      venues: 0
    };

    const animateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // EaseOutQuart function for smooth deceleration
      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
      const easedProgress = easeOutQuart(progress);

      const newCounters = {};
      Object.keys(targetValues).forEach((key) => {
        const target = targetValues[key];
        const start = startValues[key];
        const current = start + (target - start) * easedProgress;
        
        if (key === 'satisfaction') {
          newCounters[key] = Number(current.toFixed(1));
        } else {
          newCounters[key] = Math.round(current);
        }
      });
      
      setCounters(newCounters);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        // Ensure final values are exact
        setCounters({
          events: 1000,
          experience: 5,
          satisfaction: 99.8,
          venues: 450
        });
      }
    };

    requestAnimationFrame(animateCounter);

    return () => {
      // Cleanup if component unmounts
    };
  }, [isVisible]);

  const formatDisplayValue = (key, value) => {
    if (key === 'experience') return `${value} years+`;
    if (key === 'satisfaction') return `${value}%`;
    if (key === 'events' || key === 'venues') return `${value}+`;
    return value;
  };

  return (
    <section
      id="about"
      style={{
        padding: '6rem 0',
        backgroundColor: '#111113',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container about-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '5rem',
          }}
          className="about-hero-grid"
        >
          {/* Text content - Left */}
          <div style={{ gridColumn: 'span 7' }} className="about-left">
            <span
              style={{
                fontSize: '0.85rem',
                color: '#d4af37',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontWeight: 600,
              }}
            >
              Our Story & Philosophy
            </span>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                color: '#ffffff',
                fontWeight: 400,
                marginTop: '0.4rem',
                marginBottom: '1.25rem',
                lineHeight: 1.2,
              }}
            >
              Transforming event management
              <br />
              into an <span style={{ color: '#d4af37', fontStyle: 'italic' }}>effortless artform.</span>
            </h2>
            <div style={{ maxWidth: '85%' }}>
              <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Founded with the vision to bridge the gap between creative celebration and SaaS efficiency, <strong>KTM Event Planner</strong> provides event planners, couples, and corporate hosts with the definitive toolkit for extraordinary experiences.
              </p>
              <p style={{ color: '#a1a1aa', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Whether coordinating a grand wedding in Pokhara or an executive summit in Kathmandu, our intelligent platform keeps every guest list, invoice, and vendor synced seamlessly.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '85%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e5e7eb', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} color="#d4af37" />
                <span>Centralized Command Dashboard</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e5e7eb', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} color="#d4af37" />
                <span>Real-time Guest RSVP Sync</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e5e7eb', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} color="#d4af37" />
                <span>Transparent Vendor Budgeting</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e5e7eb', fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} color="#d4af37" />
                <span>24/7 Concierge Support</span>
              </div>
            </div>
          </div>

          {/* Photo Showcase - Right */}
          <div style={{ gridColumn: 'span 5', position: 'relative' }} className="about-right">
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
                alt="Luxury event banquet setup"
                style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Overlapping Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                backgroundColor: '#18181c',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '1.2rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(212, 175, 55, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={22} color="#d4af37" />
              </div>
              <div>
                <p style={{ fontSize: '0.78rem', color: '#9da4b0', textTransform: 'uppercase' }}>Crafted with passion</p>
                <p style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 600 }}>Kathmandu & Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          style={{
            backgroundColor: '#18181c',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          {stats.map((st, i) => (
            <div key={i}>
              <h3 
                className="font-serif" 
                style={{ 
                  fontSize: '2.8rem', 
                  color: '#d4af37', 
                  fontWeight: 700, 
                  lineHeight: 1,
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                }}
              >
                {formatDisplayValue(st.key, counters[st.key])}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#9da4b0', marginTop: '0.5rem', fontWeight: 500 }}>
                {st.label}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Pillars */}
        <div className="grid-3">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={26} color="#d4af37" />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.6rem' }}>
                  {pil.title}
                </h4>
                <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {pil.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* Wider container for About section */
        .about-container {
          max-width: 95% !important;
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }

        @media (max-width: 900px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .about-left, .about-right {
            grid-column: span 1 !important;
          }
          .about-container {
            max-width: 100% !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          .about-right img {
            height: 300px !important;
          }
          .about-left > div {
            max-width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .about-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .about-right img {
            height: 250px !important;
          }
          .about-left > div {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
} 