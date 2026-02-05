
import React from 'react';
import { Theme } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  theme: Theme;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Performance optimized static background noise */}
      <div className="fixed inset-0 z-[-1] opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default Layout;
