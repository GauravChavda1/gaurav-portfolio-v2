"use client";

import { motion } from "framer-motion";
import { ArrowDown,  Mail, Download, Layers, Zap, Star } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { FileText } from "lucide-react";
const badges = ["Flutter", "Dart", "Firebase", "REST APIs", "MVVM", "BLoC"];

const statsCards = [
  { icon: <Layers size={16} />, label: "Projects", value: "10+" },
  { icon: <Zap size={16} />, label: "Experience", value: "3+ Yrs" },
  { icon: <Star size={16} />, label: "Award", value: "EotQ" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[#030712]">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-12 w-2 h-2 rounded-full bg-cyan-400 animate-pulse opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-blue-400 animate-pulse opacity-40" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 left-16 w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse opacity-50" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
            >
              Building{" "}
              <span className="gradient-text">Scalable Mobile</span>
              <br />
              Experiences with Flutter
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Flutter Developer specializing in high-performance mobile applications,
              scalable architectures, clean UI systems, and modern user experiences.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10"
            >
              {badges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan-500/20"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-sm border border-white/15 text-slate-300 hover:border-white/30 hover:text-white transition-all glass-card"
              >
                Contact Me
              </a>
              <a
                href="/gaurav_chavda_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-sm border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center gap-2"
              >
              <FileText size={15} />
Resume
                </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 mt-8 justify-center lg:justify-start"
            >
              <span className="text-slate-600 text-xs uppercase tracking-widest">Connect</span>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/GauravChavda1", icon: <GithubIcon size={18} /> },
                  { href: "https://www.linkedin.com/in/gaurav-chavda-99b903235", icon: <LinkedInIcon size={18} /> },
                  { href: "mailto:gauravchavda3430@gmail.com", icon: <Mail size={18} /> },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 relative"
          >
            {/* Avatar ring */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer spinning ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 animate-spin-slow" />

              {/* Glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-xl" />

              {/* Avatar card */}
              <div className="absolute inset-6 rounded-full glass-card glow-border flex items-center justify-center animate-pulse-glow overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#0a1628] to-[#0d2040] flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl select-none">👨‍💻</span>
                </div>
              </div>

              {/* Floating stat cards */}
              {statsCards.map((card, i) => {
                const positions = [
                  "absolute -top-4 -right-4",
                  "absolute top-1/2 -right-16 -translate-y-1/2",
                  "absolute -bottom-4 -left-4",
                ];
                const delays = [0.5, 0.6, 0.7];
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: delays[i], type: "spring", stiffness: 200 }}
                    className={`${positions[i]} glass-card rounded-xl px-3 py-2 flex items-center gap-2 border border-white/10`}
                    style={{ animationDelay: `${i}s` }}
                  >
                    <span className="text-cyan-400">{card.icon}</span>
                    <div>
                      <div className="text-white font-bold text-sm font-['Syne']">{card.value}</div>
                      <div className="text-slate-500 text-xs">{card.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Location */}
            <div className="mt-6 text-center">
              <span className="text-slate-500 text-sm">📍 Ahmedabad, Gujarat, India</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-20"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
