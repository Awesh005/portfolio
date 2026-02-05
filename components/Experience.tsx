
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Professional <span className="text-indigo-500">Journey</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl font-medium">
            Bridging technical documentation with software engineering to deliver high-impact results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-zinc-200 dark:via-zinc-800 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-1/2 top-0 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] md:-translate-x-1/2 z-20"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02, rotateY: idx % 2 === 0 ? 2 : -2 }}
                    className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:border-indigo-500/30 transition-all group"
                  >
                    <div className="flex flex-col mb-6">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-2">{exp.period}</span>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 mt-1">{exp.company}</p>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          <span className="text-indigo-500 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-indigo-500"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for MD screens */}
                <div className="hidden md:block w-[10%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
