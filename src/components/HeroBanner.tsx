import React from 'react';

interface HeroBannerProps {
  onExploreClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero-banner-section"
      className="relative overflow-hidden bg-slate-950 text-white min-h-[500px] sm:min-h-[580px] md:min-h-[640px] flex items-center justify-center border-b border-slate-200"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/custom-hero.png"
          alt="Featured Movie Banner"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = 'https://i.ibb.co/JRm0kxdt/image.png';
          }}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        <h1
          id="hero-title"
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-wider text-white mb-6 uppercase [text-shadow:_0_4px_20px_rgb(0_0_0_/_95%)]"
        >
          DISCOVER MOVIES
        </h1>

        <p
          id="hero-description"
          className="max-w-xl text-lg sm:text-xl text-white font-medium leading-relaxed mb-10 [text-shadow:_0_2px_12px_rgb(0_0_0_/_95%)]"
        >
          Explore and discover your favorite movies from around the world.
        </p>

        <button
          id="hero-explore-cta-btn"
          onClick={onExploreClick}
          className="px-10 py-3.5 text-base sm:text-lg font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-xl shadow-black/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
};
