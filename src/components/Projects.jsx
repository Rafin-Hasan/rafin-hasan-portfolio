import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Code, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'React', 'Node.js', 'Tailwind CSS'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono uppercase tracking-wider text-blue-400">
              Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects & Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A curated selection of production applications, automation tools, and full-stack software built with precision.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle blue accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:bg-blue-500/10 transition-colors" />

              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono text-blue-400 font-medium tracking-wide uppercase">
                    {project.subtitle}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded-md">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key feature highlights */}
                <div className="space-y-1.5 mb-6">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/70">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors group/btn"
                  >
                    <Github className="w-4 h-4 text-slate-400 group-hover/btn:text-white" />
                    <span>View Repository</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-950/40 hover:bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-800/40 transition-all"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
