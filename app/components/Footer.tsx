"use client";

import {   Mail, Code2 } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { LinkedInIcon } from "./LinkedInIcon";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Code2 size={14} className="text-white" />
          </div>
          <span className="font-semibold text-white font-['Syne'] text-sm">
            Gaurav Chavda<span className="text-cyan-400">.</span>
          </span>
        </div>

        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Gaurav Chavda · Flutter Developer · Ahmedabad, India
        </p>

        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/GauravChavda1", icon: <GithubIcon size={16} /> },
            { href: "https://www.linkedin.com/in/gaurav-chavda-99b903235", icon: <LinkedInIcon size={16} /> },
            { href: "mailto:gauravchavda3430@gmail.com", icon: <Mail size={16} /> },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
