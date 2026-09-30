import React from 'react';
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
