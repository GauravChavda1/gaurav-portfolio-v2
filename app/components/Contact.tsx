"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GithubIcon } from "./GithubIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { Mail, ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "gauravchavda3430@gmail.com",
    href: "mailto:gauravchavda3430@gmail.com",
    color: "from-cyan-500 to-blue-600",
    border: "border-cyan-500/30",
    bg: "hover:bg-cyan-500/10",
  },
  {
    icon: <LinkedInIcon size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/gaurav-chavda",
    href: "https://www.linkedin.com/in/gauravchavda",
    color: "from-blue-500 to-indigo-600",
    border: "border-blue-500/30",
    bg: "hover:bg-blue-500/10",
  },
  {
  icon: <FaWhatsapp size={20} />,
  label: "WhatsApp",
  value: "+91 9904525377",
  href: "https://wa.me/919904525377",
  color: "from-green-500 to-emerald-600",
  border: "border-green-500/30",
  bg: "hover:bg-green-500/10",
},
  {
    icon: <GithubIcon size={20} />,
    label: "GitHub",
    value: "github.com/GauravChavda1",
    href: "https://github.com/GauravChavda1",
    color: "from-slate-400 to-slate-600",
    border: "border-slate-500/30",
    bg: "hover:bg-white/5",
  },
 
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-24 overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/4 bottom-0 w-[500px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 top-0 w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Let&apos;s Build Something Together</h2>
          <p className="text-slate-400 mt-4 text-lg max-w-xl mx-auto">
           Open to Flutter Developer roles, freelance projects, and long-term product collaborations.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden glow-border"
        >
          {/* BG gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-600/5" />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <h3 className="text-2xl font-bold text-white font-['Syne']">Gaurav Chavda</h3>
                <p className="text-cyan-400 mt-1">Flutter Developer</p>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <MapPin size={14} />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-10 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </div>

            {/* Contact Links */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`group flex flex-col gap-3 p-5 rounded-2xl border ${link.border} ${link.bg} transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`bg-gradient-to-r ${link.color} p-2.5 rounded-xl text-white`}>
                      {link.icon}
                    </div>
                    <ArrowUpRight size={16} className="text-slate-600 group-hover:text-slate-300 transition-colors" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">{link.label}</div>
                    <div className="text-white text-sm font-medium mt-0.5 truncate">{link.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Row */}
            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                Response time:{" "}
                <span className="text-slate-300">Usually within a few hours </span>
              </p>
              <a
                href="mailto:gauravchavda3430@gmail.com"
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-cyan-500/20 flex items-center gap-2"
              >
                <Mail size={15} />
                Send an Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
