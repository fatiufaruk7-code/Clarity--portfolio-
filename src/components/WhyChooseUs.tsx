import React from 'react';
import { Zap, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal.tsx';

interface FeatureCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
}

export const WhyChooseUs: React.FC = () => {
  const features: FeatureCard[] = [
    {
      id: "feature-fast",
      icon: <Zap className="w-6 h-6 text-[#F59E0B]" />,
      title: "Fast & Responsive",
      description: "Optimized for speed and smooth performance across all devices and screen sizes.",
      badge: "Performance"
    },
    {
      id: "feature-design",
      icon: <Sparkles className="w-6 h-6 text-[#A78BFA]" />,
      title: "Modern Design",
      description: "Clean, elegant aesthetics that align with current web standards and reflect your brand.",
      badge: "Aesthetics"
    },
    {
      id: "feature-mobile",
      icon: <Smartphone className="w-6 h-6 text-[#38BDF8]" />,
      title: "Mobile First",
      description: "Tailored to look great on smartphones, tablets, laptops and large desktop monitors.",
      badge: "Ergonomics"
    },
    {
      id: "feature-reliable",
      icon: <ShieldCheck className="w-6 h-6 text-[#10B981]" />,
      title: "Reliable Development",
      description: "Built with clean, structured code and modern practices for long-term stability and growth.",
      badge: "Quality"
    }
  ];

  return (
    <section className="section bg-[#0B1020] relative overflow-hidden" id="why-choose-us">
      {/* Subtle ambient lighting accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container relative z-10">
        <ScrollReveal direction="up" distance={20}>
          <div className="section-title">
            <p>WHY PARTNER WITH US</p>
            <h2>
              WHY CHOOSE <span>CLARITY CREATIVE</span>?
            </h2>
            <p className="section-subtitle-text">
              Focused on delivering clean design, rock-solid engineering, and clear results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-2">
          {features.map((item, index) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={100 + index * 80}
              distance={24}
              className="h-full"
            >
              <div 
                id={item.id}
                className="h-full rounded-2xl bg-[#111827] border border-[#1E293B] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8B5CF6]/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(139,92,246,0.15)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-center group-hover:scale-110 group-hover:border-[#8B5CF6]/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-[#94A3B8] uppercase px-2.5 py-1 rounded-full bg-[#0F172A] border border-white/5">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-[#A78BFA] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-[#8B5CF6] opacity-90 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  <span>Built with precision</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
