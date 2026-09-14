import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/navigation.ts';
import { ScrollReveal } from './ScrollReveal.tsx';

interface SectionCTABlockProps {
  title: string;
  description: string;
  buttonText?: string;
  badge?: string;
  variant?: 'subtle' | 'glow';
}

export const SectionCTABlock: React.FC<SectionCTABlockProps> = ({
  title,
  description,
  buttonText = "START A PROJECT",
  badge = "LET'S COLLABORATE",
  variant = 'subtle'
}) => {
  return (
    <div className="container py-8">
      <ScrollReveal direction="up" distance={20}>
        <div 
          className={`relative rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border overflow-hidden transition-all duration-300 ${
            variant === 'glow'
              ? 'bg-gradient-to-r from-[#111827] via-[#161D32] to-[#111827] border-[#8B5CF6]/30 shadow-[0_10px_35px_rgba(139,92,246,0.15)]'
              : 'bg-[#111827]/80 backdrop-blur-sm border-[#1E293B] hover:border-[#8B5CF6]/30'
          }`}
        >
          {/* Ambient accent light */}
          <div 
            className="absolute -right-20 -top-20 w-48 h-48 bg-[#8B5CF6]/10 rounded-full blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-widest text-[#A78BFA] uppercase px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 mb-2.5">
              <Sparkles className="w-3 h-3 text-[#A78BFA]" />
              <span>{badge}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 max-w-xl">
              {description}
            </p>
          </div>

          <div className="relative z-10 w-full sm:w-auto shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="btn btn-primary w-full sm:w-auto justify-center text-xs font-bold py-2.5 px-5 group min-h-[44px]"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
