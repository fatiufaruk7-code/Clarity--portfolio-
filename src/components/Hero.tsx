import React, { useState } from 'react';
import { ArrowRight, Sparkles, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { personalInfo, codeSnippetString } from '../data/portfolioData.ts';
import { scrollToSection } from '../utils/navigation.ts';
import { HeroAtmosphere } from './HeroAtmosphere.tsx';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippetString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techBadges = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub', 'Vercel', 'Firebase'];

  return (
    <section className="hero-section relative overflow-hidden" id="home">
      {/* Dynamic Digital Atmosphere Background */}
      <HeroAtmosphere />

      {/* Background ambient lighting */}
      <div className="mesh-1" aria-hidden="true" />
      <div className="mesh-2" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="hero-grid">
          {/* Left Column: Headline & Value Proposition with Staggered Entrance */}
          <div className="hero-text-content">
            {/* Small Label with Status Dot */}
            <div 
              className="status-badge hero-anim-item" 
              id="hero-badge"
              style={{ animationDelay: '100ms' }}
            >
              <span className="status-dot" />
              <span>{personalInfo.supportingTitle}</span>
            </div>

            {/* Main Headline with Line-by-Line Reveal */}
            <h1 className="hero-title">
              <span className="block overflow-hidden pb-1">
                <span 
                  className="block hero-anim-line"
                  style={{ animationDelay: '250ms' }}
                >
                  BUILDING MODERN
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span 
                  className="block hero-anim-line bg-gradient-to-r from-[#8B5CF6] via-[#60A5FA] to-[#EC4899] bg-clip-text text-transparent"
                  style={{ animationDelay: '380ms' }}
                >
                  DIGITAL EXPERIENCES.
                </span>
              </span>
            </h1>

            {/* Supporting Tagline */}
            <div className="overflow-hidden">
              <p 
                className="hero-tagline hero-anim-item"
                style={{ animationDelay: '520ms' }}
              >
                {personalInfo.tagline}
              </p>
            </div>

            {/* Description */}
            <div className="overflow-hidden">
              <p 
                className="hero-subtitle hero-anim-item"
                style={{ animationDelay: '660ms' }}
              >
                {personalInfo.shortDescription}
              </p>
            </div>

            {/* CTA Buttons with Stagger */}
            <div className="hero-cta">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="btn btn-primary hero-anim-item" 
                id="hero-cta-contact"
                style={{ animationDelay: '800ms' }}
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="btn btn-secondary hero-anim-item" 
                id="hero-cta-projects"
                style={{ animationDelay: '900ms' }}
              >
                <span>VIEW MY WORK</span>
                <ExternalLink className="w-4 h-4 text-[#8B5CF6] transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Technology Badges Appearing One After Another */}
            <div className="hero-tech-badges">
              <span 
                className="hero-tech-label hero-anim-item"
                style={{ animationDelay: '1000ms' }}
              >
                CORE STACK:
              </span>
              {techBadges.map((tech, index) => (
                <span 
                  key={tech} 
                  className="hero-tech-pill hero-anim-badge"
                  style={{ animationDelay: `${1080 + index * 60}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual - Futuristic Code Terminal Card */}
          <div className="hero-visual">
            <div 
              className="hero-card hero-anim-terminal" 
              id="hero-code-terminal"
              style={{ animationDelay: '400ms' }}
            >
              <div className="card-header">
                <div className="window-dots">
                  <span className="window-dot dot-red" />
                  <span className="window-dot dot-yellow" />
                  <span className="window-dot dot-green" />
                </div>
                <span className="file-name">clarity-creative.ts</span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="p-1.5 rounded-md hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                  title="Copy code snippet"
                  aria-label="Copy code snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="code-area">
                <pre className="text-xs sm:text-sm leading-relaxed overflow-x-auto text-[#E2E8F0]">
                  <code>
                    <span className="syntax-p">const</span> <span className="syntax-b">developer</span> = &#123;{'\n'}
                    {'  '}brand: <span className="text-[#38BDF8]">&quot;Clarity Creative&quot;</span>,{'\n'}
                    {'  '}role: <span className="text-[#38BDF8]">&quot;Web Developer &amp; CS Student&quot;</span>,{'\n'}
                    {'  '}tagline: <span className="text-[#38BDF8]">&quot;Modern Websites. Clear Solutions.&quot;</span>,{'\n'}
                    {'  '}stack: [<span className="text-[#A78BFA]">&quot;HTML5&quot;</span>, <span className="text-[#A78BFA]">&quot;CSS3&quot;</span>, <span className="text-[#A78BFA]">&quot;JS&quot;</span>, <span className="text-[#A78BFA]">&quot;React&quot;</span>, <span className="text-[#A78BFA]">&quot;Git&quot;</span>],{'\n'}
                    {'  '}status: <span className="text-[#10B981]">&quot;Available for projects&quot;</span>{'\n'}
                    &#125;;{'\n\n'}
                    <span className="syntax-p">function</span> <span className="syntax-y">craftExperience</span>(project) &#123;{'\n'}
                    {'  '}<span className="syntax-p">return</span> &#123;{'\n'}
                    {'    '}speed: <span className="text-[#38BDF8]">&quot;Blazing Fast &amp; Optimized&quot;</span>,{'\n'}
                    {'    '}design: <span className="text-[#EC4899]">&quot;Clean, Responsive UI&quot;</span>,{'\n'}
                    {'    '}solution: <span className="text-[#38BDF8]">&quot;Clear Solutions for Real Growth&quot;</span>{'\n'}
                    {'  '}&#125;;{'\n'}
                    &#125;;
                  </code>
                </pre>
              </div>

              {/* Terminal footer status */}
              <div className="px-5 py-3 bg-[#0E1428] border-t border-[#1E293B] flex items-center justify-between text-[11px] text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>TypeScript 5.0 • Ready</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#10B981]">
                  <Sparkles className="w-3 h-3" />
                  <span>All tests passing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
