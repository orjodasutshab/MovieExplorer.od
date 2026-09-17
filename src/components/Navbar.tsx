import React, { useState } from 'react';
import { Home, Film, Menu, X } from 'lucide-react';
import { SiteLogo } from './SiteLogo';

interface NavbarProps {
  currentPage: 'home' | 'movies';
  onNavigate: (page: 'home' | 'movies') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: 'home' | 'movies') => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 text-slate-900 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand: Logo in rounded card + Styled Typography */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 cursor-pointer focus:outline-none group text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-amber-50 border border-slate-200 group-hover:border-amber-300/80 flex items-center justify-center p-1.5 transition-all shadow-2xs">
            <SiteLogo size="md" className="group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <div className="flex items-center">
              <span className="font-extrabold text-xl text-slate-900 tracking-tight">
                Movie<span className="text-amber-500">Explorer</span>
              </span>
            </div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 -mt-0.5">
              Discover & Stream
            </p>
          </div>
        </button>

        {/* Desktop Nav Controls - Clean, balanced, and cohesive */}
        <div className="hidden md:flex items-center gap-3">
          {/* Navigation Tab Group */}
          <nav aria-label="Main Navigation" className="bg-slate-100/90 p-1.5 rounded-2xl flex items-center gap-1.5 border border-slate-200/80 shadow-2xs">
            <button
              id="nav-home-btn"
              onClick={() => handleNav('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-white text-slate-950 shadow-xs border border-slate-200/70 font-bold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
              }`}
            >
              <Home className={`w-4 h-4 ${currentPage === 'home' ? 'text-amber-500' : 'text-slate-400'}`} />
              <span>Home</span>
            </button>

            <button
              id="nav-movies-btn"
              onClick={() => handleNav('movies')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                currentPage === 'movies'
                  ? 'bg-amber-400 text-slate-950 shadow-xs font-bold border border-amber-500/20'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
              }`}
            >
              <Film className={`w-4 h-4 ${currentPage === 'movies' ? 'text-slate-950' : 'text-slate-400'}`} />
              <span>Movies</span>
            </button>
          </nav>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none cursor-pointer transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 py-4 space-y-2.5 shadow-md">
          <button
            id="mobile-nav-home"
            onClick={() => handleNav('home')}
            className={`w-full flex items-center gap-3 py-2.5 px-3.5 text-sm font-semibold rounded-xl cursor-pointer transition-all ${
              currentPage === 'home'
                ? 'bg-amber-50 text-amber-700 border border-amber-200/80 font-bold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Home className={`w-4 h-4 ${currentPage === 'home' ? 'text-amber-600' : 'text-slate-400'}`} />
            <span>Home</span>
          </button>

          <button
            id="mobile-nav-movies"
            onClick={() => handleNav('movies')}
            className={`w-full flex items-center gap-3 py-2.5 px-3.5 text-sm font-semibold rounded-xl cursor-pointer transition-all ${
              currentPage === 'movies'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Film className={`w-4 h-4 ${currentPage === 'movies' ? 'text-slate-950' : 'text-slate-400'}`} />
            <span>Movies</span>
          </button>
        </div>
      )}
    </header>
  );
};
