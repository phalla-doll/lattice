import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkforceSection } from './components/WorkforceSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialSection } from './components/TestimonialSection';
import { LogoSection } from './components/LogoSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gray-200">
      <Navbar />
      <main>
        <Hero />
        <WorkforceSection />
        <TeamSection />
        <TestimonialSection />
        <LogoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
