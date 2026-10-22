import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomeCta() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Ready to build your engineering team?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Join hundreds of companies hiring pre-vetted engineers and designers without typical recruiter delays.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/employers"
            className="w-full sm:w-auto px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold shadow-md transition-all flex items-center justify-center gap-2"
          >
            Post a Role Today <ArrowRight size={18} />
          </Link>
          <Link
            href="/jobs"
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl font-semibold transition-all"
          >
            Search Open Roles
          </Link>
        </div>
      </div>
    </section>
  );
}