
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import GithubProjects from './GithubProjects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500">
              Portfolio
            </span>
            <span className="h-px w-12 bg-indigo-500/30"></span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] dark:text-white text-zinc-900">
              Featured <br />
              <span className="text-indigo-500">Works</span>.
            </h2>
            <p className="text-xl dark:text-zinc-400 text-zinc-500 font-medium max-w-md leading-relaxed">
              A selection of projects demonstrating proficiency in full-stack engineering, 
              software architecture, and user-centric design.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-32 border-t border-zinc-100 dark:border-zinc-800"
        >
          <GithubProjects />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
