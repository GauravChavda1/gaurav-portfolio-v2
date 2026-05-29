"use client";

import { motion } from "framer-motion";
import {
  FaAndroid,
  FaApple,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import { SiFlutter } from "react-icons/si";
import {
  SiFirebase,
  SiDart,
  SiPostman,
  SiHive,
  SiGooglemaps,
  Si1And1,
  SiJira,
  SiSqlite,
} from "react-icons/si";

import {
  HiOutlineCloud,
  HiOutlineCog,
  HiOutlineDatabase,
  HiOutlineLocationMarker,
  HiOutlineLightningBolt,
  HiOutlineCode,

} from "react-icons/hi";
import { FaFlutter } from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Mobile Development",
    icon: <FaFlutter />,
    color: "cyan",
    skills: [
      { name: "Flutter", icon: <FaFlutter /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "Android", icon: <FaAndroid /> },
      { name: "iOS", icon: <FaApple /> },
    ],
  },
  {
    title: "State Management",
    icon: <HiOutlineCog />,
    color: "purple",
    skills: [
      { name: "Provider", icon: "⚛️" },
      { name: "GetX", icon: "✖️" },
      { name: "BLoC", icon: "🔷" },
      { name: "MVVM", icon: "🛡️" },
    ],
  },
  {
    title: "Backend & Services",
    icon: <HiOutlineCloud />,
    color: "blue",
    skills: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "REST APIs", icon: "🌐" },
      { name: "FCM", icon: "☁️" },
      { name: "Auth", icon: "🛡️" },
    ],
  },
  {
    title: "Database & Storage",
    icon: <HiOutlineDatabase />,
    color: "green",
    skills: [
      { name: "Firestore", icon: <SiFirebase /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "Hive", icon: <SiHive /> },
      { name: "SharedPrefs", icon: "⚙️" },
    ],
  },
  {
    title: "Maps & Location",
    icon: <HiOutlineLocationMarker />,
    color: "pink",
    skills: [
      { name: "Google Maps", icon: <SiGooglemaps /> },
      { name: "Geolocation", icon: "📍" },
      { name: "Places API", icon: "🗺️" },
      { name: "Distance Calc", icon: "📏" },
    ],
  },
  {
    title: "Advanced Features",
    icon: <HiOutlineLightningBolt />,
    color: "yellow",
    skills: [
      { name: "Bluetooth", icon: "📶" },
      { name: "WiFi Printing", icon: "🖨️" },
      { name: "OCR", icon: "📸" },
      { name: "AR", icon: "🥽" },
      { name: "Camera", icon: "📷" },
      { name: "Deep Linking", icon: "🔗" },
    ],
  },
  {
    title: "Architecture",
    icon: <HiOutlineCode />,
    color: "violet",
    skills: [
      { name: "Clean Architecture", icon: "🏛️" },
      { name: "Repository", icon: "📁" },
      { name: "Dependency Injection", icon: "🧩" },
      { name: "Modular Code", icon: "⚡" },
    ],
  },
  {
    title: "Tools & Others",
    icon: <SiFlutter />,
    color: "orange",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Jira", icon: <SiJira /> },
    ],
  },
];

const colorMap: Record<string, string> = {
  cyan: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  purple: "text-purple-400 border-purple-500/20 bg-purple-500/10",
  blue: "text-blue-400 border-blue-500/20 bg-blue-500/10",
  green: "text-green-400 border-green-500/20 bg-green-500/10",
  pink: "text-pink-400 border-pink-500/20 bg-pink-500/10",
  yellow: "text-yellow-400 border-yellow-500/20 bg-yellow-500/10",
  violet: "text-violet-400 border-violet-500/20 bg-violet-500/10",
  orange: "text-orange-400 border-orange-500/20 bg-orange-500/10",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-[#050d18] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00d4ff10,transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#7c3aed10,transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Expertise
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Skills & Technologies
          </h2>

          <div className="w-20 h-1 bg-cyan-400 rounded-full mt-6 mb-6" />

          <p className="text-slate-400 text-lg max-w-xl">
            Technologies and tools I use to build high-quality,
            scalable and user-focused applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="
                bg-[#08111f]
                border border-white/10
                rounded-3xl
                p-6
                min-h-[320px]
                hover:border-white/20
                transition-all
                duration-300
              "
            >
              <div
                className={`
                  w-16 h-16 rounded-2xl
                  flex items-center justify-center
                  text-3xl
                  border
                  ${colorMap[group.color]}
                `}
              >
                {group.icon}
              </div>

              <h3 className="text-white text-2xl font-semibold mt-6">
                {group.title}
              </h3>

              <div
                className={`w-12 h-1 rounded-full mt-4 mb-6 ${colorMap[
                  group.color
                ].split(" ")[2]}`}
              />

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex items-center gap-2
                      px-4 py-2
                      rounded-xl
                      border border-white/10
                      bg-[#0d1727]
                      text-slate-200
                      text-sm
                    "
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-500">
            ✨ Always learning new technologies and improving my skills.
          </p>
        </div>
      </div>
    </section>
  );
}