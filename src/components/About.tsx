import React from 'react';
import { Code2, GraduationCap, Palette, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { aboutCards, personalInfo } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code2 className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const keyPillars = [
    "Computer Science student & aspiring Web Developer",
    "Clean, semantic & maintainable code practices",
    "Fluid responsive design across mobile and desktop",
    "Focused on problem solving & clear digital solutions"
  ];

  return (
    <section className="section bg-[#080C18]" id="about">
      <div className="container">
        <div className="section-title">
          <p>GET TO KNOW ME</p>
          <h2>
            ABOUT <span>CLARITY CREATIVE</span>
          </h2>
          <p className="section-subtitle-text">
            Turning creative ideas into fast, intuitive, and modern web solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Biography and Philosophy */}
          <div className="about-content">
            <h3>
              Passionate about building modern, responsive and user-friendly websites.
            </h3>
            <p>
              I am a dedicated Computer Science student and aspiring Web Developer with a strong focus on frontend craft and practical digital solutions. My goal is to build web experiences that are not only visually impressive, but also lightning fast, accessible, and easy to navigate.
            </p>
            <p>
              Whether partnering with emerging brands, local businesses, or individual entrepreneurs, I approach each project with clear architecture, meticulous responsive design, and dependable modern technology like React, Vite, and Vercel.
            </p>

            <div className="space-y-3 mb-8">
              {keyPillars.map((pillar, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary inline-flex">
              <span>LET&apos;S WORK TOGETHER</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Core Competencies Grid */}
          <div className="about-cards-grid">
            {aboutCards.map((card, index) => (
              <div key={index} className="about-card" id={`about-card-${index}`}>
                <div className="about-card-icon">
                  {getIcon(card.icon)}
                </div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
