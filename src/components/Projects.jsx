import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Globe, Radio } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Works');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All Works',
    'Live Vercel Sites',
    'Full-Stack & Apps',
    'SaaS & Fintech',
    'Open Source & Tools'
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === 'All Works'
        ? true
        : activeCategory === 'Live Vercel Sites'
        ? project.isLive
        : project.category === activeCategory;

    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono uppercase tracking-wider text-blue-400">
              Verified GitHub Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Websites & Production Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A curated catalog of real web applications, tournament platforms, e-commerce storefronts, and automated bots published to GitHub and deployed live.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search tech, title, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-xs rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800/60">
          {categories.map((cat) => {
            const isLivePill = cat === 'Live Vercel Sites';
            const count =
              cat === 'All Works'
                ? projectsData.length
                : cat === 'Live Vercel Sites'
                ? projectsData.filter((p) => p.isLive).length
                : projectsData.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {isLivePill && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    activeCategory === cat ? 'bg-blue-700 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:bg-blue-500/10 transition-colors" />

              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <span className="text-xs font-mono text-blue-400 font-medium tracking-wide uppercase">
                    {project.subtitle}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {project.isLive && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Live on Vercel</span>
                      </span>
                    )}

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded-md">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Architectural Highlights */}
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

                {/* Action buttons */}
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors group/btn"
                  >
                    <Github className="w-4 h-4 text-slate-400 group-hover/btn:text-white" />
                    <span>Source Code</span>
                  </a>

                  {project.isLive ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-3.5 py-1.5 rounded-lg shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 transition-all hover:-translate-y-0.5"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Open Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-950/40 hover:bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-800/40 transition-all"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state when search has no matches */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-slate-400">
            <p className="text-sm">No websites found matching "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All Works');
              }}
              className="mt-3 text-xs text-blue-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
