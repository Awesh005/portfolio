
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Performance optimized static background noise */}
      <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default Layout;
