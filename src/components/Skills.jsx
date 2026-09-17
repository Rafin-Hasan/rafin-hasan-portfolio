import React from 'react';
import { Layout, Server, Cloud, Database } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const icons = [Layout, Server, Cloud, Database];

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-slate-950/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono uppercase tracking-wider text-blue-400">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technologies, frameworks & infrastructure.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Modern, verified toolchains chosen for speed, reliability, and maintainability across the entire development stack.
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {category.category}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mb-6">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-medium transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
