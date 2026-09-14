import React from 'react';
import { 
  Code, 
  Smartphone, 
  Briefcase, 
  Target, 
  Rocket, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData.ts';
import { triggerContactWithContext } from '../utils/navigation.ts';
import { ScrollReveal } from './ScrollReveal.tsx';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'Target':
        return <Target className="w-6 h-6" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  return (
    <section className="section" id="services">
      <div className="container">
        <ScrollReveal direction="up" distance={20}>
          <div className="section-title">
            <p>WHAT I DO</p>
            <h2>
              SERVICES &amp; <span>SOLUTIONS</span>
            </h2>
            <p className="section-subtitle-text">
              Tailored web development and digital services to help you establish a prominent online presence.
            </p>
          </div>
        </ScrollReveal>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={120 + index * 90}
              distance={26}
              className="h-full"
            >
              <div 
                className="service-card group h-full flex flex-col justify-between" 
                id={`service-${service.id}`}
              >
                <div>
                  <div className="service-icon-box group-hover:scale-108 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => triggerContactWithContext(service.title, `Hi, I am interested in inquiring about your "${service.title}" service.`)}
                  className="w-full mt-6 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs font-bold text-[#A78BFA] group-hover:text-white transition-colors cursor-pointer bg-transparent text-left"
                  aria-label={`Inquire about ${service.title}`}
                >
                  <span>Inquire About Service</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 text-[#8B5CF6] group-hover:text-[#38BDF8]" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
