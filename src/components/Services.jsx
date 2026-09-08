import React from 'react';
import { Sparkles, Users, MapPin, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  const events = [
    {
      id: 'wedding',
      category: 'wedding',
      title: 'Luxury Weddings & Marriages',
      subtitle: 'From grand traditional ceremonies to intimate modern vows',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      capacity: '50 - 1,200 Guests',
      venues: '5-Star Hotels, Heritage Palaces, Scenic Resorts',
      highlights: ['Custom Mandap & Stage Artistry', 'Multi-cuisine Banquet Management', 'Sangeet & Cocktail Production'],
    },
    {
      id: 'corporate',
      category: 'corporate',
      title: 'Corporate Conferences & Summits',
      subtitle: 'High-impact business conventions, AGMs & product debuts',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      capacity: '100 - 2,500 Delegates',
      venues: 'Convention Centers, Tech Auditoriums',
      highlights: ['Seamless AV & Live Broadcasting', 'Delegate Badge & Registration Portals', 'VIP Hospitality Suites'],
    },
    {
      id: 'birthday',
      category: 'birthday',
      title: 'Milestone Birthdays & Anniversaries',
      subtitle: 'Bespoke birthday bashes, 21st, 50th, and jubilees',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
      capacity: '30 - 300 Guests',
      venues: 'Private Rooftops, Boutique Lounges',
      highlights: ['Themed Lighting & Custom Cake Art', 'Live DJ & Acoustic Performers', 'Interactive Photo Booths'],
    },
    {
      id: 'gala',
      category: 'gala',
      title: 'Galas & Award Ceremonies',
      subtitle: 'Prestigious black-tie evenings, charity balls & galas',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      capacity: '150 - 800 Guests',
      venues: 'Luxury Ballrooms, Estate Lawns',
      highlights: ['Red Carpet Protocols', 'Stage Production & Pyro Light Shows', 'Silent Auction & RSVP Portals'],
    },
    {
      id: 'parties',
      category: 'parties',
      title: 'Cocktail Soirees & Private Parties',
      subtitle: 'Exclusive private gatherings & VIP celebrations',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      capacity: '20 - 150 Guests',
      venues: 'Private Villas, Garden Pavilions',
      highlights: ['Mixology Bar & Chef Tastings', 'Ambient String Quartets', 'Personalized Gift Favors'],
    },
    {
      id: 'destination',
      category: 'destination',
      title: 'Destination Celebrations',
      subtitle: 'Breathtaking mountain, lakefront & resort getaways',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      capacity: '50 - 500 Guests',
      venues: 'Pokhara Resorts, Nagarkot Hilltops, International Spots',
      highlights: ['Guest Travel & Accommodations Log', 'Welcome Kits & Local Experiences', 'End-to-end Onsite Crew'],
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: '6rem 0',
        backgroundColor: '#111113',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container services-container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span
            style={{
              fontSize: '0.85rem',
              color: '#d4af37',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 600,
            }}
          >
            Tailored Experiences
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#ffffff', fontWeight: 400, marginTop: '0.4rem' }}>
            Events crafted for every <span style={{ color: '#d4af37', fontStyle: 'italic' }}>extraordinary occasion.</span>
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '1.05rem', marginTop: '0.5rem' }}>
            Whether an intimate dinner or a 2,000-person summit, KTM Event Planner delivers precision and elegance.
          </p>
        </div>

        {/* Event Cards Grid - 3 columns with wider cards */}
        <div className="grid-3 services-grid">
          {events.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    backgroundColor: 'rgba(17, 17, 19, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    color: '#d4af37',
                    fontWeight: 600,
                  }}
                >
                  {item.capacity}
                </div>
              </div>

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.3rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#9da4b0', marginBottom: '1.25rem' }}>
                    {item.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {item.highlights.map((hl, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: '#d1d5db' }}>
                        <CheckCircle2 size={15} color="#d4af37" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', color: '#71717a' }}>{item.venues.split(',')[0]}</span>
                  <button
                    onClick={onOpenBooking}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#d4af37',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    Book Event <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Wider container for Services section */
        .services-container {
          max-width: 95% !important;
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }

        /* Keep 3 columns but make cards wider */
        .services-grid {
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 1.75rem !important;
        }

        /* Make cards take full width of their grid cells */
        .services-grid .glass-card {
          width: 100% !important;
          max-width: 100% !important;
        }

        @media (max-width: 1024px) {
          .services-container {
            max-width: 100% !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .services-container {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }

        @media (max-width: 560px) {
          .services-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}