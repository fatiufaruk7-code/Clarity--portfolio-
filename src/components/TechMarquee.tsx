import React from 'react';
import { marqueeTechList } from '../data/portfolioData.ts';

export const TechMarquee: React.FC = () => {
  // Duplicate list to achieve seamless infinite loop
  const duplicatedList = [...marqueeTechList, ...marqueeTechList, ...marqueeTechList];

  return (
    <div className="w-full py-6 overflow-hidden relative border-y border-[#1E293B] bg-[#0D1220]/60 backdrop-blur-md" id="tech-marquee">
      {/* Gradient masks for soft fade at left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0b1020] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0b1020] to-transparent z-10 pointer-events-none" />

      <div className="marquee-track flex items-center gap-4 sm:gap-6 whitespace-nowrap hover:[animation-play-state:paused]">
        {duplicatedList.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#111827]/80 border border-[#1E293B] hover:border-[#8B5CF6]/50 hover:bg-[#162032] transition-colors shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]" />
            <span className="text-xs sm:text-sm font-bold text-[#F8FAFC] tracking-wide">
              {tech.name}
            </span>
            <span className="text-[10px] font-mono text-[#8B5CF6] bg-[#8B5CF6]/10 px-1.5 py-0.5 rounded border border-[#8B5CF6]/20">
              {tech.symbol}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
