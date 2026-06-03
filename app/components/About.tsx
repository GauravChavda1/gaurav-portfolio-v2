"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Cpu, Database, GitBranch, Layers, Smartphone, Zap ,} from "lucide-react";

const highlights = [
  { icon: <Smartphone size={18} />, text: "Flutter & Dart expertise for iOS & Android" },
  { icon: <Layers size={18} />, text: "Scalable architecture: MVVM, Clean Architecture" },
  { icon: <Database size={18} />, text: "Firebase, REST APIs, SQLite, Hive integration" },
  { icon: <Cpu size={18} />, text: "State management: Provider, GetX, BLoC" },
  { icon: <Zap size={18} />, text: "Performance optimization & smooth animations" },
  { icon: <GitBranch size={18} />, text: "Git workflows & collaborative development" },
  { icon: <GitBranch size={18} />, text: "Published and maintained production Flutter applications" },

];

const techStack = ["Provider", "GetX", "BLoC", "REST APIs", "Firebase", "SQLite", "Hive","WebSocket"];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      {/* BG accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Engineering Mobile Excellence
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I&apos;m <strong className="text-white">Gaurav Chavda</strong>, a Flutter Developer based in Ahmedabad, India, with 3+ years of experience building cross-platform mobile applications. I specialize in developing scalable Flutter solutions using MVVM architecture, state management, and modern mobile development practices.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              My focus is on building scalable, maintainable codebases using modern architecture patterns.
              I&apos;ve shipped multiple production Flutter apps — from fintech wallets to community platforms
              to SaaS membership systems — each engineered with clean separation of concerns, performant
              state management, and responsive and user-friendly interfaces.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              Recognized as <span className="text-cyan-400 font-medium">Employee of the Quarter</span>, I thrive
              in collaborative environments, enjoy solving complex technical challenges, and consistently
              deliver polished, production-ready software.
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.04 }}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 text-cyan-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="glass-card rounded-xl px-5 py-4 flex items-start gap-4 hover:border-cyan-500/30 transition-colors group"
              >
                <span className="text-cyan-400 mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0">
                  {item.icon}
                </span>
                <span className="text-slate-300 text-sm leading-relaxed">{item.text}</span>
              </motion.div>
            ))}

            {/* MSc Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75 }}
              className="glass-card rounded-xl px-5 py-4 border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-transparent"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-cyan-400" />
                <div>
                  <div className="text-white font-semibold text-sm">MSc in Information Technology</div>
                  <div className="text-slate-500 text-xs mt-0.5">Strong theoretical + practical foundation</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
