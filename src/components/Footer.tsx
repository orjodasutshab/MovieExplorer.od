import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { SiteLogo } from './SiteLogo';

export const Footer: React.FC = () => {
  return (
    <footer id="app-footer" className="w-full bg-slate-50 border-t border-slate-200 text-slate-600 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Application name & Copyright */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1.5 shadow-2xs">
            <SiteLogo size="md" />
          </div>
          <div className="text-left">
            <span className="font-extrabold text-slate-900 text-base tracking-tight">
              Movie<span className="text-amber-500">Explorer</span>
            </span>
            <p className="text-xs text-slate-500 mt-0.5">
              Developed by <span className="font-semibold text-slate-800">Orjo Das Utshab</span> • © 2026 MovieExplorer. All rights reserved.
            </p>
          </div>
        </div>

        {/* Social / GitHub Links */}
        <div className="flex items-center gap-3">
          <a
            id="footer-github-link"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            id="footer-twitter-link"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors shadow-xs"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
