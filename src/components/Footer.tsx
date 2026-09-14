import React from 'react';
import { ArrowUp, Github, Twitter, MessageCircle, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#1E293B]">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="logo mb-2" aria-label="Clarity Creative Homepage">
              <span className="logo-badge" aria-hidden="true">
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
                <a href={link.href} className="hover:text-white transition-colors">
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
              className="w-9 h-9 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#60A5FA]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#60A5FA] transition-colors"
              title="Twitter / X"
              aria-label="Twitter / X Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#22C55E]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#22C55E] transition-colors"
              title="WhatsApp"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#8B5CF6] flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors ml-2 cursor-pointer"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
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
      </div>
    </footer>
  );
};
