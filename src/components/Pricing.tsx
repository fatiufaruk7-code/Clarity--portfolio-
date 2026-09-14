import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { pricingPackagesData } from '../data/portfolioData.ts';
import { scrollToSection, triggerContactWithContext } from '../utils/navigation.ts';

export const Pricing: React.FC = () => {
  const handleSelectPackage = (pkgName: string, price: string) => {
    let projectCategory = 'Business Website';
    if (pkgName.toLowerCase().includes('starter')) projectCategory = 'Personal Portfolio';
    else if (pkgName.toLowerCase().includes('custom')) projectCategory = 'Custom Project';
    
    triggerContactWithContext(
      projectCategory,
      `Hello, I would like to get started with the ${pkgName} package (${price}).`
    );
  };

  return (
    <section className="section bg-[#080C18]" id="pricing">
      <div className="container">
        <div className="section-title">
          <p>TRANSPARENT VALUE</p>
          <h2>
            SIMPLE, FLEXIBLE <span>PRICING</span>
          </h2>
          <p className="section-subtitle-text">
            Clear rates with zero hidden charges. Choose a tailored package or discuss custom digital requirements.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPackagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`pricing-card ${pkg.popular ? 'featured-card' : ''}`}
              id={`pricing-${pkg.id}`}
            >
              {pkg.popular && (
                <span className="pricing-badge">
                  RECOMMENDED
                </span>
              )}

              <div className="pricing-header">
                <h3 className="pricing-name">{pkg.name}</h3>
                <div className="pricing-price">{pkg.price}</div>
                <p className="pricing-best-for">{pkg.bestFor}</p>
              </div>

              <ul className="pricing-features">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="pricing-feature">
                    <Check className="feature-check w-4 h-4" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectPackage(pkg.name, pkg.price);
                }}
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} w-full mt-auto cursor-pointer`}
                id={`choose-plan-${pkg.id}`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-[#94A3B8]">
          <p>
            Have special requirements, complex API integrations or tight deadlines?{' '}
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                triggerContactWithContext('Custom Project', 'Hello, I have custom project requirements and would like to request a tailored quote.');
              }}
              className="text-[#A78BFA] hover:underline font-bold cursor-pointer"
            >
              Contact me directly for a custom quote.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
