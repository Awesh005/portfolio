
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const categories: Skill['category'][] = ['languages', 'frontend', 'backend', 'databases', 'tools'];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-[#0f172a]/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">Technical Expertise</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical toolkit, categorized by domain and proficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <motion.div 
              key={cat}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-500 mb-6">{cat}</h3>
              <div className="grid grid-cols-1 gap-3">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-indigo-500/50 transition-all cursor-default"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-bold text-zinc-700 dark:text-zinc-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
