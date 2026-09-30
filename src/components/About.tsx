import React from 'react';
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
