import React, { useState, useEffect, useRef } from 'react';
import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  // Trigger the staggered reveal once the gallery scrolls into the viewport
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // All images - All with same height (removed 'span' property)
  const allImages = [
    {
      id: 1,
      category: 'wedding',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
      title: 'Heritage Palace Wedding',
    },
    {
      id: 2,
      category: 'corporate',
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
      title: 'Tech Summit Keynote Stage',
    },
    {
      id: 3,
      category: 'gala',
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
      title: 'Black-Tie Award Gala',
    },
    {
      id: 4,
      category: 'gala',
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
      title: 'Luxury Gala Dinner Setup',
    },
    {
      id: 5,
      category: 'birthday',
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80',
      title: '50th Jubilee Celebration',
    },
    {
      id: 6,
      category: 'destination',
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
      title: 'Beachside Destination Wedding',
    },
    {
      id: 7,
      category: 'destination',
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
      title: 'Nagarkot Hilltop Reception',
    },
    {
      id: 8,
      category: 'wedding',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
      title: 'Grand Archway Ceremony',
    },
    {
      id: 9,
      category: 'parties',
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
      title: 'Rooftop Cocktail Soirée',
    },
    {
      id: 10,
      category: 'wedding',
      src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80',
      title: 'Luxury Banquet Table Setting',
    },
    {
      id: 11,
      category: 'parties',
      src: 'https://images.unsplash.com/flagged/photo-1566755395267-86735b23d097?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Elegant Engagement Party',
    },
    {
      id: 12,
      category: 'wedding',
      src: 'https://plus.unsplash.com/premium_photo-1681841695231-d674aa32f65b?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Garden Wedding Ceremony',
    },
  ];

  // Get display images based on filter and showAll
  const getDisplayImages = () => {
    // First filter by category
    let filtered = allImages;
    if (filter !== 'all') {
      filtered = allImages.filter((img) => img.category === filter);
    }

    // Then apply showAll logic only for 'all' filter
    if (filter === 'all' && !showAll) {
      return filtered.slice(0, 8); // Show 8 images initially
    }

    return filtered; // Show all images when showAll is true
  };

  const displayImages = getDisplayImages();

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'gala', label: 'Galas' },
    { id: 'birthday', label: 'Birthdays' },
    { id: 'destination', label: 'Destination' },
    { id: 'parties', label: 'Parties' },
  ];

  const openLightbox = (idx) => {
    // Get the full filtered list for lightbox navigation
    const fullFiltered = filter === 'all' ? allImages : allImages.filter((img) => img.category === filter);
    const actualIndex = fullFiltered.findIndex(img => img.id === displayImages[idx].id);
    setLightboxIndex(actualIndex);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showNext = (e) => {
    e.stopPropagation();
    const fullFiltered = filter === 'all' ? allImages : allImages.filter((img) => img.category === filter);
    setLightboxIndex((prev) => (prev + 1) % fullFiltered.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    const fullFiltered = filter === 'all' ? allImages : allImages.filter((img) => img.category === filter);
    setLightboxIndex((prev) => (prev - 1 + fullFiltered.length) % fullFiltered.length);
  };

  // Get the current lightbox image
  const getLightboxImage = () => {
    const fullFiltered = filter === 'all' ? allImages : allImages.filter((img) => img.category === filter);
    return fullFiltered[lightboxIndex];
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  // Check if we should show the View All button
  const shouldShowViewAll = filter === 'all' && !showAll && allImages.length > 8;

  return (
    <section
      id="gallery"
      ref={sectionRef}
      style={{
        padding: '6rem 0',
        backgroundColor: '#16161a',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container gallery-container">
        <div
          className={`gallery-heading ${isInView ? 'gallery-heading-in' : ''}`}
          style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}
        >
          <span
            style={{
              fontSize: '0.85rem',
              color: '#d4af37',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 600,
            }}
          >
            Moments We've Crafted
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#ffffff', fontWeight: 400, marginTop: '0.4rem' }}>
            A glimpse into our <span style={{ color: '#d4af37', fontStyle: 'italic' }}>signature events.</span>
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '1.05rem', marginTop: '0.5rem' }}>
            Real celebrations, real details — browse a curated selection from our portfolio.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginTop: '2rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setFilter(cat.id);
                  setShowAll(false);
                }}
                className="gallery-filter-pill"
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '30px',
                  border: filter === cat.id ? '1px solid #d4af37' : '1px solid rgba(255,255,255,0.12)',
                  backgroundColor: filter === cat.id ? '#d4af37' : 'rgba(255,255,255,0.03)',
                  color: filter === cat.id ? '#111113' : '#d1d5db',
                  fontWeight: filter === cat.id ? 600 : 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Uniform Gallery Grid - All images same height */}
        <div className="gallery-grid-uniform">
          {displayImages.map((img, idx) => (
            <div
              key={`${filter}-${img.id}`}
              className={`gallery-item-uniform ${isInView ? 'gallery-item-in' : ''}`}
              onClick={() => openLightbox(idx)}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.08)',
                animationDelay: `${idx * 90}ms`,
                height: '280px',
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="gallery-item-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                className="gallery-item-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17,17,19,0.9) 0%, rgba(17,17,19,0.15) 45%, transparent 70%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.1rem',
                }}
              >
                <div
                  className="gallery-item-caption"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                  }}
                >
                  <p style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600, margin: 0 }}>
                    {img.title}
                  </p>
                  <div
                    className="gallery-item-icon"
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(212, 175, 55, 0.2)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Expand size={14} color="#d4af37" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less Buttons */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          {shouldShowViewAll && (
            <button
              onClick={handleViewAll}
              className="view-all-btn"
              style={{
                backgroundColor: 'transparent',
                color: '#d4af37',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                padding: '0.85rem 2.5rem',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                e.target.style.borderColor = '#d4af37';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              View All
            </button>
          )}

          {showAll && filter === 'all' && (
            <button
              onClick={handleShowLess}
              className="show-less-btn"
              style={{
                backgroundColor: 'transparent',
                color: '#d4af37',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                padding: '0.85rem 2.5rem',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                e.target.style.borderColor = '#d4af37';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && getLightboxImage() && (
        <div
          onClick={closeLightbox}
          className="gallery-lightbox-backdrop"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(11, 11, 13, 0.92)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 2500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
            }}
          >
            <X size={20} />
          </button>

          <button
            onClick={showPrev}
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '0.6rem',
              borderRadius: '50%',
              display: 'flex',
            }}
          >
            <ChevronLeft size={22} />
          </button>

          <div
            key={getLightboxImage().id}
            onClick={(e) => e.stopPropagation()}
            className="gallery-lightbox-content"
            style={{
              maxWidth: '900px',
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
            }}
          >
            <img
              src={getLightboxImage().src}
              alt={getLightboxImage().title}
              style={{ width: '100%', maxHeight: '75vh', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ padding: '1.25rem 1.5rem', backgroundColor: '#18181c' }}>
              <p style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 600, margin: 0 }}>
                {getLightboxImage().title}
              </p>
            </div>
          </div>

          <button
            onClick={showNext}
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '0.6rem',
              borderRadius: '50%',
              display: 'flex',
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}

      <style>{`
        /* Gallery container - wider and closer to edges */
        .gallery-container {
          max-width: 95% !important;
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }

        /* Uniform Grid - All images same height */
        .gallery-grid-uniform {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .gallery-item-uniform {
          opacity: 0;
          transform: translateY(28px) scale(0.97);
          transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          height: 280px;
        }

        .gallery-item-uniform.gallery-item-in {
          animation: galleryFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (max-width: 1024px) {
          .gallery-container {
            max-width: 100% !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .gallery-grid-uniform {
            grid-template-columns: repeat(3, 1fr);
          }
          .gallery-item-uniform {
            height: 250px;
          }
        }

        @media (max-width: 768px) {
          .gallery-container {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          .gallery-grid-uniform {
            grid-template-columns: repeat(2, 1fr);
          }
          .gallery-item-uniform {
            height: 220px;
          }
        }

        @media (max-width: 480px) {
          .gallery-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .gallery-grid-uniform {
            grid-template-columns: 1fr;
          }
          .gallery-item-uniform {
            height: 260px;
          }
        }

        /* Heading fade-up on scroll into view */
        .gallery-heading {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-heading-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Staggered card reveal */
        .gallery-item-in {
          animation: galleryFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes galleryFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Hover lift + zoom + caption reveal */
        .gallery-item-uniform:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          border-color: rgba(212, 175, 55, 0.4);
        }
        .gallery-item-img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
        }
        .gallery-item-uniform:hover .gallery-item-img {
          transform: scale(1.1);
        }
        .gallery-item-overlay {
          opacity: 0.75;
          transition: opacity 0.4s ease;
        }
        .gallery-item-uniform:hover .gallery-item-overlay {
          opacity: 1;
        }
        .gallery-item-caption {
          transform: translateY(6px);
          opacity: 0.85;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        }
        .gallery-item-uniform:hover .gallery-item-caption {
          transform: translateY(0);
          opacity: 1;
        }
        .gallery-item-icon {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease;
        }
        .gallery-item-uniform:hover .gallery-item-icon {
          transform: rotate(90deg);
          background-color: rgba(212, 175, 55, 0.35);
        }

        /* Lightbox animations */
        .gallery-lightbox-backdrop {
          animation: galleryBackdropIn 0.3s ease forwards;
        }
        @keyframes galleryBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .gallery-lightbox-content {
          animation: galleryContentIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes galleryContentIn {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .gallery-filter-pill {
          transform: translateY(0) scale(1);
        }
        .gallery-filter-pill:hover {
          transform: translateY(-2px);
        }
        .gallery-filter-pill:active {
          transform: translateY(0) scale(0.96);
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-heading,
          .gallery-item-uniform,
          .gallery-item-in,
          .gallery-lightbox-backdrop,
          .gallery-lightbox-content {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}