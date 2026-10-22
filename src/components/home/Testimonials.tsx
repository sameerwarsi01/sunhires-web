import { TESTIMONIALS } from '@/data/mockData';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Social Proof</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Built for Teams That Move Fast</h2>
          <p className="text-slate-600 mt-3">See why engineering founders and candidates choose Surhires.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 mb-4">
                  {t.metric}
                </span>
                <p className="text-slate-700 leading-relaxed text-sm italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="font-bold text-slate-900 text-sm">{t.author}</p>
                <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}