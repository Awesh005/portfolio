
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500">
                Contact
              </span>
              <span className="h-px w-12 bg-indigo-500/30"></span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] text-zinc-900">
              Let's <br />
              <span className="text-indigo-500">Connect</span>.
            </h2>
            
            <p className="text-xl text-zinc-600 leading-relaxed max-w-md mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8">
              <div className="group flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Direct Email</p>
                  <a href="mailto:roshanawesh@gmail.com" className="text-lg font-bold text-zinc-900 hover:text-indigo-500 transition-colors">roshanawesh@gmail.com</a>
                </div>
              </div>
              
              <div className="group flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Base Location</p>
                  <p className="text-lg font-bold text-zinc-900">Ranchi, Jharkhand</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-zinc-50 border border-zinc-100 p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-indigo-500/5">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Your Name</label>
                    <input 
                      name="name" 
                      required 
                      type="text" 
                      disabled={loading}
                      className="w-full px-6 py-5 rounded-2xl bg-white border border-zinc-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none text-zinc-900 transition-all disabled:opacity-50 font-medium" 
                      placeholder="Enter your name" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input 
                      name="email" 
                      required 
                      type="email" 
                      disabled={loading}
                      className="w-full px-6 py-5 rounded-2xl bg-white border border-zinc-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none text-zinc-900 transition-all disabled:opacity-50 font-medium" 
                      placeholder="name@company.com" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-1">Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={5} 
                    disabled={loading}
                    className="w-full px-6 py-5 rounded-2xl bg-white border border-zinc-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none text-zinc-900 transition-all disabled:opacity-50 font-medium resize-none" 
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-zinc-900 text-white font-black uppercase tracking-[0.3em] py-6 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all transform active:scale-[0.98] shadow-2xl shadow-zinc-900/10 disabled:bg-zinc-500 disabled:cursor-not-allowed flex items-center justify-center gap-4 text-[10px]"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Transmitting...
                    </>
                  ) : 'Send Message'}
                </button>
                
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 rounded-2xl bg-green-500/10 border border-green-500/20 text-center text-green-500 font-black uppercase tracking-widest text-[10px]"
                  >
                    Message received. I'll get back to you shortly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
