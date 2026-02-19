import React from 'react';

export const LogoSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-16">
          Powering teams at world-class companies
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-16 items-center justify-items-center opacity-40 hover:opacity-100 transition-all duration-700">
            {/* Row 1 */}
            <span className="text-2xl font-black font-mono tracking-tighter text-gray-900 cursor-default">VERCEL</span>
            <span className="text-2xl font-bold font-serif italic text-gray-900 cursor-default">Notion</span>
            <span className="text-2xl font-semibold tracking-tighter text-gray-900 cursor-default">Figma</span>
            <span className="text-2xl font-black text-gray-900 cursor-default">Linear</span>
            <span className="text-2xl font-bold tracking-widest text-gray-900 cursor-default">LOOM</span>
            <span className="text-2xl font-extrabold tracking-tight text-gray-900 cursor-default">Retool</span>
            
            {/* Row 2 */}
            <span className="text-xl font-bold text-gray-900 font-sans cursor-default">Brex</span>
            <span className="text-xl font-semibold text-gray-900 cursor-default">Airtable</span>
            <span className="text-xl font-black italic text-gray-900 cursor-default">Rippling</span>
            <span className="text-xl font-medium text-gray-900 cursor-default">Amplitude</span>
            <span className="text-xl font-bold font-serif text-gray-900 cursor-default">Substack</span>
            <span className="text-xl font-extrabold tracking-tighter text-gray-900 cursor-default">Arc</span>
         </div>
      </div>
    </section>
  );
};
