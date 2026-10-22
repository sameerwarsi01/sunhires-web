import Link from 'next/link';
import { ArrowRight, Building2, MapPin, IndianRupee } from 'lucide-react';
import { FEATURED_JOBS } from '@/data/mockData';

export default function FeaturedRoles() {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Active Opportunities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Featured Open Positions</h2>
            <p className="text-slate-600 mt-2">Explore transparent compensation roles from verified engineering companies.</p>
          </div>
          <Link
            href="/jobs"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 font-semibold text-teal-600 hover:text-teal-700"
          >
            Browse All Jobs <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_JOBS.slice(0, 6).map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {job.type}
                  </span>
                  <span className="text-xs text-slate-400">{job.postedDaysAgo}d ago</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 hover:text-teal-600 transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                  <Building2 size={16} /> <span>{job.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                  <MapPin size={16} /> <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 mt-2">
                  <IndianRupee size={16} /> <span>{job.salary}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href="/jobs"
                  className="w-full inline-flex items-center justify-center py-2 px-4 rounded-lg bg-slate-50 hover:bg-teal-600 hover:text-white text-slate-900 font-semibold text-sm transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}