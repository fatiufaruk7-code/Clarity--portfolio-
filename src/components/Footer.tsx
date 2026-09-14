import React from 'react';
import { ArrowUp, Github, Twitter, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';
import { scrollToSection } from '../utils/navigation.ts';
import { ScrollReveal } from './ScrollReveal.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    scrollToSection('home');
  };

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <footer id="main-footer">
      <div className="container">
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#1E293B]">
            {/* Brand & Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className="logo mb-2 group" 
                aria-label="Clarity Creative Homepage"
              >
                <span className="logo-badge group-hover:scale-105 transition-transform" aria-hidden="true">
                  <span className="badge-c">C</span>
                  <span className="badge-sup">2</span>
                </span>
                <span className="logo-title">
                  CLARITY<span className="title-creative">CREATIVE</span>
                </span>
              </a>
              <p className="text-xs text-[#94A3B8] tracking-widest uppercase">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Quick Nav Links */}
            <ul className="flex items-center gap-6 flex-wrap justify-center text-xs font-semibold text-[#94A3B8]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="hover:text-white transition-colors cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8B5CF6] hover:after:w-full after:transition-all after:duration-250"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons & Back to top */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#94A3B8] hover:text-white hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.35)] transition-all duration-200"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#60A5FA]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#60A5FA] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(96,165,250,0.35)] transition-all duration-200"
                title="Twitter / X"
                aria-label="Twitter / X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#22C55E]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#22C55E] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.35)] transition-all duration-200"
                title="WhatsApp"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={scrollToTop}
                className="group w-9 h-9 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:-translate-y-1 hover:shadow-[0_0_18px_rgba(139,92,246,0.4)] active:scale-95 transition-all duration-200 ml-2 cursor-pointer"
                title="Back to top"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Copyright & Meta */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4 text-center sm:text-left">
            <p>© 2026 Clarity Creative. All rights reserved.</p>
            <p className="flex items-center gap-1.5 justify-center">
              <span>Crafted with modern React &amp; Tailwind CSS</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
