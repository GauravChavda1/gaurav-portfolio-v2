"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    icon: <Briefcase size={16} />,
    role: "Flutter Developer",
    company: "Software Company, Ahmedabad",
    period: "2022 – Present",
    description:
      "Designed and developed multiple production-grade Flutter applications across diverse domains — fintech, SaaS, community platforms, IoT, and AR. Led architecture decisions, mentored peers, and delivered polished mobile experiences.",
    achievements: [
      "Built 6+ production Flutter apps shipped to real users",
      "Implemented MVVM and Clean Architecture patterns across projects",
      "Integrated Firebase, REST APIs, Bluetooth, and Google Maps",
      "Optimized app performance — smooth 60fps rendering",
      "Collaborated cross-functionally with design and backend teams",
    ],
    badge: { icon: <Star size={12} />, text: "Employee of the Quarter", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
  },
  {
    type: "work",
    icon: <Briefcase size={16} />,
    role: "Flutter Developer (Maintenance & Feature Expansion)",
    company: "Mobile Product Studio",
    period: "2022 – 2023",
    description:
      "Maintained and enhanced existing Flutter codebases, addressing technical debt while adding new features. Gained deep experience in debugging complex state management and improving app performance.",
    achievements: [
      "Refactored legacy Provider code to cleaner BLoC architecture",
      "Reduced crash rate by 40% through proactive debugging",
      "Added new feature modules without breaking existing functionality",
      "Collaborated in agile sprint cycles with clear delivery timelines",
    ],
  },
  {
    type: "education",
    icon: <GraduationCap size={16} />,
    role: "MSc in Information Technology",
    company: "University, Gujarat, India",
    period: "2020 – 2022",
    description:
      "Advanced studies in software engineering, database systems, networking, and mobile application development. Graduation project focused on mobile app architecture and cross-platform development.",
    achievements: [
      "Specialized in mobile application development",
      "Strong foundation in data structures and algorithms",
      "Project work in cross-platform mobile architectures",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Journey</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Experience & Education</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-600/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white hidden sm:flex z-10 -translate-x-2 -translate-y-2">
                  {exp.icon}
                </div>

                <div className="glass-card rounded-2xl p-6 border border-white/8 hover:border-cyan-500/20 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg font-['Syne']">{exp.role}</h3>
                      <p className="text-cyan-400 text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      {exp.badge && (
                        <span className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-medium ${exp.badge.color}`}>
                          {exp.badge.icon}
                          {exp.badge.text}
                        </span>
                      )}
                      <span className="text-slate-500 text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                  <ul className="grid sm:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, ai) => (
                      <li key={ai} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="text-cyan-500 mt-0.5 flex-shrink-0">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
