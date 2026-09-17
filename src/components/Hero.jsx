import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Terminal, ExternalLink, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-medium text-blue-300">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{personalInfo.status}</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3" /> UK / Remote
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Designing & Building{' '}
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                  Performant Web
                </span>{' '}
                Systems.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 pt-1">
                Hi, I'm <span className="text-white font-semibold">{personalInfo.name}</span> — {personalInfo.title}.
              </p>
            </div>

            {/* Paragraph */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm hover:-translate-y-0.5 transition-all duration-200 group"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-sm transition-all"
                title="GitHub Profile"
              >
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="font-mono text-xs">GitHub (70+)</span>
              </a>
            </div>

            {/* Stats Counter Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 w-full border-t border-slate-800/80">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Framed Portrait Image matching User's photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Backlight halo glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-sky-400/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Frame Card */}
              <div className="relative p-2 rounded-2xl bg-gradient-to-b from-slate-700/40 via-slate-800/30 to-slate-900/50 border border-slate-700/60 shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="/profile.jpg"
                    alt="Rafin Hasan"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle bottom gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Floating badge over image */}
                <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-slate-900/85 border border-slate-700/80 backdrop-blur-md flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <p className="text-xs font-semibold text-white">Full-Stack Lead</p>
                      <p className="text-[10px] text-slate-400">Next.js • React • Node</p>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="p-1.5 rounded-lg bg-blue-600/30 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-600 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
