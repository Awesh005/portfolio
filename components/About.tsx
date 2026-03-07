
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 dark:bg-dark-bg bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500">
                The Philosophy
              </span>
              <span className="h-px w-12 bg-indigo-500/30"></span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] dark:text-white text-zinc-900">
              Driven by <span className="text-indigo-500">Innovation</span>, <br />
              Guided by Design.
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl dark:text-zinc-400 text-zinc-600 leading-relaxed max-w-2xl">
              <p>
                As a Computer Science Engineer specializing in Full Stack Development, I bridge the gap between complex backend architectures and intuitive frontend interfaces.
              </p>
              <p className="font-serif italic text-2xl md:text-3xl dark:text-zinc-300 text-zinc-800">
                "I believe that great software is not just about code, but about creating meaningful human experiences through technology."
              </p>
              <p>
                Currently completing my B.Tech at Jharkhand Rai University, I am focused on mastering the latest software engineering paradigms and delivering production-ready solutions.
              </p>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-12">
               <div>
                  <h4 className="text-4xl font-black text-indigo-500 mb-2">2025</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500">Expected Graduation</p>
               </div>
               <div className="border-l border-zinc-200 dark:border-zinc-800 pl-12">
                  <h4 className="text-4xl font-black text-indigo-500 mb-2">79%</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500">Academic Score</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-10 bg-indigo-500/10 blur-[100px] rounded-full"></div>
            <div className="relative p-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] shadow-2xl">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500 mb-12 flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
                Academic Path
              </h3>
              <div className="space-y-12">
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
                        <h4 className="font-black text-zinc-900 dark:text-white leading-tight uppercase text-xs tracking-widest mb-2">{edu.degree}</h4>
                        <p className="text-sm text-zinc-500 font-medium">{edu.institution}</p>
                      </div>
                      <span className="text-[10px] font-black text-indigo-500 px-3 py-1 bg-indigo-500/10 rounded-full">{edu.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="mt-16 w-full py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-xl shadow-zinc-900/10 dark:shadow-white/5"
              >
                Download Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
