import React from 'react';
import { Award, Clock } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-24 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            <span>05 / Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-stone-900">
            Certifications
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl">
            Formal technical certifications and completed course accreditations.
          </p>
        </div>

        {/* Dignified Placeholder Card */}
        <div className="bg-[#FAF9F6] border border-dashed border-stone-300 rounded-xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-purple-50 border border-purple-100/80 text-purple-800 flex items-center justify-center mx-auto mb-4">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-stone-900 mb-1">
            Certifications in Progress
          </h3>
          <p className="text-sm text-stone-500 leading-relaxed max-w-md mx-auto mb-4">
            Verified credentials and certificates will be added here upon completion of relevant academic assessments and programs.
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-stone-400 bg-stone-100/80 px-3 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            <span>Awaiting verified documentation</span>
          </div>
        </div>

      </div>
    </section>
  );
};
