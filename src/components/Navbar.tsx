import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton.tsx';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'PRICING', href: '#pricing', id: 'pricing' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={isScrolled ? 'scrolled' : ''} id="main-header">
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          {/* Clarity Creative Logo */}
          <a href="#home" className="logo" aria-label="Clarity Creative Homepage">
            <span className="logo-badge" aria-hidden="true">
              <span className="badge-c">C</span>
              <span className="badge-sup">2</span>
            </span>
            <span className="logo-title">
              CLARITY<span className="title-creative">CREATIVE</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Action Buttons */}
          <div className="nav-actions">
            <PWAInstallButton variant="nav" />

            <a
              href="#contact"
              className="btn btn-primary !py-2.5 !px-5 !text-xs !rounded-full shadow-md shadow-[#8B5CF6]/30"
              id="nav-cta-btn"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#A78BFA]" /> : <Menu className="w-6 h-6 text-[#F8FAFC]" />}
          </button>
        </nav>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden border-b border-[#1E293B] bg-[#0E1428]/98 backdrop-blur-2xl px-6 py-6 transition-all animate-in slide-in-from-top-4 duration-300 shadow-2xl"
          id="mobile-drawer"
        >
          <ul className="flex flex-col gap-4 mb-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 text-base font-bold transition-colors ${
                    activeSection === item.id
                      ? 'text-[#A78BFA] border-l-2 border-[#8B5CF6] pl-3'
                      : 'text-[#94A3B8] hover:text-white pl-1'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 pt-4 border-t border-[#1E293B]">
            <PWAInstallButton variant="mobile" />

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary w-full text-center justify-center py-3 text-sm font-bold"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/2348137941486"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full text-center justify-center py-3 text-sm font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
