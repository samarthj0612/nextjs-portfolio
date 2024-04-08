import React from 'react';

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Expertise from '@/components/Expertise';
import Collaboration from '@/components/Collaboration';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <Projects />
      <Expertise />
      <Collaboration />
    </main>
  );
};

export default Home;
