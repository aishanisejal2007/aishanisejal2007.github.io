import React from 'react';
import { Milestone, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 sm:py-24 border-b border-stone-200/80 bg-[#F6F5F0]/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            <span>06 / Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-stone-900">
            Achievements
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl">
            Key honors, competition recognitions, and academic milestones.
          </p>
        </div>

        {/* Clean Subtle Placeholder Card */}
        <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-xs">
          <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center mx-auto mb-4 border border-stone-200">
            <Milestone className="w-6 h-6 text-purple-800" />
          </div>
          <h3 className="text-lg font-semibold text-stone-900 mb-2">
            More milestones to be added.
          </h3>
          <p className="text-sm text-stone-500 leading-relaxed max-w-md mx-auto mb-5">
            Academic achievements, hackathons, and technical honors will be cataloged here as milestones are reached throughout my degree.
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-purple-900 bg-purple-50 border border-purple-200/70 px-3.5 py-1.5 rounded-full font-medium">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>Undergraduate Journey in Progress</span>
          </div>
        </div>

      </div>
    </section>
  );
};
