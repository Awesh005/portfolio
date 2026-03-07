
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500">
              Experience
            </span>
            <span className="h-px w-12 bg-indigo-500/30"></span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] text-zinc-900">
            Professional <br />
            <span className="text-indigo-500">Journey</span>.
          </h2>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 p-10 md:p-16 rounded-[3rem] bg-white border border-zinc-200 hover:border-indigo-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="md:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 block mb-4">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-black text-zinc-900 leading-tight mb-2 group-hover:text-indigo-500 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                  {exp.company}
                </p>
              </div>
              
              <div className="md:col-span-8">
                <ul className="space-y-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-4 text-lg text-zinc-600 leading-relaxed">
                      <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Decorative background number */}
              <span className="absolute top-10 right-16 text-9xl font-black text-zinc-50 pointer-events-none select-none group-hover:text-indigo-500/5 transition-colors">
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
