
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const categories: Skill['category'][] = ['languages', 'frontend', 'backend', 'databases', 'tools'];
  
  return (
    <section id="skills" className="py-32 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
              Technical <br />
              <span className="text-indigo-500">Stack</span>.
            </h2>
            <p className="text-zinc-500 font-medium leading-relaxed mb-12">
              A curated selection of technologies I leverage to build robust, 
              scalable, and high-performance digital solutions.
            </p>
            
            <div className="space-y-4">
              {['Efficiency', 'Scalability', 'Maintainability'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <motion.div 
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all group"
              >
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-8 flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.filter(s => s.category === cat).map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 text-xs font-bold text-zinc-700 group-hover:border-indigo-500/20 transition-colors"
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
