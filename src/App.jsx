import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';
import Gallery from './components/Gallery';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authInitialMode, setAuthInitialMode] = useState('login');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const handleOpenAuth = (mode = 'login') => {
    setAuthInitialMode(mode);
    setAuthModalOpen(true);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Match the order in your navbar: Home → About → Services → Gallery → Contact
      const sections = ['home', 'about', 'services', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i]);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active section
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#111113', minHeight: '100vh', color: '#f8f9fa' }}>
      <Navbar
        activeSection={activeSection}
        onOpenAuth={handleOpenAuth}
        onOpenBooking={() => setBookingModalOpen(true)}
      />

      <main>
        <Hero
          onOpenAuth={handleOpenAuth}
          onOpenBooking={() => setBookingModalOpen(true)}
        />
        <About />
        <Services onOpenBooking={() => setBookingModalOpen(true)} />
        <Gallery />
        <Contact showToast={showToast} />

      </main>

      <Footer showToast={showToast} />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        showToast={showToast}
      />
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authInitialMode}
        onClose={() => setAuthModalOpen(false)}
        showToast={showToast}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}
