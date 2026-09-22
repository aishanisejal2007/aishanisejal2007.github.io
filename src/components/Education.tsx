import React from 'react';
import { GraduationCap, BookMarked, Code, Cpu } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-24 border-b border-stone-200/80 bg-[#F6F5F0]/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            <span>04 / Academics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-stone-900">
            Education
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl">
            Formal coursework and foundational study in computer science principles.
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-100">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900">
                  Computer Science Student
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 font-medium">
                  Undergraduate Academic Curriculum
                </p>
              </div>
            </div>

            <span className="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200">
              Active Studies
            </span>
          </div>

          <div className="mt-6 space-y-6">
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-3xl">
              Currently pursuing a comprehensive computer science education centered on algorithmic thinking, low-level systems programming, and modern software design. Coursework and practical lab work focus on developing strong problem-solving competencies and building functional systems from core principles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-stone-200/70">
              <div className="p-4 rounded-lg bg-[#F6F5F0]/70 border border-stone-200/60">
                <div className="flex items-center gap-2 text-purple-900 font-semibold text-xs sm:text-sm mb-1">
                  <Code className="w-4 h-4 text-purple-700" />
                  <span>Programming Foundations</span>
                </div>
                <p className="text-xs text-stone-600 leading-normal">
                  Structured procedural programming in C, object-oriented concepts in Java, syntax, and algorithmic logic.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F6F5F0]/70 border border-stone-200/60">
                <div className="flex items-center gap-2 text-purple-900 font-semibold text-xs sm:text-sm mb-1">
                  <BookMarked className="w-4 h-4 text-purple-700" />
                  <span>Data Structures & Files</span>
                </div>
                <p className="text-xs text-stone-600 leading-normal">
                  Dynamic memory management, array manipulation, file serialization, and storage access patterns.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F6F5F0]/70 border border-stone-200/60 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-purple-900 font-semibold text-xs sm:text-sm mb-1">
                  <Cpu className="w-4 h-4 text-purple-700" />
                  <span>Hardware & Embedded Labs</span>
                </div>
                <p className="text-xs text-stone-600 leading-normal">
                  Microcontroller experimentation with ESP32, sensor integration, input/output peripherals, and IoT interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
