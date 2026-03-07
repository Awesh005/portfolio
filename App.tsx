
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

const Hero = lazy(() => import('./components/Hero'));

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.body.style.backgroundColor = '#ffffff';
  }, []);

  return (
    <Layout>
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <Hero />
        </Suspense>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-12 border-t border-zinc-100 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
          © {new Date().getFullYear()} MD AWESH • ENGINEERED WITH PRECISION
        </p>
      </footer>
    </Layout>
  );
};

export default App;
