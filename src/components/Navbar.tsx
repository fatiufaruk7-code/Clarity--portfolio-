import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton.tsx';
import { scrollToSection } from '../utils/navigation.ts';

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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'PRICING', href: '#pricing', id: 'pricing' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  const handleMobileNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    // Slight timeout allows drawer to begin transition without layout jump
    setTimeout(() => {
      scrollToSection(targetId);
    }, 50);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''} id="main-header">
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          {/* Clarity Creative Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="logo group" 
            aria-label="Clarity Creative Homepage"
          >
            <span className="logo-badge logo-badge-animated group-hover:scale-105 transition-all duration-300" aria-hidden="true">
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
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`nav-link group ${activeSection === item.id ? 'active' : ''}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span 
                    className={`nav-link-indicator ${activeSection === item.id ? 'nav-link-indicator-active' : ''}`}
                    aria-hidden="true" 
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Action Buttons */}
          <div className="nav-actions">
            <PWAInstallButton variant="nav" />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
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
          className="md:hidden border-b border-[#1E293B] bg-[#0E1428]/98 backdrop-blur-2xl px-5 py-5 sm:px-6 transition-all animate-in slide-in-from-top-4 duration-300 shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto"
          id="mobile-drawer"
        >
          <ul className="flex flex-col gap-2 mb-5">
            {navItems.map((item, index) => (
              <li 
                key={item.id}
                className="mobile-nav-item"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleMobileNavClick(e, item.id)}
                  className={`flex items-center justify-between py-3 px-3 rounded-lg text-base font-bold transition-all min-h-[44px] ${
                    activeSection === item.id
                      ? 'text-[#A78BFA] bg-[#8B5CF6]/10 border-l-3 border-[#8B5CF6]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2.5 pt-4 border-t border-[#1E293B]">
            <PWAInstallButton variant="mobile" />

            <a
              href="#contact"
              onClick={(e) => handleMobileNavClick(e, 'contact')}
              className="btn btn-primary w-full text-center justify-center py-3 text-sm font-bold min-h-[48px]"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/2348137941486"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full text-center justify-center py-3 text-sm font-bold min-h-[48px]"
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
