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
import { scrollToSection, triggerContactWithContext } from '../utils/navigation.ts';
import { ScrollReveal } from './ScrollReveal.tsx';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isClosingModal, setIsClosingModal] = useState(false);

  const closeModal = () => {
    setIsClosingModal(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosingModal(false);
    }, 220);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
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
        <ScrollReveal direction="up" distance={20}>
          <div className="section-title">
            <p>PORTFOLIO SHOWCASE</p>
            <h2>
              SELECTED <span>PROJECTS</span>
            </h2>
            <p className="section-subtitle-text">
              A curated showcase of websites and digital solutions built with responsive ergonomics, clean code, and intuitive user interfaces.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Projects Grid with Staggered ScrollReveal */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={100 + index * 90}
              distance={26}
              className="h-full"
            >
              <article
                className="project-card group h-full flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)]"
                id={`project-${project.id}`}
              >
                {/* Thumbnail / Visual Header */}
                <div 
                  className="project-thumb cursor-pointer overflow-hidden relative"
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

                  <div className="project-thumb-icon transform group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300">
                    {getProjectIcon(project.id)}
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-info flex-1 flex flex-col justify-between">
                  <div>
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
                  </div>

                  {/* Action Bar */}
                  <div className="project-actions pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="project-btn group/btn"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="p-2 rounded-lg bg-[#0E1428] border border-[#1E293B] hover:border-[#8B5CF6]/50 text-[#94A3B8] hover:text-white transition-all hover:scale-105"
                        title="Project Details"
                      >
                        <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Project Section Call-to-Action */}
        <ScrollReveal direction="up" delay={250} distance={20}>
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#111827] border border-[#1E293B] hover:border-[#8B5CF6]/40 transition-colors flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8B5CF6] font-bold block mb-1">
                READY TO LAUNCH?
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Need a modern website like these?
              </h3>
              <p className="text-sm text-[#94A3B8] mt-1">
                Let&apos;s build a fast, responsive solution tailored to your goals.
              </p>
            </div>

            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="btn btn-primary w-full sm:w-auto whitespace-nowrap cursor-pointer group min-h-[48px] justify-center"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Case Study Modal with Smooth Fade and Scale Transitions */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md transition-opacity duration-200 ${
            isClosingModal ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={`relative w-full max-w-[calc(100vw-20px)] sm:max-w-2xl max-h-[92vh] flex flex-col rounded-2xl bg-[#111827] border border-[#1E293B] shadow-2xl overflow-hidden transition-all duration-200 ease-out ${
              isClosingModal ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              className="h-36 sm:h-40 flex items-center justify-center relative border-b border-[#1E293B] shrink-0"
              style={{ background: selectedProject.previewGradient }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0E1428]/90 border border-[#1E293B] flex items-center justify-center shadow-xl">
                {getProjectIcon(selectedProject.id)}
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-[#0E1428]/90 border border-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors cursor-pointer z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 right-14 flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded bg-[#0E1428]/90 border border-[#1E293B] text-[#A78BFA] whitespace-nowrap">
                  {selectedProject.projectType}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded bg-[#0E1428]/80 border border-[#1E293B] text-[#94A3B8] whitespace-nowrap">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-7 overflow-y-auto space-y-4 sm:space-y-5">
              <div>
                <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {selectedProject.overview || selectedProject.description}
                </p>
              </div>

              {/* Action Buttons: Live Demo & View Code */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    if (selectedProject.id === 'portfolio-website') {
                      closeModal();
                      scrollToSection('home');
                    } else {
                      window.open('https://darex-portfolio.vercel.app/', '_blank', 'noopener,noreferrer');
                    }
                  }}
                  className="btn btn-primary !py-2.5 !px-4 !text-xs cursor-pointer group justify-center min-h-[44px]"
                  id="modal-live-demo-btn"
                >
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  <span>Live Demo</span>
                </button>

                <a
                  href={selectedProject.githubUrl || 'https://github.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary !py-2.5 !px-4 !text-xs cursor-pointer group justify-center min-h-[44px]"
                  id="modal-github-btn"
                >
                  <Github className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                  <span>View Code</span>
                </a>
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
              <button
                type="button"
                onClick={() => {
                  const proj = selectedProject;
                  closeModal();
                  triggerContactWithContext(
                    proj.category || 'Custom Project',
                    `Hello, I would like to inquire about building a project similar to "${proj.title}".`
                  );
                }}
                className="btn btn-primary !py-2 !px-4 !text-xs cursor-pointer group"
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={closeModal}
                className="btn btn-secondary !py-2 !px-4 !text-xs cursor-pointer"
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
