import Link from 'next/link';
import { ArrowRight, Search, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 bg-gradient-to-b from-slate-100/70 to-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 text-xs sm:text-sm font-semibold mb-6">
          <Zap size={15} /> <span>Trusted by 450+ High-Growth Tech Teams</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.15]">
          Where exceptional talent meets <span className="text-teal-600">ambitious companies.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Stop sifting through hundreds of unqualified resumes. Surhires delivers pre-vetted engineers, designers, and product leaders within 48 hours.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/employers"
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
          >
            Hire Faster <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/jobs"
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 rounded-xl font-semibold shadow-sm hover:border-slate-400 transition-all flex items-center justify-center gap-2"
          >
            <Search size={18} className="text-teal-600" /> Find a Job
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-8 border-t border-slate-200">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">48 Hrs</p>
            <p className="text-xs sm:text-sm text-slate-500">Average match time</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">Top 5%</p>
            <p className="text-xs sm:text-sm text-slate-500">Pre-vetted talent</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">85%+</p>
            <p className="text-xs sm:text-sm text-slate-500">Interview acceptance</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">0% Spam</p>
            <p className="text-xs sm:text-sm text-slate-500">Verified compensation</p>
          </div>
        </div>
      </div>
    </section>
  );
}