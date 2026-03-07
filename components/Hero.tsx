
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroCanvas from './HeroCanvas';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
  const titleY = useTransform(scrollY, [0, 500], [0, 100]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center bg-white">
      {/* WebGL Background Effect */}
      <HeroCanvas />
      
      {/* Dynamic Background Elements (Subtle Overlays) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1, rotate: rotate1 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] bg-indigo-500/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="h-[1px] w-12 bg-indigo-500"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500">
              Full Stack Engineer • 2025
            </span>
          </motion.div>
          
          <div className="relative mb-12">
            <motion.h1 
              style={{ y: titleY, opacity: titleOpacity }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[18vw] md:text-[14vw] font-black leading-[0.82] tracking-[-0.04em] uppercase text-zinc-900"
            >
              MD <br />
              <span className="text-indigo-600">AWESH</span>.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -right-4 top-0 md:right-0 md:top-1/4 hidden lg:block"
            >
              <div className="w-40 h-40 rounded-full border border-zinc-200 flex items-center justify-center p-4 text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest leading-tight text-zinc-500">
                  Crafting <br /> Digital <br /> Excellence
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-end">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="md:col-span-7"
            >
              <p className="text-xl md:text-3xl text-zinc-700 leading-tight font-medium tracking-tight">
                Architecting high-performance web applications with a focus on 
                <span className="italic font-serif text-indigo-500"> precision, </span>
                <span className="italic font-serif text-indigo-500"> scalability, </span>
                and user-centric design.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="md:col-span-5 flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#projects" 
                className="group relative px-8 py-5 bg-zinc-900 text-white rounded-full font-black uppercase tracking-widest text-[10px] overflow-hidden transition-all hover:scale-105 active:scale-95 text-center"
              >
                <span className="relative z-10">Explore Work</span>
                <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a 
                href="#contact" 
                className="px-8 py-5 border border-zinc-200 rounded-full font-black uppercase tracking-widest text-[10px] text-zinc-900 hover:bg-zinc-50 transition-all hover:scale-105 active:scale-95 text-center"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-16 bg-gradient-to-b from-indigo-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
