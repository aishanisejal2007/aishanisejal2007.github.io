import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#FAF9F6] border-t border-stone-200/80 text-stone-600">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif font-bold text-stone-900 text-base">
              Aishani Sejal
            </span>
            <p className="text-xs text-stone-500">
              © Aishani Sejal. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/aishanisejal2007/C-Mini-project"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-stone-600 hover:text-purple-800 transition-colors rounded-md hover:bg-stone-100"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="p-2 text-stone-600 hover:text-purple-800 transition-colors rounded-md hover:bg-stone-100 flex items-center gap-1.5 text-xs font-medium"
              title="LinkedIn: Aishani Sejal"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Aishani Sejal</span>
            </a>

            <a
              href="mailto:aishanisejal@gmail.com"
              className="p-2 text-stone-600 hover:text-purple-800 transition-colors rounded-md hover:bg-stone-100"
              aria-label="Email Aishani Sejal"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="w-px h-4 bg-stone-300 mx-1" aria-hidden="true" />

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-xs font-medium text-stone-600 hover:text-purple-900 transition-colors p-1.5 rounded-md hover:bg-stone-100"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
