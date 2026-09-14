import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode, 
  Atom, 
  Smartphone, 
  GitBranch, 
  Layers, 
  Rocket, 
  Server 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'tools' | 'backend'>('all');

  const getSkillIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#E34F26]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#1572B6]" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-[#F7DF1E]" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-[#61DAFB]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#8B5CF6]" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-[#F05032]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#38BDF8]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#FFFFFF]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#FFA611]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  const filteredSkills = filter === 'all' 
    ? skillsData 
    : skillsData.filter((s) => s.category === filter);

  return (
    <section className="section bg-[#080C18]" id="skills">
      <div className="container">
        <div className="section-title">
          <p>TECHNICAL PROFICIENCY</p>
          <h2>
            CORE <span>TECH STACK</span>
          </h2>
          <p className="section-subtitle-text">
            Modern technologies and development tools I leverage to engineer responsive, robust web solutions.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {(['all', 'frontend', 'tools', 'backend'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white shadow-lg shadow-[#8B5CF6]/25'
                  : 'bg-[#111827] text-[#94A3B8] hover:text-white border border-[#1E293B] hover:border-[#8B5CF6]/40'
              }`}
            >
              {tab === 'all' ? 'All Technologies' : tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-5 rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-[#8B5CF6]/50 transition-all hover:bg-[#151D30] group"
              id={`skill-${skill.id}`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0E1428] border border-[#1E293B] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.lucideIconName)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B]">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-[#8B5CF6]">
                  {skill.level}%
                </span>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                {skill.description}
              </p>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-[#0E1428] rounded-full overflow-hidden border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
