import React, { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  { id: '1', name: 'Savannah Nguyen', location: 'Central African Republic', role: 'Sales Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop' },
  { id: '2', name: 'Esther Howard', location: 'Åland Islands', role: 'Work Assistant', image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=300&h=300&fit=crop' },
  { id: '3', name: 'Darlene Robertson', location: 'Saint Barthélemy', role: 'Louis Vuitton', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop' },
];

export const TeamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Our best Team');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="relative bg-[#ABA69C] rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-[#ABA69C]/20">
        {/* Background Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div className="absolute -top-[400px] -right-[400px] w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full">
          
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white max-w-2xl leading-[1.1] tracking-tight mb-8 md:mb-0">
              The help you Need, <br/> When you Need it.
            </h2>
            
            <div className="flex flex-col items-end gap-6">
                <div className="flex items-center gap-3 text-white">
                   <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                       <ArrowUpRight className="w-5 h-5" />
                   </button>
                   {/* Simulated Menu Button (UI element) */}
                   <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                       <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                       <span className="text-sm font-medium">Online</span>
                   </div>
                </div>
            </div>
          </div>

          {/* Simulated Interface Container */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-6 md:p-8">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                
                {['Our best Team', 'Customers Support', 'Strategy Group'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                        ? 'bg-white text-gray-900 shadow-lg shadow-black/5'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    {tab}
                </button>
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Team Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {teamMembers.map((member) => (
                    <div key={member.id} className="group bg-white rounded-3xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 leading-tight mb-0.5">{member.name}</h4>
                            <p className="text-[10px] text-gray-400 font-medium truncate max-w-[120px]">{member.location}</p>
                        </div>
                    </div>
                    
                    <div className="aspect-square rounded-2xl overflow-hidden mx-auto w-full border border-gray-100 group-hover:scale-[1.02] transition-transform duration-500">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2">
                        <span className="text-xs font-bold text-gray-500">{member.role}</span>
                        <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-black group-hover:text-white transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                    </div>
                ))}
                </div>

                {/* Right Side Info Card */}
                <div className="lg:col-span-4 bg-gray-900 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                    
                    <div>
                        <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 border border-white/10">
                            Insight
                        </div>
                        <h3 className="text-2xl font-medium leading-snug mb-4 tracking-tight">
                            Enhancing the Entire Employee Cycle
                        </h3>
                        <p className="text-gray-400 text-sm font-normal leading-relaxed mb-8">
                            Lattice People Platform simplifies HR operations across the entire employee and team impact cycle, offering a comprehensive solution.
                        </p>
                    </div>
                    
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors group-hover:translate-x-1 duration-300">
                        Read More <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
          </div>
          
           {/* Pagination Dots */}
           <div className="flex justify-center gap-2 mt-8">
             <div className="w-10 h-1 bg-white rounded-full"></div>
             <div className="w-2 h-1 bg-white/30 rounded-full"></div>
             <div className="w-2 h-1 bg-white/30 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};