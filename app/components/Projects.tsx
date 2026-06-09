// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { ArrowUpRight } from "lucide-react";
// import { GithubIcon } from "./GithubIcon";

// const projects = [
//   {
//     title: "DigiCash Wallet App",
//     playStore: "https://play.google.com/store/apps/details?id=YOUR_APP_ID",
//     description:
//       "A secure fintech wallet application with full wallet management, PIN reset flows, and biometric authentication. Built with Provider + MVVM architecture for clean separation of concerns.",
//     tags: ["Flutter", "Provider", "MVVM", "Firebase", "Biometrics"],
//     emoji: "💳",
//     gradient: "from-cyan-500/20 to-blue-600/20",
//     border: "border-cyan-500/30",
//     accent: "#06b6d4",
//     highlights: ["Secure authentication", "PIN management", "MVVM structure"],
//   },
//   {
//     title: "SunooSakhi Community",
//        playStore: "https://play.google.com/store/apps/details?id=com.sunoosakhi.app",
//     description:
//       "Women-focused social and community platform enabling safe communication and connections. Built with a future-ready, scalable Flutter architecture for rapid feature expansion.",
//     tags: ["Flutter", "GetX", "Firebase", "Chat", "Community"],
//     emoji: "💬",
//     gradient: "from-pink-500/20 to-purple-600/20",
//     border: "border-pink-500/30",
//     accent: "#ec4899",
//     highlights: ["Real-time chat", "Community features", "Scalable architecture"],
//   },
//   {
//     title: "Membership Card SaaS",
//     description:
//       "Multi-tenant SaaS platform for membership card management. Features merchant management, branch management, customer memberships, and QR code verification.",
//     tags: ["Flutter", "BLoC", "REST APIs", "Multi-tenant", "QR Code"],
//     emoji: "🏢",
//     gradient: "from-indigo-500/20 to-blue-700/20",
//     border: "border-indigo-500/30",
//     accent: "#6366f1",
//     highlights: ["Multi-tenant system", "QR verification", "Merchant management"],
//   },
//   {
//     title: "Hotel Management App",
//     description:
//       "Location-based hotel discovery with Google Maps integration. Enables users to find nearby hotels, view details, and connects seamlessly with booking workflows.",
//     tags: ["Flutter", "Google Maps", "Location APIs", "REST APIs"],
//     emoji: "🏨",
//     gradient: "from-emerald-500/20 to-teal-600/20",
//     border: "border-emerald-500/30",
//     accent: "#10b981",
//     highlights: ["Maps integration", "Location-based", "Booking-ready"],
//   },
//   {
//     title: "AR + Text Recognition",
//     description:
//       "Experimental app combining OCR text recognition with AR overlays. Lays the groundwork for future AR navigation and intelligent image recognition features.",
//     tags: ["Flutter", "ML Kit", "AR", "OCR", "Image Recognition"],
//     emoji: "🔮",
//     gradient: "from-orange-500/20 to-red-600/20",
//     border: "border-orange-500/30",
//     accent: "#f97316",
//     highlights: ["OCR functionality", "AR overlays", "Image recognition"],
//   },
//   {
//     title: "IoT Bluetooth Printing",
//     description:
//       "Flutter app for seamless integration with Bluetooth and WiFi printers. Enables barcode label printing, receipt workflows, and multi-device connectivity for IoT environments.",
//     tags: ["Flutter", "Bluetooth", "WiFi Printing", "IoT", "Barcode"],
//     emoji: "🖨️",
//     gradient: "from-slate-500/20 to-zinc-600/20",
//     border: "border-slate-500/30",
//     accent: "#94a3b8",
//     highlights: ["Bluetooth printing", "WiFi workflows", "Barcode labels"],
//   },
// ];

// export default function Projects() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <section id="projects" ref={ref} className="relative py-24 overflow-hidden">
//       <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-6xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="mb-16"
//         >
//           <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Portfolio</span>
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Featured Projects</h2>
//           <p className="text-slate-400 mt-3 max-w-xl">
//             Production-level Flutter applications built with modern architecture and real users in mind.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: i * 0.08 }}
//               className={`glass-card rounded-2xl p-6 border ${project.border} hover:shadow-xl transition-all duration-300 group cursor-default relative overflow-hidden`}
//               style={{
//                 background: `radial-gradient(circle at top right, ${project.gradient.includes("cyan") ? "rgba(6,182,212,0.05)" : project.gradient.includes("pink") ? "rgba(236,72,153,0.05)" : project.gradient.includes("indigo") ? "rgba(99,102,241,0.05)" : project.gradient.includes("emerald") ? "rgba(16,185,129,0.05)" : project.gradient.includes("orange") ? "rgba(249,115,22,0.05)" : "rgba(148,163,184,0.05)"}, transparent 60%)`,
//               }}
//             >
//               {/* Top bar */}
//               <div className="flex items-start justify-between mb-5">
//                 <div className="text-4xl leading-none">{project.emoji}</div>
//                 <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <a
//                     href="https://github.com/GauravChavda1"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
//                     title="GitHub"
//                   >
//                     <GithubIcon size={14} />
//                   </a>
                  
//                   <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
//                     <ArrowUpRight size={14} />
//                   </button>
//                 </div>
//               </div>

//               <h3 className="font-bold text-white text-lg mb-2 font-['Syne']">{project.title}</h3>
//               <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

//               {/* Highlights */}
//               <ul className="mb-5 space-y-1.5">
//                 {project.highlights.map((h) => (
//                   <li key={h} className="flex items-center gap-2 text-slate-500 text-xs">
//                     <span className="w-1 h-1 rounded-full" style={{ background: project.accent }} />
//                     {h}
//                   </li>
//                 ))}
//               </ul>

//               {/* Tags */}
//               <div className="flex flex-wrap gap-1.5 mt-auto">
//                 {project.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-2 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-400 border border-white/8"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

const projects = [
  {
    title: "DigiCash Wallet App",
    playStore: "https://play.google.com/store/apps/details?id=com.digicash.digital.digicash",// ← replace with real ID
    description:
      "A secure fintech wallet application with full wallet management, PIN reset flows, and biometric authentication. Built with Provider + MVVM architecture for clean separation of concerns.",
    tags: ["Flutter", "Provider", "MVVM", "Firebase", "Biometrics"],
    logo: "/images/digicash-logo.png",  // ← emoji ki jagah
    gradient: "from-green-500/20 to-emerald-600/20",  // ← cyan → green
  border: "border-green-500/30",                     // ← cyan → green
  accent: "#22c55e", 
    highlights: ["Secure authentication", "PIN management", "MVVM structure"],
  },
  {
    title: "SunooSakhi Community",
    playStore: "https://play.google.com/store/apps/details?id=com.sunoosakhi.app",
    description:
      "Women-focused social and community platform enabling safe communication and connections. Built with a future-ready, scalable Flutter architecture for rapid feature expansion.",
    tags: ["Flutter", "GetX", "Firebase", "Chat", "Community"],
    logo: "/images/sunoosakhi-logo.png",  // ← emoji ki jagah
    gradient: "from-pink-500/20 to-purple-600/20",
    border: "border-pink-500/30",
    accent: "#ec4899",
    highlights: ["Real-time chat", "Community features", "Scalable architecture"],
  },
  
  {
  title: "HRMS Employee App",
  playStore: "https://play.google.com/store/apps/details?id=com.newpraso.hrms",
  description:
    "Full-featured HR management app with persistent background location tracking — employee location is tracked continuously from check-in to check-out, even when the app is closed. Includes leave management, sales target tracking, client visit logging, and real-time admin notices.",
  tags: ["Flutter", "REST APIs", "Background Location", "HR Tech", "Foreground Service"],
  logo: "/images/praso-logo.png",  // ← emoji ki jagah
 gradient: "from-red-500/20 to-orange-600/20",
border: "border-red-500/30",
accent: "#ef4444",
  highlights: [
    "Background tracking — works even when app is closed",
    "Check-in / Check-out with live location",
    "Leave apply & sales target tracking",
  ],
},
{
  title: "CricPG - Live Cricket",
  playStore: "https://play.google.com/store/apps/details?id=com.iottive.cricket_app",
  description:
    "Real-time cricket score app using WebSocket connections for instant live match updates — no polling, pure push-based data. Features live scores, upcoming matches, and complete past match history.",
  tags: ["Flutter", "WebSocket", "Real-time", "REST APIs", "Sports Tech"],
   logo: "/images/cricpg-logo.png",  // ← emoji ki jagah
 gradient: "from-blue-500/20 to-indigo-600/20",
border: "border-blue-500/30",
accent: "#3b82f6",
  highlights: [
    "WebSocket — live scores without polling",
    "Live, upcoming & past matches",
    "Real-time push data architecture",
  ],
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
                background: `radial-gradient(circle at top right, ${
                  project.gradient.includes("cyan")
                    ? "rgba(6,182,212,0.05)"
                    : project.gradient.includes("pink")
                    ? "rgba(236,72,153,0.05)"
                    : project.gradient.includes("indigo")
                    ? "rgba(99,102,241,0.05)"
                    : project.gradient.includes("emerald")
                    ? "rgba(16,185,129,0.05)"
                    : project.gradient.includes("orange")
                    ? "rgba(249,115,22,0.05)"
                    : "rgba(148,163,184,0.05)"
                }, transparent 60%)`,
              }}
            >
              {/* Top bar */}
              <div className="flex items-start justify-between mb-5">
                {/* <div className="text-4xl leading-none">{project.emoji}</div>
                 */}
                 <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10">
    <img
      src={project.logo}
      alt={project.title}
      className="w-full h-full object-cover"
    />
  </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* GitHub link */}
                  <a
                    href="https://github.com/GauravChavda1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon size={14} />
                  </a>

                  {/* Play Store link — only shown if playStore URL exists */}
                  {project.playStore && (
                    <a href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-green-400 transition-colors"
                      title="View on Play Store"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
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
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-400 border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Play Store badge — shown inline below tags */}
             {project.playStore && (
  
   <a href={project.playStore}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
    style={{ background: "rgba(1,135,80,0.15)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.2)" }}
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l15 8.5-15 8.5c-.5.33-1.5.33-1.5-.5z"/>
    </svg>
    Play Store
  </a>
)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}