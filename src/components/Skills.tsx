import React from 'react';
import { Terminal, Cpu, Layout, Layers, CheckCircle2 } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

export const Skills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      category: 'Programming Languages',
      icon: <Terminal className="w-4 h-4 text-purple-700" />,
      description: 'Core procedural, object-oriented, and typed scripting languages.',
      items: ['C', 'Java', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      category: 'Data Structures & Systems',
      icon: <Layers className="w-4 h-4 text-purple-700" />,
      description: 'Foundational algorithmic concepts, dynamic memory, and disk persistence.',
      items: [
        'Data structures fundamentals',
        'Dynamic arrays',
        'File handling',
        'C programming',
      ],
    },
    {
      category: 'Embedded & IoT Systems',
      icon: <Cpu className="w-4 h-4 text-purple-700" />,
      description: 'Microcontroller hardware interfacing, sensor networks, and cloud telemetry.',
      items: [
        'ESP32',
        'RFID / MFRC522',
        'Blynk',
        'Arduino / embedded development',
      ],
    },
    {
      category: 'Web & Version Control',
      icon: <Layout className="w-4 h-4 text-purple-700" />,
      description: 'Component architecture, responsive styling, and collaborative source control.',
      items: ['React', 'Git / GitHub', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-stone-200/80 bg-[#F6F5F0]/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            <span>02 / Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-stone-900">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl">
            A practical inventory of programming languages, hardware toolkits, and computer science fundamentals.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#FAF9F6] border border-stone-200/90 rounded-lg p-6 sm:p-7 hover:border-purple-300 transition-all hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-purple-50 border border-purple-100/80">
                    {group.icon}
                  </div>
                  <h3 className="text-base font-semibold text-stone-900">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-stone-500 mb-5 leading-normal">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-100/80 border border-stone-200/70 text-stone-800 text-xs font-medium hover:bg-purple-50 hover:border-purple-200/80 hover:text-purple-900 transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-purple-600/80" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on skill philosophy */}
        <div className="mt-8 p-4 rounded-lg bg-stone-100/70 border border-stone-200/70 text-xs text-stone-600 flex items-start gap-2.5">
          <span className="font-semibold text-stone-700 shrink-0">Academic Note:</span>
          <span>
            These represent verified skills learned and implemented through coursework, hardware prototyping, and project development without inflated proficiency metrics.
          </span>
        </div>

      </div>
    </section>
  );
};
