"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

const projects = [
  {
    title: "DigiCash Wallet App",
    description:
      "A secure fintech wallet application with full wallet management, PIN reset flows, and biometric authentication. Built with Provider + MVVM architecture for clean separation of concerns.",
    tags: ["Flutter", "Provider", "MVVM", "Firebase", "Biometrics"],
    emoji: "💳",
    gradient: "from-cyan-500/20 to-blue-600/20",
    border: "border-cyan-500/30",
    accent: "#06b6d4",
    highlights: ["Secure authentication", "PIN management", "MVVM structure"],
  },
  {
    title: "SunooSakhi Community",
    description:
      "Women-focused social and community platform enabling safe communication and connections. Built with a future-ready, scalable Flutter architecture for rapid feature expansion.",
    tags: ["Flutter", "GetX", "Firebase", "Chat", "Community"],
    emoji: "💬",
    gradient: "from-pink-500/20 to-purple-600/20",
    border: "border-pink-500/30",
    accent: "#ec4899",
    highlights: ["Real-time chat", "Community features", "Scalable architecture"],
  },
  {
    title: "Membership Card SaaS",
    description:
      "Multi-tenant SaaS platform for membership card management. Features merchant management, branch management, customer memberships, and QR code verification.",
    tags: ["Flutter", "BLoC", "REST APIs", "Multi-tenant", "QR Code"],
    emoji: "🏢",
    gradient: "from-indigo-500/20 to-blue-700/20",
    border: "border-indigo-500/30",
    accent: "#6366f1",
    highlights: ["Multi-tenant system", "QR verification", "Merchant management"],
  },
  {
    title: "Hotel Management App",
    description:
      "Location-based hotel discovery with Google Maps integration. Enables users to find nearby hotels, view details, and connects seamlessly with booking workflows.",
    tags: ["Flutter", "Google Maps", "Location APIs", "REST APIs"],
    emoji: "🏨",
    gradient: "from-emerald-500/20 to-teal-600/20",
    border: "border-emerald-500/30",
    accent: "#10b981",
    highlights: ["Maps integration", "Location-based", "Booking-ready"],
  },
  {
    title: "AR + Text Recognition",
    description:
      "Experimental app combining OCR text recognition with AR overlays. Lays the groundwork for future AR navigation and intelligent image recognition features.",
    tags: ["Flutter", "ML Kit", "AR", "OCR", "Image Recognition"],
    emoji: "🔮",
    gradient: "from-orange-500/20 to-red-600/20",
    border: "border-orange-500/30",
    accent: "#f97316",
    highlights: ["OCR functionality", "AR overlays", "Image recognition"],
  },
  {
    title: "IoT Bluetooth Printing",
    description:
      "Flutter app for seamless integration with Bluetooth and WiFi printers. Enables barcode label printing, receipt workflows, and multi-device connectivity for IoT environments.",
    tags: ["Flutter", "Bluetooth", "WiFi Printing", "IoT", "Barcode"],
    emoji: "🖨️",
    gradient: "from-slate-500/20 to-zinc-600/20",
    border: "border-slate-500/30",
    accent: "#94a3b8",
    highlights: ["Bluetooth printing", "WiFi workflows", "Barcode labels"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Featured Projects</h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Production-level Flutter applications built with modern architecture and real users in mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`glass-card rounded-2xl p-6 border ${project.border} hover:shadow-xl transition-all duration-300 group cursor-default relative overflow-hidden`}
              style={{
                background: `radial-gradient(circle at top right, ${project.gradient.includes("cyan") ? "rgba(6,182,212,0.05)" : project.gradient.includes("pink") ? "rgba(236,72,153,0.05)" : project.gradient.includes("indigo") ? "rgba(99,102,241,0.05)" : project.gradient.includes("emerald") ? "rgba(16,185,129,0.05)" : project.gradient.includes("orange") ? "rgba(249,115,22,0.05)" : "rgba(148,163,184,0.05)"}, transparent 60%)`,
              }}
            >
              {/* Top bar */}
              <div className="flex items-start justify-between mb-5">
                <div className="text-4xl leading-none">{project.emoji}</div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="https://github.com/GauravChavda1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon size={14} />
                  </a>
                  <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>

              <h3 className="font-bold text-white text-lg mb-2 font-['Syne']">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

              {/* Highlights */}
              <ul className="mb-5 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-slate-500 text-xs">
                    <span className="w-1 h-1 rounded-full" style={{ background: project.accent }} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-400 border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
