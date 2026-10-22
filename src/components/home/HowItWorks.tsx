export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Define Your Requirements',
      desc: 'Specify your technical requirements, salary range, and experience level. Our intake engine creates an optimized role profile.',
    },
    {
      num: '02',
      title: 'Review Pre-Vetted Matches',
      desc: 'Receive 3 to 5 verified candidates within 48 hours. Every candidate has passed rigorous technical assessments.',
    },
    {
      num: '03',
      title: 'Interview & Close Roles',
      desc: 'Connect directly with candidates without agency friction. Make offers with full onboarding support.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Streamlined Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">How Surhires Works</h2>
          <p className="text-slate-600 mt-3">From posting a requirement to signing offer letters in three simple milestones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 font-bold text-lg mb-6">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}