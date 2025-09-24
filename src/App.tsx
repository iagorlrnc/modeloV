import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SickleCellSection from './components/SickleCellSection';
import ReproductivePlanning from './components/ReproductivePlanning';
import ContraceptiveMethods from './components/ContraceptiveMethods';
import Pregnancy from './components/Pregnancy';
import Recommendations from './components/Recommendations';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Import Inter font from Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Set Inter as the default font family
    document.body.style.fontFamily = 'Inter, system-ui, sans-serif';

    // Add scroll reveal animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      observer.disconnect();
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <Hero />
        <About />
        <SickleCellSection />
        <ReproductivePlanning />
        <ContraceptiveMethods />
        <Pregnancy />
        <Recommendations />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;