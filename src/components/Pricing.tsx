import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { pricingPackagesData } from '../data/portfolioData.ts';

export const Pricing: React.FC = () => {
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
                className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} w-full mt-auto`}
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
            <a href="#contact" className="text-[#A78BFA] hover:underline font-bold">
              Contact me directly for a custom quote.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
