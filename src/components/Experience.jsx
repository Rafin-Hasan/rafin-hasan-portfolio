import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono uppercase tracking-wider text-blue-400">
            Career Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & Engineering Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proven track record of engineering scalable frontend architectures, dependable backend microservices, and leading web projects.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {experienceData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-slate-600 hidden sm:inline">•</span>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-300">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.company}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
