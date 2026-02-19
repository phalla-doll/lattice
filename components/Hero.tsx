import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto overflow-hidden">
      {/* Headlines */}
      <div className="text-center max-w-5xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-gray-900 mb-8 leading-[1.1]">
          Where Marketing Careers <br className="hidden md:block" />
          are Built.
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          We bring ideas to life by combining years of experiences of our very talented team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-xl shadow-gray-200">
            Build career
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-base font-medium hover:border-gray-400 hover:bg-gray-50 transition-all">
            Contact us
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Visual Container */}
      <div className="relative w-full aspect-[16/12] md:aspect-[21/9] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 group">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-gray-200">
             <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                alt="Office background" 
                className="w-full h-full object-cover opacity-60 mix-blend-multiply scale-105 group-hover:scale-100 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/10 via-transparent to-white/20"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
            {/* Top Row Tags */}
            <div className="flex justify-between items-start">
                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-gray-800 uppercase shadow-sm">
                        Event
                    </span>
                    <button className="flex items-center gap-2 bg-white/90 backdrop-blur-md pl-4 pr-2 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-white transition-all shadow-sm group/btn">
                        Building career
                        <span className="bg-gray-100 rounded-full p-1 group-hover/btn:bg-gray-200 transition-colors"><ArrowRight className="w-3 h-3"/></span>
                    </button>
                 </div>
                 
                 <button className="hidden md:flex items-center gap-2 bg-white/30 backdrop-blur-xl px-6 py-3 rounded-full text-white hover:bg-white/40 transition-colors border border-white/40 shadow-lg">
                    Match yours <ArrowUpRight className="w-4 h-4"/>
                 </button>
            </div>
            
            {/* Bottom Content Area */}
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 relative z-10">
                <div className="max-w-2xl">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/40 text-white text-xs font-medium mb-6 bg-white/10 backdrop-blur-md">
                        Job Opportunities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight drop-shadow-md">
                        Efficiently transform your <br/> candidate experience.
                    </h2>
                    <p className="text-white/90 text-sm md:text-base max-w-md font-light leading-relaxed drop-shadow-md">
                        ModernLoop is the Hiring Experience Platform that automates interview scheduling to perfection, so you stay focused on the talent.
                    </p>
                </div>

                {/* Floating Avatars */}
                <div className="hidden lg:block relative w-80 h-40">
                     {/* Floating Card 1 */}
                     <div className="absolute -top-32 right-10 bg-white p-2.5 pr-6 rounded-full flex items-center gap-4 shadow-card animate-float z-20">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-12 h-12 rounded-full object-cover" alt="User" />
                        <div>
                            <p className="text-sm font-bold text-gray-900">Floyd Miles</p>
                            <p className="text-xs text-gray-500 font-medium">SEO Specialist</p>
                        </div>
                     </div>

                     {/* Floating Card 2 */}
                     <div className="absolute -top-10 -left-10 bg-white p-2.5 pr-6 rounded-full flex items-center gap-4 shadow-card animate-float-delayed z-10">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="w-12 h-12 rounded-full object-cover" alt="User" />
                         <div>
                            <p className="text-sm font-bold text-gray-900">Kristin Watson</p>
                            <p className="text-xs text-gray-500 font-medium">Acme Co.</p>
                        </div>
                     </div>

                     {/* Floating Card 3 */}
                     <div className="absolute bottom-6 right-0 bg-white p-2.5 pr-6 rounded-full flex items-center gap-4 shadow-card animate-float-slow z-30">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" className="w-12 h-12 rounded-full object-cover" alt="User" />
                         <div>
                            <p className="text-sm font-bold text-gray-900">Esther Howard</p>
                            <p className="text-xs text-gray-500 font-medium">VP of Sales</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};