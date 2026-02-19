import React, { useState } from 'react';
import { Search, ArrowUpRight, Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Product', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Career', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'About', href: '#' },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">Lattice</span>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-500 hover:text-black hover:bg-gray-50 px-4 py-2 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side: Actions */}
        <div className="hidden md:flex items-center gap-3">
           <button className="p-2.5 text-gray-500 hover:bg-gray-100 hover:text-black rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          
          <div className="h-4 w-px bg-gray-200 mx-1"></div>

          <button className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Log in
          </button>
          
          <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors bg-white"
          >
            {isMenuOpen ? <X className="w-4 h-4"/> : <Menu className="w-4 h-4" />}
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
           {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full py-3 text-center text-sm font-medium text-gray-600 border border-gray-200 rounded-full">
              Log in
            </button>
            <button className="flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-800 w-full shadow-lg">
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};