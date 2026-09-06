import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import Toast from "./components/Toast";


export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Match the order in your navbar: Home → About → Services → Gallery → Contact
      const sections = ["home", "about", "services", "gallery", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i]);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial active section
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#111113",
        minHeight: "100vh",
        color: "#f8f9fa",
      }}
    >
      <Navbar
        activeSection={activeSection}
        onOpenBooking={() => setBookingModalOpen(true)}
      />

      <main>
        <Hero onOpenBooking={() => setBookingModalOpen(true)} />
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

      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </div>
  );
}
