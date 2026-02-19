import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { id: '1', name: 'Savannah Nguyen', location: 'Sales Manager', role: 'Sales Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
  { id: '2', name: 'Esther Howard', location: 'Work Assistant', role: 'Work Assistant', image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=400&fit=crop' },
  { id: '3', name: 'Darlene Robertson', location: 'Product Designer', role: 'Product Designer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
];

export const TeamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Our best Team');

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      {/* Main Container */}
      <div className="relative bg-[#a3a3a3] rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white max-w-2xl leading-[1.1] tracking-tight">
              The help you Need, <br /> When you Need it.
            </h2>
            
            <div className="flex items-center gap-4">
               {/* Online Status Badge */}
               <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 shadow-sm">
                   <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                    </span>
                   <span className="text-sm font-bold text-white tracking-wide uppercase text-[11px]">Online Now</span>
               </div>
               
               <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-900 hover:scale-110 transition-transform shadow-lg">
                   <ArrowUpRight className="w-5 h-5" />
               </button>
            </div>
          </div>

          {/* Browser Interface Container */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5">
            
            {/* Browser Header / Navigation */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 border-b border-white/10">
                <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57] shadow-sm"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E] shadow-sm"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#28C840] shadow-sm"></div>
                </div>
                
                <div className="flex p-1 bg-black/20 rounded-full backdrop-blur-md overflow-x-auto no-scrollbar max-w-full">
                    {['Our best Team', 'Support', 'Strategy'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                        activeTab === tab
                            ? 'bg-white text-gray-900 shadow-lg'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                    >
                        {tab}
                    </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    
                    {/* Team Members Grid (Left) */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="group bg-white rounded-[2rem] p-5 flex flex-col gap-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                         <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                                
                                <div className="aspect-square rounded-[1.5rem] overflow-hidden w-full bg-gray-100 relative">
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 leading-tight">{member.name}</h4>
                                    <p className="text-sm text-gray-500 font-medium mt-1">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Info Card (Right) */}
                    <div className="lg:col-span-4 bg-[#111827] rounded-[2rem] p-10 flex flex-col justify-between relative overflow-hidden text-white group min-h-[400px]">
                         {/* Abstract Shape */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gray-800/50 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125"></div>
                        
                        <div className="relative z-10">
                            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-xs font-bold tracking-widest uppercase mb-8 border border-white/10">
                                Insight
                            </span>
                            <h3 className="text-3xl font-display font-medium leading-tight mb-4">
                                Enhancing the Entire Employee Cycle
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                Lattice People Platform simplifies HR operations across the entire employee and team impact cycle.
                            </p>
                        </div>
                        
                        <div className="relative z-10 pt-8">
                            <a href="#" className="inline-flex items-center gap-3 text-sm font-bold hover:text-gray-300 transition-colors group-hover:translate-x-2 duration-300">
                                Read Case Study <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
