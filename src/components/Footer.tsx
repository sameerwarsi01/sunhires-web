import Link from 'next/link';
import { Globe, Mail, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Blurb */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-teal-400 font-extrabold text-xl">
                S
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                SUR<span className="text-teal-400">HIRES</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Surhires connects high-growth startups and enterprises with pre-vetted engineers, product managers, and designers.
            </p>
            <div className="flex items-center gap-4 pt-2">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-slate-800 hover:text-white hover:bg-slate-700 transition-colors">
                <Globe size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 rounded-full bg-slate-800 hover:text-white hover:bg-slate-700 transition-colors">
                    <Share2 size={18} />
                </a>
                <a href="mailto:contact@surhires.com" aria-label="Email" className="p-2 rounded-full bg-slate-800 hover:text-white hover:bg-slate-700 transition-colors">
                     <Mail size={18} />
                </a>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Job Seekers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/jobs" className="hover:text-teal-400 transition-colors">Browse Jobs</Link></li>
              <li><Link href="/jobs" className="hover:text-teal-400 transition-colors">Remote Roles</Link></li>
              <li><Link href="/jobs" className="hover:text-teal-400 transition-colors">Tech Internships</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Employers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/employers" className="hover:text-teal-400 transition-colors">Post a Job</Link></li>
              <li><Link href="/employers#pricing" className="hover:text-teal-400 transition-colors">Pricing Plans</Link></li>
              <li><Link href="/employers" className="hover:text-teal-400 transition-colors">Vetting Standards</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#how-it-works" className="hover:text-teal-400 transition-colors">How It Works</Link></li>
              <li><Link href="/#faq" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
              <li><span className="text-slate-500 cursor-not-allowed">Terms & Privacy</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Surhires Technologies Inc. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built for speed, accessibility, and modern hiring teams.</p>
        </div>
      </div>
    </footer>
  );
}