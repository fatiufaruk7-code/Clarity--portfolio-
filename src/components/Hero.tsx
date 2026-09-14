import React, { useState } from 'react';
import { ArrowRight, Sparkles, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { personalInfo, codeSnippetString } from '../data/portfolioData.ts';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippetString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techBadges = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub'];

  return (
    <section className="hero-section" id="home">
      {/* Background ambient lighting */}
      <div className="mesh-1" aria-hidden="true" />
      <div className="mesh-2" aria-hidden="true" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline & Value Proposition */}
          <div className="hero-text-content">
            {/* Small Label with Status Dot */}
            <div className="status-badge" id="hero-badge">
              <span className="status-dot" />
              <span>{personalInfo.supportingTitle}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              BUILDING MODERN<br />
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#60A5FA] to-[#EC4899] bg-clip-text text-transparent">
                DIGITAL EXPERIENCES.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="hero-tagline">
              {personalInfo.tagline}
            </p>

            {/* Description */}
            <p className="hero-subtitle">
              {personalInfo.shortDescription}
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary" id="hero-cta-contact">
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#projects" className="btn btn-secondary" id="hero-cta-projects">
                <span>VIEW MY WORK</span>
                <ExternalLink className="w-4 h-4 text-[#8B5CF6]" />
              </a>
            </div>

            {/* Technology Badges */}
            <div className="hero-tech-badges">
              <span className="hero-tech-label">CORE STACK:</span>
              {techBadges.map((tech) => (
                <span key={tech} className="hero-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual - Futuristic Code Terminal Card */}
          <div className="hero-visual">
            <div className="hero-card" id="hero-code-terminal">
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
