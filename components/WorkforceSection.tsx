import React from 'react';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';

export const WorkforceSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto bg-white">
      <div className="flex flex-col lg:flex-row gap-12 mb-24">
        
        {/* Left Column Content */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-gray-900 leading-[1.1]">
              Quickly Expand your <br /> Workforce.
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-normal max-w-lg leading-relaxed">
              Take advantage of our global employment products to hire who you want, wherever you want - starting in just minutes
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Employee Card */}
            <div className="group relative bg-gray-50 rounded-[2.5rem] p-8 h-[360px] transition-all hover:bg-gray-100 hover:shadow-lg hover:shadow-gray-100/50 overflow-hidden border border-gray-100">
               <div className="absolute top-8 left-8 z-10">
                   <span className="inline-block px-4 py-1.5 bg-white rounded-full text-xs font-bold text-gray-900 shadow-sm mb-6 uppercase tracking-wider">
                       Employees
                   </span>
                   <div className="flex -space-x-3 mt-2 pl-1">
                       {[1,2,3].map(i => (
                           <img key={i} src={`https://picsum.photos/60/60?random=${i+10}`} className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Avatar"/>
                       ))}
                   </div>
               </div>
               
               <div className="absolute bottom-8 left-8 z-10">
                   <p className="text-3xl font-display font-medium text-gray-900 mb-1 leading-tight tracking-tight">Hire <br/> Employees</p>
               </div>
               <div className="absolute bottom-8 right-8 z-10">
                   <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-black group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                       <ArrowUpRight className="w-5 h-5" />
                   </button>
               </div>
               {/* Background image decoration */}
               <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80" className="absolute top-1/2 -right-16 w-64 h-80 object-cover rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform rotate-12" alt="Decoration" />
            </div>

            {/* Contractor Card */}
            <div className="group relative bg-[#1F2937] rounded-[2.5rem] p-8 h-[360px] transition-all hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/20 overflow-hidden">
               <div className="absolute top-8 left-8 z-10">
                   <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white mb-6 uppercase tracking-wider border border-white/10">
                       Force
                   </span>
                   <div className="flex mt-2">
                       <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" className="w-14 h-14 rounded-full border-2 border-gray-600 object-cover" alt="Avatar"/>
                   </div>
               </div>
               
               <div className="absolute bottom-8 left-8 z-10">
                   <p className="text-3xl font-display font-medium text-white mb-1 leading-tight tracking-tight">Hire a <br/> Contractor</p>
               </div>
               <div className="absolute bottom-8 right-8 z-10">
                   <button className="w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110 border border-white/10">
                       <ArrowUpRight className="w-5 h-5" />
                   </button>
               </div>
                 {/* Background image decoration */}
                 <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" alt="Decoration" />
            </div>
          </div>
          
           {/* Pagination Arrows */}
            <div className="flex items-center gap-4">
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                 <button className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

        </div>

        {/* Right Column - Featured Profile */}
        <div className="w-full lg:w-[420px] lg:pt-12">
            <div className="relative w-full h-[600px] lg:h-full rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-gray-200">
                <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" 
                    alt="Savannah Nguyen" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-12 left-10 right-10">
                    <h3 className="text-3xl font-display font-medium text-white mb-2 tracking-tight">Savannah Nguyen</h3>
                    <p className="text-gray-300 text-base font-light mb-6">CEO, Los Angeles, USA</p>
                    <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-white rounded-full"></div>
                    </div>
                </div>

                 <div className="absolute top-8 right-8">
                    <button className="bg-white/10 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-white/20 hover:bg-white/20 transition-colors">
                        Featured
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Logo Footer */}
      <div className="border-t border-gray-100 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
            <span className="text-2xl font-black font-mono text-gray-800">tatari</span>
            <span className="text-2xl font-bold font-serif italic text-gray-800">Brex</span>
            <span className="text-2xl font-semibold text-gray-800 tracking-tighter">Assembled</span>
            <span className="text-2xl font-extrabold text-gray-800 tracking-tight">Thumbtack</span>
            <div className="flex items-center gap-2 text-gray-800">
                 <div className="w-6 h-6 bg-gray-800 rounded-sm"></div>
                 <span className="text-2xl font-display font-bold">Lattice</span>
            </div>
        </div>
      </div>
    </section>
  );
};