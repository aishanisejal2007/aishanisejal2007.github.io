import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects / Activities', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3'
          : 'bg-[#FAF9F6]/60 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-stone-900 focus:outline-hidden"
        >
          <span className="w-8 h-8 rounded-md bg-stone-900 text-stone-50 font-serif font-bold flex items-center justify-center text-sm tracking-tighter group-hover:bg-purple-800 transition-colors">
            AS
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-tight text-stone-900 group-hover:text-purple-800 transition-colors">
              Aishani Sejal
            </span>
            <span className="text-[11px] text-stone-500 font-medium tracking-wide">
              3rd Semester • CSE-B
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-stone-600 hover:text-purple-800 hover:bg-stone-100/60 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-4 bg-stone-300 mx-2" aria-hidden="true" />
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs lg:text-sm font-medium text-purple-900 bg-purple-50 hover:bg-purple-100/80 border border-purple-200/70 rounded-md transition-colors"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-700" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-purple-800 hover:bg-stone-100 rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-purple-600/30"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-stone-200 px-6 py-4 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-purple-800 hover:bg-purple-50/50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-stone-200">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-1.5 w-full px-4 py-2 text-sm font-medium text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-md transition-colors"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-4 h-4 text-purple-700" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
