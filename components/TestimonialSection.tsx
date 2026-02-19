import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Lattice has transformed how we approach performance management. The insights we gather are invaluable for our growth strategy.",
    author: "Elena Rodriguez",
    role: "VP of People",
    company: "TechFlow",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    bg: "bg-gray-50 border border-gray-100",
    text: "text-gray-900"
  },
  {
    id: 2,
    quote: "The platform is incredibly intuitive. It bridges the gap between employee engagement and business results seamlessly.",
    author: "Marcus Chen",
    role: "Director of Operations",
    company: "GlobalScale",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    bg: "bg-gray-900",
    text: "text-white"
  },
  {
    id: 3,
    quote: "Finally, a tool that puts people first. Our team feels more connected and aligned than ever before thanks to these workflows.",
    author: "Sarah Jenkins",
    role: "HR Manager",
    company: "CreativeOne",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    bg: "bg-gray-50 border border-gray-100",
    text: "text-gray-900"
  }
];

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 mb-6">
          Trusted by teams building <br /> the future.
        </h2>
        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">
          Join thousands of companies that rely on our platform to drive performance and engagement at scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div 
            key={item.id} 
            className={`relative rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[420px] group hover:-translate-y-2 transition-transform duration-500 ${item.bg} ${item.bg === 'bg-gray-900' ? 'shadow-2xl shadow-gray-900/20' : 'shadow-soft'}`}
          >
            {/* Decoration */}
            <Quote className={`w-12 h-12 mb-8 opacity-20 ${item.text === 'text-white' ? 'text-white' : 'text-black'}`} />
            
            {/* Quote */}
            <blockquote className="flex-1">
              <p className={`text-xl md:text-2xl font-medium leading-snug mb-8 ${item.text}`}>
                "{item.quote}"
              </p>
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4 mt-auto pt-8 border-t border-current border-opacity-10">
              <img 
                src={item.image} 
                alt={item.author} 
                className={`w-14 h-14 rounded-full object-cover ring-4 ${item.text === 'text-white' ? 'ring-gray-800' : 'ring-white'}`}
              />
              <div>
                <div className={`text-base font-bold ${item.text}`}>
                  {item.author}
                </div>
                <div className={`text-sm ${item.text === 'text-white' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {item.role}, {item.company}
                </div>
              </div>
            </div>

            {/* Star Rating Visual */}
            <div className="absolute top-10 right-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`w-4 h-4 fill-current ${item.text === 'text-white' ? 'text-yellow-400' : 'text-yellow-500'}`} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Logos Strip */}
      <div className="mt-24 pt-16 border-t border-gray-100">
         <p className="text-center text-xs text-gray-400 font-bold mb-10 uppercase tracking-[0.2em]">Powering teams at world-class companies</p>
         <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-all duration-700">
            {/* Simple text logos styled */}
            <span className="text-xl font-black font-mono tracking-tighter hover:text-black cursor-default">VERCEL</span>
            <span className="text-xl font-bold font-serif italic hover:text-black cursor-default">Notion</span>
            <span className="text-xl font-semibold tracking-tighter hover:text-blue-600 cursor-default">Figma</span>
            <span className="text-xl font-black hover:text-purple-600 cursor-default">Linear</span>
            <span className="text-xl font-bold tracking-widest hover:text-red-500 cursor-default">LOOM</span>
         </div>
      </div>
    </section>
  );
};