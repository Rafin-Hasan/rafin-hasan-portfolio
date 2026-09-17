import React from 'react';
import { Layers, Zap, Shield, Cpu, Code2, Rocket } from 'lucide-react';

export default function About() {
  const principles = [
    {
      icon: Zap,
      title: "Ultra-Fast Performance",
      description: "Obsessed with optimizing Core Web Vitals, payload size, and server response times for seamless user experiences."
    },
    {
      icon: Shield,
      title: "Resilient Architecture",
      description: "Building production systems with clean separation of concerns, robust type safety, and defensive error handling."
    },
    {
      icon: Layers,
      title: "Minimalist UI/UX",
      description: "Crafting purposeful interfaces where every pixel, whitespace, and interaction serves the user without decorative clutter."
    },
    {
      icon: Rocket,
      title: "Continuous DevOps",
      description: "Automating zero-downtime CI/CD pipelines, containerization, and preview environments for rapid, reliable shipping."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono uppercase tracking-wider text-blue-400">
            About & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Transforming complex systems into intuitive, elegant software.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I believe software should be fast, quiet, and dependable. From designing responsive modern component libraries to configuring fault-tolerant cloud services, I focus on delivering end-to-end reliability.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
