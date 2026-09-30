import React from 'react';
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
