import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full text-center mb-12 overflow-hidden">
      <div className="w-full relative">
        <img src="/images/cover.jpg" alt="PaperKolor Cover" className="w-full h-auto block" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-6 flex flex-col items-center justify-center leading-relaxed">
        <h2 className="text-4xl md:text-[4rem] font-black text-white mb-4 tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">Coloring World in Your Hands</h2>
        <p className="text-lg md:text-2xl text-white max-w-4xl mx-auto m-0 font-semibold drop-shadow-[0_1px_15px_rgba(0,0,0,0.8)]">Explore thousands of ready-to-print coloring pages, from cute animals to your favorite cartoon characters!</p>
      </div>
    </section>
  );
};

export default Hero;
