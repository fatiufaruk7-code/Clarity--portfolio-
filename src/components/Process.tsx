import React from 'react';
import { Compass, PenTool, Code, Rocket } from 'lucide-react';
import { processSteps } from '../data/portfolioData.ts';

export const Process: React.FC = () => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Compass className="w-5 h-5" />;
      case '02':
        return <PenTool className="w-5 h-5" />;
      case '03':
        return <Code className="w-5 h-5" />;
      case '04':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-title">
          <p>WORKFLOW</p>
          <h2>
            DEVELOPMENT <span>PROCESS</span>
          </h2>
          <p className="section-subtitle-text">
            A transparent 4-stage process designed to bring your digital vision to life smoothly and efficiently.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.number} className="process-card" id={`process-step-${step.number}`}>
              <span className="process-num">{step.number}</span>

              <div className="process-icon-box">
                {getStepIcon(step.number)}
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
