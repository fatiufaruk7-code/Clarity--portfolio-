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
        <div className="section-title">
          <p>WHAT I DO</p>
          <h2>
            SERVICES &amp; <span>SOLUTIONS</span>
          </h2>
          <p className="section-subtitle-text">
            Tailored web development and digital services to help you establish a prominent online presence.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="service-card group" 
              id={`service-${service.id}`}
            >
              <div className="service-icon-box">
                {getServiceIcon(service.iconName)}
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="mt-5 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs font-bold text-[#A78BFA] group-hover:text-white transition-colors">
                <span>Inquire About Service</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#8B5CF6]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
