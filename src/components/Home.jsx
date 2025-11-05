import React from 'react';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="pt-14 bg-black min-h-screen">
      <Hero />
      <section className="bg-black py-16 text-center text-white">
        <h2 className="text-xl font-semibold">Explore more</h2>
        <p className="mt-2 text-white/70">Check out my projects, skills, and certifications using the navigation above.</p>
      </section>
    </div>
  );
};

export default Home;
