import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </div>
          <span className="text-lg font-display font-bold">Lattice</span>
        </div>
        <p className="text-gray-500 text-sm">© 2024 Lattice. All rights reserved. Design clone for educational purposes.</p>
        <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-black text-sm transition-colors duration-200 hover:underline hover:decoration-gray-300 underline-offset-4">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-black text-sm transition-colors duration-200 hover:underline hover:decoration-gray-300 underline-offset-4">Terms</a>
            <a href="#" className="text-gray-500 hover:text-black text-sm transition-colors duration-200 hover:underline hover:decoration-gray-300 underline-offset-4">Cookies</a>
        </div>
      </div>
    </footer>
  );
};