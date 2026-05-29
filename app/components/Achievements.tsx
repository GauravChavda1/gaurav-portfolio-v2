"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, Layers, Rocket, Shield, Smartphone } from "lucide-react";

const achievements = [
  {
    icon: <Award size={24} />,
    title: "Employee of the Quarter",
    description: "Recognized for outstanding performance, technical contribution, and collaborative work ethic.",
    color: "from-amber-500/20 to-orange-600/20",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "MSc in Information Technology",
    description: "Advanced academic foundation in software engineering, mobile development, and computer science.",
    color: "from-cyan-500/20 to-blue-600/20",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Cross-Platform Expertise",
    description: "Proficient in delivering consistent, native-quality experiences on both iOS and Android.",
    color: "from-blue-500/20 to-indigo-600/20",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: <Rocket size={24} />,
    title: "Production Deployments",
    description: "Multiple apps shipped to the Google Play Store, from concept to live production.",
    color: "from-indigo-500/20 to-purple-600/20",
    border: "border-indigo-500/30",
    iconColor: "text-indigo-400",
  },
  {
    icon: <Layers size={24} />,
    title: "Architecture Mastery",
    description: "Deep expertise in MVVM, Clean Architecture, BLoC, GetX, and Provider patterns.",
    color: "from-purple-500/20 to-pink-600/20",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: <Shield size={24} />,
    title: "Fintech & SaaS Experience",
    description: "Delivered secure, scalable applications in demanding fintech and multi-tenant SaaS environments.",
    color: "from-emerald-500/20 to-teal-600/20",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Recognition</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Achievements & Highlights</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`glass-card rounded-2xl p-6 border ${item.border} hover:scale-[1.02] transition-all duration-300 cursor-default relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50 group-hover:opacity-70 transition-opacity`} />
              <div className="relative z-10">
                <div className={`mb-4 ${item.iconColor}`}>{item.icon}</div>
                <h3 className="font-bold text-white mb-2 font-['Syne']">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
