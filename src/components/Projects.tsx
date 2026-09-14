import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Github, 
  Code, 
  Utensils, 
  ShoppingBag, 
  GraduationCap, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/portfolioData.ts';
import { ProjectItem } from '../types.ts';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'portfolio-website':
        return <Code className="w-6 h-6 text-[#A78BFA]" />;
      case 'restaurant-website':
        return <Utensils className="w-6 h-6 text-[#60A5FA]" />;
      case 'clarity-sell':
        return <ShoppingBag className="w-6 h-6 text-[#F472B6]" />;
      case 'school-portal':
        return <GraduationCap className="w-6 h-6 text-[#818CF8]" />;
      default:
        return <Layers className="w-6 h-6 text-[#A78BFA]" />;
    }
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-title">
          <p>PORTFOLIO SHOWCASE</p>
          <h2>
            SELECTED <span>PROJECTS</span>
          </h2>
          <p className="section-subtitle-text">
            A curated showcase of websites and digital solutions built with responsive ergonomics, clean code, and intuitive user interfaces.
          </p>
        </div>

        {/* 4 Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="project-card group"
              id={`project-${project.id}`}
            >
              {/* Thumbnail / Visual Header */}
              <div 
                className="project-thumb cursor-pointer"
                style={{ background: project.previewGradient }}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`Open case study for ${project.title}`}
              >
                <span className="project-thumb-badge">
                  {project.projectType}
                </span>

                <div className="project-thumb-icon">
                  {getProjectIcon(project.id)}
                </div>
              </div>

              {/* Card Body */}
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="project-title group-hover:text-[#A78BFA] transition-colors">
                  {project.title}
                </h3>

                <p className="project-desc">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] flex-shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Bar */}
                <div className="project-actions">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="project-btn"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="p-2 rounded-lg bg-[#0E1428] border border-[#1E293B] hover:border-[#8B5CF6]/50 text-[#94A3B8] hover:text-white transition-colors"
                      title="Project Details"
                    >
                      <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Project Section Call-to-Action */}
        <div className="mt-14 p-8 rounded-2xl bg-[#111827] border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6] font-bold block mb-1">
              READY TO LAUNCH?
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              Need a modern website like these?
            </h3>
            <p className="text-sm text-[#94A3B8] mt-1">
              Let&apos;s build a fast, responsive solution tailored to your goals.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary whitespace-nowrap">
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-[#111827] border border-[#1E293B] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              className="h-40 flex items-center justify-center relative border-b border-[#1E293B] shrink-0"
              style={{ background: selectedProject.previewGradient }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0E1428]/90 border border-[#1E293B] flex items-center justify-center shadow-xl">
                {getProjectIcon(selectedProject.id)}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0E1428]/90 border border-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#0E1428]/90 border border-[#1E293B] text-[#A78BFA]">
                  {selectedProject.projectType}
                </span>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-[#0E1428]/80 border border-[#1E293B] text-[#94A3B8]">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-5">
              <div>
                <h3 id="modal-title" className="text-2xl font-extrabold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {selectedProject.overview || selectedProject.description}
                </p>
              </div>

              {selectedProject.objective && (
                <div className="p-4 rounded-xl bg-[#0E1428] border border-[#1E293B]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6] mb-1.5">
                    Project Objective
                  </h4>
                  <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
                    {selectedProject.objective}
                  </p>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5">
                  Key Technical Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-[#0E1428] border border-[#1E293B] text-[#A78BFA]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#0E1428] border-t border-[#1E293B] flex items-center justify-between gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="btn btn-primary !py-2 !px-4 !text-xs"
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="btn btn-secondary !py-2 !px-4 !text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
