import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'aishanisejal@gmail.com';
  const githubProfileUrl = 'https://github.com/aishanisejal2007';
  const activity2Url = 'https://github.com/aishanisejal2007/Hello-World-c';
  const activity4Url = 'https://github.com/aishanisejal2007/leetcode-solutions';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700" />
            <span>04 / Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-stone-900">
            Contact
          </h2>
          <p className="text-sm sm:text-base text-stone-500 max-w-xl">
            Direct channels to reach out for coursework discussions, academic collaborations, or inquiries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Email Card */}
          <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-300 transition-all hover:shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-800 border border-purple-100 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Email</span>
              <h3 className="text-base font-semibold text-stone-900 mt-1 mb-2 truncate" title={email}>
                {email}
              </h3>
              <p className="text-xs text-stone-500 leading-normal mb-6">
                Best way to contact me directly for academic discussions and questions.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-stone-100">
              <a
                href={`mailto:${email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-stone-900 text-stone-50 hover:bg-purple-900 text-xs font-medium transition-colors"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-md border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-300 transition-all hover:shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-800 border border-stone-200 flex items-center justify-center mb-4">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">GitHub Profile</span>
              <h3 className="text-base font-semibold text-stone-900 mt-1 mb-2 truncate">
                aishanisejal2007
              </h3>
              <p className="text-xs text-stone-500 leading-normal mb-6">
                View my verified repositories, coursework projects, and coding practice.
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-stone-100 border border-stone-300/80 text-stone-800 hover:bg-stone-200/80 text-xs font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Activity Repositories Card */}
          <div className="bg-[#FAF9F6] border border-stone-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-300 transition-all hover:shadow-xs md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-800 border border-purple-100 flex items-center justify-center mb-4">
                <ExternalLink className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Activity Repositories</span>
              <h3 className="text-base font-semibold text-stone-900 mt-1 mb-2">
                Coursework Projects
              </h3>
              <p className="text-xs text-stone-500 leading-normal mb-4">
                Direct links to verified repositories maintained for class activities:
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-stone-100 text-xs">
              <a
                href={activity2Url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded bg-stone-100 hover:bg-purple-50 text-stone-800 hover:text-purple-900 transition-colors"
              >
                <span className="font-mono truncate">Hello-World-c</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </a>
              <a
                href={activity4Url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded bg-stone-100 hover:bg-purple-50 text-stone-800 hover:text-purple-900 transition-colors"
              >
                <span className="font-mono truncate">leetcode-solutions</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </a>
            </div>
          </div>

        </div>

        {/* Note Box */}
        <div className="mt-8 p-5 rounded-lg bg-[#F6F5F0] border border-stone-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-md bg-purple-100/70 text-purple-900 shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm text-stone-700">
              Student inquiries or discussions regarding coursework and programming practices are welcome.
            </p>
          </div>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md bg-purple-900 text-stone-50 hover:bg-purple-800 text-xs font-medium transition-colors shrink-0"
          >
            <span>Send Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

      </div>
    </section>
  );
};
