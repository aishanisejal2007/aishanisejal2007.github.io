const fs = require('fs');
const path = require('path');

const targetBase = path.resolve('..', 'aishani sejal-portfolio', 'portfolio', 'src');

// 5. Projects.tsx (Projects / Activities)
const projectsTsx = `import React from 'react';
import { ArrowUpRight, GitBranch, Terminal, Users, Code2 } from 'lucide-react';
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

fs.writeFileSync(path.join(targetBase, 'components', 'Projects.tsx'), projectsTsx, 'utf8');
console.log('Projects.tsx successfully updated!');
