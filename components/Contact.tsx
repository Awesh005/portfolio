
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      // PRO TIP: If you are not using a Next.js server, 
      // replace '/api/contact' with a service like 'https://formspree.io/f/your_id'
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      // Defensive Parsing: Check if response is actually JSON
      const contentType = response.headers.get("content-type");
      let result;
      
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response received:", text);
        throw new Error(response.status === 404 
          ? "The contact API endpoint was not found (404). Ensure your backend server is running." 
          : "The server returned an invalid response.");
      }

      if (!response.ok) {
        throw new Error(result.error || `Server Error: ${response.status}`);
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset(); 
    } catch (err: any) {
      console.error('Contact Form Error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to connect to the server. Please check your internet connection.');
    } finally {
      setLoading(false);
      if (status === 'success') {
        setTimeout(() => setStatus(null), 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-24 dark:bg-zinc-950 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold dark:text-white text-zinc-900 mb-6 tracking-tighter">Let's Connect</h2>
              <p className="text-lg dark:text-zinc-400 text-zinc-600 max-w-md leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Direct Email</p>
                  <a href="mailto:roshanawesh@gmail.com" className="text-base font-bold dark:text-white text-zinc-900 hover:text-indigo-500 transition-colors">roshanawesh@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Base Location</p>
                  <p className="text-base font-bold dark:text-white text-zinc-900">Ranchi, Jharkhand</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2rem] shadow-2xl shadow-indigo-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl -mr-16 -mt-16 rounded-full"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black dark:text-zinc-400 text-zinc-500 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    name="name" 
                    required 
                    type="text" 
                    disabled={loading}
                    className="w-full px-5 py-4 rounded-xl dark:bg-zinc-800/50 bg-zinc-50 border border-zinc-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none dark:text-white text-zinc-900 transition-all disabled:opacity-50 font-medium" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black dark:text-zinc-400 text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    name="email" 
                    required 
                    type="email" 
                    disabled={loading}
                    className="w-full px-5 py-4 rounded-xl dark:bg-zinc-800/50 bg-zinc-50 border border-zinc-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none dark:text-white text-zinc-900 transition-all disabled:opacity-50 font-medium" 
                    placeholder="name@company.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black dark:text-zinc-400 text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows={4} 
                  disabled={loading}
                  className="w-full px-5 py-4 rounded-xl dark:bg-zinc-800/50 bg-zinc-50 border border-zinc-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none dark:text-white text-zinc-900 transition-all disabled:opacity-50 font-medium resize-none" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-indigo-600 text-white font-black uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-indigo-700 transition-all transform active:scale-[0.98] shadow-xl shadow-indigo-500/20 disabled:bg-zinc-500 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-xs"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center text-green-500 font-bold text-sm animate-in fade-in slide-in-from-top-2">
                  Message sent! I'll get back to you shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center text-red-500 font-bold text-sm animate-in fade-in slide-in-from-top-2">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
