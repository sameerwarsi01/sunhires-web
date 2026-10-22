export default function EmployerLogos() {
  const logos = ['Swiggy', 'Razorpay', 'CRED', 'Postman', 'Zepto', 'Groww'];

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Hiring teams finding engineering talent on Surhires
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {logos.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center font-bold text-slate-400 hover:text-slate-800 transition-colors text-lg tracking-wider"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}