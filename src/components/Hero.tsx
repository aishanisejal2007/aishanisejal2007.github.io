import React from 'react';
import { ArrowDown, Mail, FolderCode, Terminal, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left / Main Editorial Column */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            
            {/* Status & Subtitle Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100/90 border border-stone-200 text-stone-700 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span>Computer Science Undergraduate</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 font-serif leading-[1.12]">
                Aishani Sejal
              </h1>
              <p className="text-lg sm:text-xl font-medium text-purple-900/90 tracking-tight">
                Computer Science Student
              </p>
            </div>

            {/* Concise Introduction */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-normal">
              I am a Computer Science student focused on building practical software projects and deepening my understanding of computing through hands-on development. From core procedural systems in C to embedded IoT devices and modern web interfaces, I enjoy turning algorithmic concepts into functioning software.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-stone-900 text-stone-50 hover:bg-purple-900 text-sm font-medium transition-all shadow-xs"
              >
                <FolderCode className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="https://github.com/aishanisejal2007/C-Mini-project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-stone-50 border border-stone-300 text-stone-800 hover:bg-stone-100 hover:border-stone-400 text-sm font-medium transition-all"
              >
                <GithubIcon className="w-4 h-4 text-stone-700" />
                <span>GitHub</span>
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

          {/* Right Column: Editorial Highlight Box */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-[#F6F5F0] border border-stone-200/90 rounded-lg p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3.5">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-stone-500">
                  Focus Areas
                </span>
                <span className="text-xs text-purple-800 font-medium bg-purple-100/70 px-2 py-0.5 rounded">
                  Hands-on Dev
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-stone-200/60 text-stone-800 shrink-0 mt-0.5">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-stone-900">Systems & C Programming</h2>
                    <p className="text-xs text-stone-600 leading-normal mt-0.5">
                      Dynamic memory management, pointers, and file manipulation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-stone-200/60 text-stone-800 shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-stone-900">Embedded & IoT</h2>
                    <p className="text-xs text-stone-600 leading-normal mt-0.5">
                      ESP32 hardware logic, RFID sensing, and cloud telemetry integration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-stone-200/60 text-stone-800 shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-stone-900">Modern Web Tech</h2>
                    <p className="text-xs text-stone-600 leading-normal mt-0.5">
                      Interactive interfaces using React, TypeScript, and semantic markup.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500 leading-relaxed">
                Building functional academic prototypes with clean structure and verified logic.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
