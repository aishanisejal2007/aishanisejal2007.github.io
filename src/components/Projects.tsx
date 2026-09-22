import React from 'react';
import { ArrowUpRight, Terminal, Cpu, CheckCircle } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            <span>03 / Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-stone-900">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-2xl">
            Detailed technical breakdowns of projects built in C systems programming and embedded IoT hardware.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* =========================================================
              PROJECT 1: Simple Line Editor (Technical Case Study)
             ========================================================= */}
          <article className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-8 lg:p-10 transition-all hover:border-purple-300 hover:shadow-xs">
            {/* Header / Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-purple-100/70 border border-purple-200/80 text-purple-900 text-xs font-semibold uppercase tracking-wider">
                  Case Study 01
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  Systems & CLI Utility
                </span>
              </div>

              <a
                href="https://github.com/Aishvarrya777/Line_Editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-stone-900 text-stone-50 hover:bg-purple-900 text-xs sm:text-sm font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Title & Description */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-stone-100 text-stone-800">
                  <Terminal className="w-5 h-5 text-purple-800" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                  Simple Line Editor
                </h3>
              </div>
              <p className="text-stone-600 text-base max-w-3xl leading-relaxed">
                A command-line text editor built in C that enables users to insert, delete, display, save, and load lines of text interactively from the terminal.
              </p>
            </div>

            {/* Structured Case Study Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-stone-200/70">
              
              {/* Problem */}
              <div className="space-y-2 bg-[#F6F5F0]/60 p-4 rounded-lg border border-stone-200/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                  The Problem
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Handling text documents in a console environment requires dynamic memory allocation rather than rigid, fixed-size buffers, while ensuring operations like insertion, deletion, and file persistence remain safe and reliable.
                </p>
              </div>

              {/* What It Does */}
              <div className="space-y-2 bg-[#F6F5F0]/60 p-4 rounded-lg border border-stone-200/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                  What It Does
                </span>
                <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                    <span>Insert text at target line index</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                    <span>Delete specific lines with buffer shift</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                    <span>Display buffered text in order</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                    <span>Save to and load from disk files</span>
                  </li>
                </ul>
              </div>

              {/* Technical Approach */}
              <div className="space-y-2 bg-[#F6F5F0]/60 p-4 rounded-lg border border-stone-200/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                  Technical Approach
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Implemented via dynamic pointer-to-pointer arrays (<code className="text-[11px] bg-stone-200/80 px-1 py-0.5 rounded font-mono text-purple-900">char**</code>) to manage variable-length lines. Reallocates memory dynamically as text grows, avoiding buffer overflows. Integrates standard file I/O operations for disk synchronization.
                </p>
              </div>

            </div>

            {/* Technologies */}
            <div className="mt-6 pt-5 border-t border-stone-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-stone-500 mr-2">Technologies:</span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                C
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-100/60 text-purple-900 text-xs font-medium">
                Dynamic Array of Strings
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                File Handling
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                CLI Interface
              </span>
            </div>
          </article>


          {/* =========================================================
              PROJECT 2: Smart Storage Box using Cloud Database
             ========================================================= */}
          <article className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-8 lg:p-10 transition-all hover:border-purple-300 hover:shadow-xs">
            {/* Header / Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-stone-200/70 border border-stone-300/80 text-stone-800 text-xs font-semibold uppercase tracking-wider">
                  Project 02
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  Embedded Systems & IoT
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-stone-100 text-stone-800">
                  <Cpu className="w-5 h-5 text-purple-800" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                  Smart Storage Box using Cloud Database
                </h3>
              </div>
              <p className="text-stone-600 text-base max-w-3xl leading-relaxed">
                An embedded physical storage box prototype that integrates sensor authentication, motorized access, audio-visual feedback, and cloud database connectivity.
              </p>
            </div>

            {/* Technical Detail & Hardware Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-stone-200/70">
              
              {/* Architecture & What it does */}
              <div className="space-y-3 bg-[#F6F5F0]/60 p-5 rounded-lg border border-stone-200/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                  System Architecture & Operation
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  The system centers around an ESP32 microcontroller governing access to a physical storage compartment. An RFID / MFRC522 reader authenticates user tags, triggering a servo motor to control the locking mechanism. Operational status is output on an LCD display, accompanied by auditory alerts from a piezo buzzer.
                </p>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  The ESP32 communicates device state to a cloud database managed through the Blynk platform, synchronizing access events.
                </p>
              </div>

              {/* Known Components & Hardware Specifications */}
              <div className="space-y-3 bg-[#F6F5F0]/60 p-5 rounded-lg border border-stone-200/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                  Configured Hardware & Components
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 p-2 rounded bg-stone-100/70 text-stone-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
                    <span>ESP32 MCU</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-stone-100/70 text-stone-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
                    <span>RFID / MFRC522</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-stone-100/70 text-stone-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
                    <span>LCD Display</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-stone-100/70 text-stone-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
                    <span>Servo Motor</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-stone-100/70 text-stone-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
                    <span>Piezo Buzzer</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-stone-100/70 text-stone-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
                    <span>Blynk Cloud DB</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Technologies */}
            <div className="mt-6 pt-5 border-t border-stone-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-stone-500 mr-2">Technologies & Components:</span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                ESP32
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-100/60 text-purple-900 text-xs font-medium">
                RFID / MFRC522
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                LCD
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                Servo Motor
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-200/60 text-stone-800 text-xs font-medium">
                Piezo Buzzer
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-100/60 text-purple-900 text-xs font-medium">
                Blynk / Cloud Database
              </span>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};
