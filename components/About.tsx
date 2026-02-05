import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-32 dark:bg-[#0a0e23] bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">
              Driven by <span className="text-indigo-500">Innovation</span>,
              Guided by Design.
            </h2>
            <div className="space-y-6 text-lg dark:text-zinc-400 text-zinc-600 leading-relaxed">
              <p>
                As a Computer Science Engineer specializing in Full Stack
                Development, I bridge the gap between complex backend
                architectures and intuitive frontend interfaces.
              </p>
              <p>
                My approach is centered on writing clean, maintainable code that
                delivers exceptional user value. I thrive in collaborative
                environments where I can leverage my MERN stack proficiency to
                solve real-world problems.
              </p>
              <p>
                Currently completing my B.Tech at Jharkhand Rai University, I am
                focused on mastering the latest software engineering paradigms
                and delivering production-ready solutions.
              </p>
            </div>

            <div className="mt-10 flex gap-8">
              <div className="text-center">
                <h4 className="text-3xl font-black text-indigo-500 mb-1">
                  2025
                </h4>
                <p className="text-xs uppercase tracking-widest font-bold text-zinc-500">
                  Graduated
                </p>
              </div>
              <div className="text-center border-l border-zinc-200 dark:border-zinc-800 pl-8">
                <h4 className="text-3xl font-black text-indigo-500 mb-1">
                  79.9%
                </h4>
                <p className="text-xs uppercase tracking-widest font-bold text-zinc-500">
                  Academic Score
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2rem] blur-2xl"></div>
            <div className="relative p-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 text-sm">
                  /
                </span>
                Academic Path
              </h3>
              <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-8 border-l border-zinc-100 dark:border-zinc-800"
                  >
                    <div className="absolute top-1.5 left-[-4.5px] w-2 h-2 rounded-full bg-indigo-500"></div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-zinc-900 dark:text-white leading-tight">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-zinc-500 mt-1">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-xs font-black text-indigo-500 px-2 py-1 bg-indigo-500/10 rounded">
                        {edu.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/awesh.pdf"
                download
                className="mt-12 w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black uppercase tracking-widest text-sm rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                Download Resume
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
