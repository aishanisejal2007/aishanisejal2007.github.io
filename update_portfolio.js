const fs = require('fs');
const path = require('path');

const targetBase = path.resolve('..', 'aishani sejal-portfolio', 'portfolio', 'src');
console.log('Target base:', targetBase);

// 1. App.tsx
const appTsx = `import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#18181B] font-sans selection:bg-purple-100 selection:text-purple-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
`;

// 2. Navbar.tsx
const navbarTsx = `import React, { useState, useEffect } from 'react';
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
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${
        scrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3'
          : 'bg-[#FAF9F6]/60 backdrop-blur-xs border-b border-transparent py-5'
      }\`}
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
`;

// 3. Hero.tsx
const heroTsx = `import React from 'react';
import { ArrowDown, Mail, FolderCode, GraduationCap, Target, Terminal, GitBranch } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left / Main Editorial Column */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            
            {/* Status & Branch Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-900 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span>3rd Semester • Computer Science and Engineering – B (CSE-B)</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 font-serif leading-[1.12]">
                Aishani Sejal
              </h1>
              <p className="text-lg sm:text-xl font-medium text-stone-700 tracking-tight">
                Computer Science and Engineering – B (CSE-B) • 3rd Semester
              </p>
            </div>

            {/* Learning Goal Card */}
            <div className="w-full bg-[#F6F5F0] border border-stone-200/90 rounded-lg p-4 sm:p-5 flex items-start gap-3">
              <div className="p-2 rounded-md bg-purple-100/80 text-purple-900 shrink-0 mt-0.5">
                <Target className="w-4 h-4 text-purple-800" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-800 block mb-1">
                  Primary Learning Goal
                </span>
                <p className="text-sm sm:text-base font-serif italic text-stone-800 leading-relaxed">
                  "I want to improve my programming and problem-solving skills and learn DSA, databases and software development."
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-stone-900 text-stone-50 hover:bg-purple-900 text-sm font-medium transition-all shadow-xs"
              >
                <FolderCode className="w-4 h-4" />
                <span>View Activities</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://github.com/aishanisejal2007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-stone-50 border border-stone-300 text-stone-800 hover:bg-stone-100 hover:border-stone-400 text-sm font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4 text-stone-700" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-purple-50 border border-purple-200/80 text-purple-900 hover:bg-purple-100/90 text-sm font-medium transition-all"
              >
                <Mail className="w-4 h-4 text-purple-700" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Academic Profile Box */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-[#F6F5F0] border border-stone-200/90 rounded-lg p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3.5">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-stone-500">
                  Student Profile
                </span>
                <span className="text-xs text-purple-800 font-medium bg-purple-100/70 px-2 py-0.5 rounded">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-stone-200/60 text-stone-800 shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4 text-purple-800" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Branch & Section</h2>
                    <p className="text-sm font-medium text-stone-900 mt-0.5">
                      Computer Science and Engineering – B (CSE-B)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-stone-200/60 text-stone-800 shrink-0 mt-0.5">
                    <Terminal className="w-4 h-4 text-purple-800" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Academic Term</h2>
                    <p className="text-sm font-medium text-stone-900 mt-0.5">
                      3rd Semester
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-stone-200/60 text-stone-800 shrink-0 mt-0.5">
                    <GitBranch className="w-4 h-4 text-purple-800" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Key Focus</h2>
                    <p className="text-sm font-medium text-stone-900 mt-0.5">
                      Programming, DSA, Version Control
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500 leading-relaxed">
                Academic portfolio documenting coursework progress, verified coding practices, and laboratory activities.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
`;

// 4. About.tsx
const aboutTsx = `import React from 'react';
import { Target, User, BookOpen, GitBranch } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            <span>01 / Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-stone-900">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl">
            Academic background, student details, and dedicated learning objectives.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 text-base leading-relaxed">
            <div className="p-5 rounded-lg bg-[#FAF9F6] border border-stone-200/90 space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                Student Information
              </h3>
              <div className="space-y-1.5 text-sm sm:text-base">
                <p><strong className="text-stone-900 font-semibold">Name:</strong> Aishani Sejal</p>
                <p><strong className="text-stone-900 font-semibold">Semester:</strong> 3rd Semester</p>
                <p><strong className="text-stone-900 font-semibold">Branch:</strong> Computer Science and Engineering – B (CSE-B)</p>
              </div>
            </div>

            <p>
              I am <strong className="text-stone-900 font-semibold">Aishani Sejal</strong>, currently pursuing my undergraduate degree in <strong className="text-stone-900 font-semibold">Computer Science and Engineering – B (CSE-B)</strong> in the <strong className="text-stone-900 font-semibold">3rd Semester</strong>. My academic journey is centered on establishing a rigorous foundation in core computer science, procedural programming, and disciplined problem solving.
            </p>

            {/* Exact Learning Goal */}
            <div className="p-5 rounded-lg bg-[#F6F5F0] border-l-4 border-purple-700 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-900">
                <Target className="w-4 h-4 text-purple-700" />
                <span>Learning Goal</span>
              </div>
              <p className="text-stone-800 text-base font-serif italic">
                "I want to improve my programming and problem-solving skills and learn DSA, databases and software development."
              </p>
            </div>

            <p>
              Through hands-on laboratory exercises, I focus on mastering programming workflows in Visual Studio Code, maintaining code repositories using Git and GitHub, and tackling algorithmic problem sets on LeetCode across arrays, strings, basic algorithms, stacks, and linked lists.
            </p>
          </div>

          {/* Right Column: Focus Summary Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 rounded bg-purple-50 text-purple-800">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">Student Profile</h3>
              </div>
              <p className="text-xs text-stone-600 leading-normal">
                Aishani Sejal • 3rd Semester • Computer Science and Engineering – B (CSE-B)
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 rounded bg-purple-50 text-purple-800">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">Core Academics</h3>
              </div>
              <p className="text-xs text-stone-600 leading-normal">
                Studying core programming in C, Java, Python, SQL, and mastering foundational data structures and algorithmic concepts.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 rounded bg-purple-50 text-purple-800">
                  <GitBranch className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">Tooling & Workflow</h3>
              </div>
              <p className="text-xs text-stone-600 leading-normal">
                Practical version control and collaborative workflows utilizing VS Code, Git, and public GitHub repositories.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
`;

// 5. Projects.tsx (Projects / Activities)
const projectsTsx = `import React from 'react';
import { ArrowUpRight, CheckCircle2, GitBranch, Terminal, Users, Code2 } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            <span>02 / Coursework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-stone-900">
            Projects / Activities
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-2xl">
            Documented academic activities covering development environment setup, version control, collaboration, and algorithmic practice.
          </p>
        </div>

        <div className="space-y-10">
          
          {/* =========================================================
              ACTIVITY 1: VS Code Setup and Hello World
             ========================================================= */}
          <article className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-8 transition-all hover:border-purple-300 hover:shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-stone-200/80 border border-stone-300/80 text-stone-800 text-xs font-semibold uppercase tracking-wider">
                  Activity 01
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  Development Environment Setup
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-stone-100 text-stone-800">
                  <Terminal className="w-5 h-5 text-purple-800" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
                  Activity 1 – VS Code Setup and Hello World
                </h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-3xl">
                I set up Visual Studio Code as my development environment and created and tested a basic Hello World C program. I learned the basic workflow of creating, running, and verifying a program.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-stone-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-stone-500 mr-2">Key Competencies:</span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                VS Code
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-100/70 text-purple-900 text-xs font-medium">
                C Programming
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                Program Verification
              </span>
            </div>
          </article>


          {/* =========================================================
              ACTIVITY 2: Git & GitHub Setup
             ========================================================= */}
          <article className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-8 transition-all hover:border-purple-300 hover:shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-purple-100/70 border border-purple-200/80 text-purple-900 text-xs font-semibold uppercase tracking-wider">
                  Activity 02
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  Version Control & Repository Management
                </span>
              </div>

              <a
                href="https://github.com/aishanisejal2007/Hello-World-c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-stone-900 text-stone-50 hover:bg-purple-900 text-xs sm:text-sm font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-stone-100 text-stone-800">
                  <GitBranch className="w-5 h-5 text-purple-800" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
                  Activity 2 – Git & GitHub Setup
                </h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-3xl">
                I learned the fundamentals of Git and GitHub and used them to maintain my Hello World C project. I created a public GitHub repository named Hello-World-c, added my C program and project documentation, committed the changes, and pushed the project to GitHub.
              </p>
            </div>

            <div className="mt-4 p-3.5 rounded-lg bg-[#F6F5F0] border border-stone-200/80 flex items-center gap-2 text-xs sm:text-sm text-stone-700">
              <span className="font-semibold text-purple-900 shrink-0">Repository:</span>
              <a
                href="https://github.com/aishanisejal2007/Hello-World-c"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-purple-900 hover:underline break-all"
              >
                https://github.com/aishanisejal2007/Hello-World-c
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-stone-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-stone-500 mr-2">Key Competencies:</span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                Git
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                GitHub
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-100/70 text-purple-900 text-xs font-medium">
                C Programming
              </span>
            </div>
          </article>


          {/* =========================================================
              ACTIVITY 3: GitLens & Live Share
             ========================================================= */}
          <article className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-8 transition-all hover:border-purple-300 hover:shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-stone-200/80 border border-stone-300/80 text-stone-800 text-xs font-semibold uppercase tracking-wider">
                  Activity 03
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  Collaborative Development
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-stone-100 text-stone-800">
                  <Users className="w-5 h-5 text-purple-800" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
                  Activity 3 – GitLens & Live Share
                </h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-3xl">
                I used GitLens to explore Git history and used Live Share for collaborative programming. The Hello World C project was extended by adding a greet() function. This activity helped me understand version history and collaborative development.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-stone-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-stone-500 mr-2">Key Competencies:</span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                GitLens
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                Live Share
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-100/70 text-purple-900 text-xs font-medium">
                Git
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                VS Code
              </span>
            </div>
          </article>


          {/* =========================================================
              ACTIVITY 4: LeetCode Practice Repository
             ========================================================= */}
          <article className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-8 transition-all hover:border-purple-300 hover:shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-purple-100/70 border border-purple-200/80 text-purple-900 text-xs font-semibold uppercase tracking-wider">
                  Activity 04
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  Problem Solving & DSA Practice
                </span>
              </div>

              <a
                href="https://github.com/aishanisejal2007/leetcode-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-stone-900 text-stone-50 hover:bg-purple-900 text-xs sm:text-sm font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-stone-100 text-stone-800">
                  <Code2 className="w-5 h-5 text-purple-800" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
                  Activity 4 – LeetCode Practice Repository
                </h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-3xl">
                I created and maintained a GitHub repository for my LeetCode coding practice. The repository contains documented coding solutions and progress across areas such as arrays, strings, basic algorithms, stacks, and linked lists.
              </p>
            </div>

            <div className="mt-4 p-3.5 rounded-lg bg-[#F6F5F0] border border-stone-200/80 flex items-center gap-2 text-xs sm:text-sm text-stone-700">
              <span className="font-semibold text-purple-900 shrink-0">Repository:</span>
              <a
                href="https://github.com/aishanisejal2007/leetcode-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-purple-900 hover:underline break-all"
              >
                https://github.com/aishanisejal2007/leetcode-solutions
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-stone-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-stone-500 mr-2">Key Competencies:</span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                Problem Solving
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-100/70 text-purple-900 text-xs font-medium">
                Arrays and Strings
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-100/70 text-purple-900 text-xs font-medium">
                Basic Data Structures and Algorithms
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                GitHub
              </span>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};
`;

// 6. Skills.tsx (EXACTLY THE 10 SPECIFIED SKILLS)
const skillsTsx = `import React from 'react';
import { CheckCircle2, Terminal, Wrench, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  // Exactly the 10 specified skills
  const programmingLanguages = [
    'C Programming',
    'Java',
    'Python',
    'SQL',
  ];

  const toolsAndVersionControl = [
    'Git',
    'GitHub',
    'VS Code',
  ];

  const dataStructuresAndProblemSolving = [
    'Problem Solving',
    'Arrays and Strings',
    'Basic Data Structures and Algorithms',
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-stone-200/80 bg-[#F6F5F0]/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            <span>03 / Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-stone-900">
            Skills
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl">
            A verified inventory of programming languages, development tools, and algorithmic foundations.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Programming Languages */}
          <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-lg p-6 flex flex-col justify-between hover:border-purple-300 transition-all hover:shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-purple-50 border border-purple-100/80">
                  <Terminal className="w-4 h-4 text-purple-700" />
                </div>
                <h3 className="text-base font-semibold text-stone-900">
                  Programming Languages
                </h3>
              </div>
              <p className="text-xs text-stone-500 mb-5 leading-normal">
                Core programming and database query languages.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-stone-100">
              {programmingLanguages.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-stone-100/80 border border-stone-200/70 text-stone-800 text-xs font-medium hover:bg-purple-50 hover:border-purple-200/80 hover:text-purple-900 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Development Tools & Version Control */}
          <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-lg p-6 flex flex-col justify-between hover:border-purple-300 transition-all hover:shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-purple-50 border border-purple-100/80">
                  <Wrench className="w-4 h-4 text-purple-700" />
                </div>
                <h3 className="text-base font-semibold text-stone-900">
                  Tools & Version Control
                </h3>
              </div>
              <p className="text-xs text-stone-500 mb-5 leading-normal">
                Development environments and collaborative source control.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-stone-100">
              {toolsAndVersionControl.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-stone-100/80 border border-stone-200/70 text-stone-800 text-xs font-medium hover:bg-purple-50 hover:border-purple-200/80 hover:text-purple-900 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Problem Solving & Data Structures */}
          <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-lg p-6 flex flex-col justify-between hover:border-purple-300 transition-all hover:shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded bg-purple-50 border border-purple-100/80">
                  <Layers className="w-4 h-4 text-purple-700" />
                </div>
                <h3 className="text-base font-semibold text-stone-900">
                  Problem Solving & DSA
                </h3>
              </div>
              <p className="text-xs text-stone-500 mb-5 leading-normal">
                Core algorithmic problem solving and foundational structures.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-stone-100">
              {dataStructuresAndProblemSolving.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-stone-100/80 border border-stone-200/70 text-stone-800 text-xs font-medium hover:bg-purple-50 hover:border-purple-200/80 hover:text-purple-900 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
`;

// 7. Contact.tsx
const contactTsx = `import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'aishanisejal@gmail.com';
  const githubProfileUrl = 'https://github.com/aishanisejal2007';
  const activity2Url = 'https://github.com/aishanisejal2007/Hello-World-c';
  const activity4Url = 'https://github.com/aishanisejal2007/leetcode-solutions';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            <span>04 / Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-stone-900">
            Contact
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl">
            Direct channels to reach out for coursework discussions, academic collaborations, or inquiries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Email Card */}
          <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-300 transition-all hover:shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-800 border border-purple-100 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Email</span>
              <h3 className="text-base font-semibold text-stone-900 mt-1 mb-2 truncate" title={email}>
                {email}
              </h3>
              <p className="text-xs text-stone-500 leading-normal mb-6">
                Best way to contact me directly for academic discussions and questions.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-stone-100">
              <a
                href={\`mailto:\${email}\`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-stone-900 text-stone-50 hover:bg-purple-900 text-xs font-medium transition-colors"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-md border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-300 transition-all hover:shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-800 border border-stone-200 flex items-center justify-center mb-4">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">GitHub Profile</span>
              <h3 className="text-base font-semibold text-stone-900 mt-1 mb-2 truncate">
                aishanisejal2007
              </h3>
              <p className="text-xs text-stone-500 leading-normal mb-6">
                View my verified repositories, coursework projects, and coding practice.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-stone-100 border border-stone-300/80 text-stone-800 hover:bg-stone-200/80 text-xs font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Activity Repositories Card */}
          <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-300 transition-all hover:shadow-xs md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-800 border border-purple-100 flex items-center justify-center mb-4">
                <ExternalLink className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Activity Repositories</span>
              <h3 className="text-base font-semibold text-stone-900 mt-1 mb-2">
                Coursework Projects
              </h3>
              <p className="text-xs text-stone-500 leading-normal mb-4">
                Direct links to verified repositories maintained for class activities:
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-stone-100 text-xs">
              <a
                href={activity2Url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded bg-stone-100 hover:bg-purple-50 text-stone-800 hover:text-purple-900 transition-colors"
              >
                <span className="font-mono truncate">Hello-World-c</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </a>
              <a
                href={activity4Url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded bg-stone-100 hover:bg-purple-50 text-stone-800 hover:text-purple-900 transition-colors"
              >
                <span className="font-mono truncate">leetcode-solutions</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </a>
            </div>
          </div>

        </div>

        {/* Note Box */}
        <div className="mt-8 p-5 rounded-lg bg-[#F6F5F0] border border-stone-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-purple-100/70 text-purple-900 shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm text-stone-700">
              Student inquiries or discussions regarding coursework and programming practices are welcome.
            </p>
          </div>
          <a
            href={\`mailto:\${email}\`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md bg-purple-900 text-stone-50 hover:bg-purple-800 text-xs font-medium transition-colors shrink-0"
          >
            <span>Send Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

      </div>
    </section>
  );
};
`;

// 8. Footer.tsx
const footerTsx = `import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#FAF9F6] border-t border-stone-200/80 text-stone-600">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Student Info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-serif font-bold text-stone-900 text-base">
              Aishani Sejal
            </span>
            <p className="text-xs text-stone-500">
              Computer Science and Engineering – B (CSE-B) • 3rd Semester
            </p>
          </div>

          {/* Links & Back to Top */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/aishanisejal2007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-stone-600 hover:text-purple-800 transition-colors rounded-md hover:bg-stone-100 flex items-center gap-1.5 text-xs font-medium"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:aishanisejal@gmail.com"
              className="p-2 text-stone-600 hover:text-purple-800 transition-colors rounded-md hover:bg-stone-100 flex items-center gap-1.5 text-xs font-medium"
              aria-label="Email Aishani Sejal"
              title="Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
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
`;

const files = [
  { p: path.join(targetBase, 'App.tsx'), content: appTsx },
  { p: path.join(targetBase, 'components', 'Navbar.tsx'), content: navbarTsx },
  { p: path.join(targetBase, 'components', 'Hero.tsx'), content: heroTsx },
  { p: path.join(targetBase, 'components', 'About.tsx'), content: aboutTsx },
  { p: path.join(targetBase, 'components', 'Projects.tsx'), content: projectsTsx },
  { p: path.join(targetBase, 'components', 'Skills.tsx'), content: skillsTsx },
  { p: path.join(targetBase, 'components', 'Contact.tsx'), content: contactTsx },
  { p: path.join(targetBase, 'components', 'Footer.tsx'), content: footerTsx },
];

for (const f of files) {
  fs.writeFileSync(f.p, f.content, 'utf8');
  console.log('Successfully updated:', f.p);
}
console.log('All files updated successfully!');
