import React from 'react';
import { BookOpen, Code2, Wrench, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            <span>01 / Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-stone-900">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl">
            A grounded perspective on my academic journey, software exploration, and technical focus.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-6 text-stone-700 text-base leading-relaxed">
            <p>
              I am an undergraduate <strong className="text-stone-900 font-semibold">Computer Science student</strong> who believes that true technical comprehension comes from building and testing systems firsthand. Rather than just understanding algorithms theoretically, I actively implement them to learn how computers manage state, memory, and hardware interfaces.
            </p>
            <p>
              My hands-on programming experience started with foundational languages like <strong className="text-stone-900 font-semibold">C</strong> and <strong className="text-stone-900 font-semibold">Java</strong>, where I developed appreciation for memory allocation, pointers, dynamic string arrays, and object-oriented architecture. Building projects such as a command-line line editor taught me the importance of clean memory reclamation, structured error handling, and robust file I/O operations.
            </p>
            <p>
              Beyond core software development, I enjoy exploring embedded platforms like the <strong className="text-stone-900 font-semibold">ESP32</strong>, interfacing microcontrollers with sensors, servos, and cloud databases. This intersection of hardware logic and software networking reinforces my problem-solving ability across the entire computing stack.
            </p>
            <p>
              I am dedicated to continuous learning—sharpening my core data structures, writing readable and maintainable code, and adopting modern toolchains like React and TypeScript for user-facing applications.
            </p>
          </div>

          {/* Right Column: Principles / Focus Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-lg p-5 hover:border-purple-300/80 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 rounded bg-purple-50 text-purple-800">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">Foundation-First Learning</h3>
              </div>
              <p className="text-xs text-stone-600 leading-normal">
                Prioritizing core computer science principles, data structures, and procedural foundations before adopting higher abstractions.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-lg p-5 hover:border-purple-300/80 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 rounded bg-purple-50 text-purple-800">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">Hands-on Implementation</h3>
              </div>
              <p className="text-xs text-stone-600 leading-normal">
                Validating concepts by coding functional utilities, CLI tools, and embedded controllers from scratch.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-lg p-5 hover:border-purple-300/80 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 rounded bg-purple-50 text-purple-800">
                  <Wrench className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">Hardware & Software Integration</h3>
              </div>
              <p className="text-xs text-stone-600 leading-normal">
                Connecting physical components (RFID, servos, LCDs) with IoT microcontrollers and cloud endpoints.
              </p>
            </div>

            <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-lg p-5 hover:border-purple-300/80 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-1.5 rounded bg-purple-50 text-purple-800">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-stone-900">Continuous Growth</h3>
              </div>
              <p className="text-xs text-stone-600 leading-normal">
                Actively expanding into modern web frameworks, version control best practices, and disciplined code structure.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
