
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    opened: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    opened: { opacity: 1, x: 0 },
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center px-8 py-3 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border border-black/5 shadow-xl'
            : 'bg-transparent border border-transparent'
        }`}>
          <a href="#" className="text-lg font-black tracking-tighter flex items-center gap-1 text-zinc-900">
            AWESH<span className="w-1 h-1 rounded-full bg-indigo-500"></span>
          </a>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:tracking-[0.3em] text-zinc-500 hover:text-zinc-900"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden relative z-[130] p-2 text-zinc-900 focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <motion.span 
                animate={mobileMenuOpen ? { rotate: 45, y: 8, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                className="block h-0.5 bg-current rounded-full transition-all duration-300"
              />
              <motion.span 
                animate={mobileMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0, width: '70%' }}
                className="block h-0.5 bg-current rounded-full transition-all duration-300"
              />
              <motion.span 
                animate={mobileMenuOpen ? { rotate: -45, y: -10, width: '100%' } : { rotate: 0, y: 0, width: '40%' }}
                className="block h-0.5 bg-current rounded-full transition-all duration-300"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-zinc-900/40 backdrop-blur-md z-[110]"
            />
            <motion.div 
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white z-[120] shadow-2xl flex flex-col"
            >
              <div className="flex-grow flex flex-col justify-center p-12 sm:p-20">
                <div className="flex flex-col gap-10">
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <a 
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-center gap-4"
                      >
                        <span className="text-zinc-200 font-mono text-sm group-hover:text-indigo-500 transition-colors">0{navLinks.indexOf(link) + 1}</span>
                        <span className="text-5xl sm:text-6xl font-black tracking-tighter text-zinc-900 group-hover:text-indigo-500 transition-all group-hover:pl-4">
                          {link.name}
                        </span>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                variants={itemVariants}
                className="p-12 sm:p-20 border-t border-zinc-100 flex flex-col gap-6"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Get in touch</p>
                <a href="mailto:devhelpstudio.team@gmail.com" className="text-lg font-bold text-zinc-900 hover:text-indigo-500 transition-colors">
                  devhelpstudio.team@gmail.com
                </a>
                <div className="flex gap-6">
                  {['Twitter', 'Github', 'LinkedIn'].map((social) => (
                    <a key={social} href="#" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">
                      {social}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
