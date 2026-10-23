'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function PricingTable() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const tiers = [
    {
      name: 'Starter Tier',
      tagline: 'Ideal for early-stage startups hiring their first core engineers.',
      monthlyPrice: '₹14,999',
      annualPrice: '₹11,999',
      badge: null,
      features: [
        'Up to 2 active job listings',
        'Standard 72-hour candidate matching',
        'Direct applicant messaging',
        'Verified work experience checks',
        'Community candidate pool access',
      ],
      buttonText: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth Tier',
      tagline: 'Designed for scaling tech teams looking to close high-priority roles quickly.',
      monthlyPrice: '₹34,999',
      annualPrice: '₹27,999',
      badge: 'Most Popular',
      features: [
        'Up to 8 active job listings',
        'Priority 48-hour candidate matching',
        'Code challenge & architecture pre-vetting',
        'Dedicated talent partner support',
        'Custom hiring pipeline integration',
        'Candidate replacement guarantee',
      ],
      buttonText: 'Start 14-Day Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise Tier',
      tagline: 'Tailored solutions for enterprises needing continuous technical talent streams.',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      badge: null,
      features: [
        'Unlimited active job openings',
        'Sub-24-hour executive candidate matching',
        'Customized technical assessments',
        'White-glove executive onboarding',
        'Full ATS API & webhook sync',
        'Custom SLA guarantees',
      ],
      buttonText: 'Contact Enterprise Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="mb-24">
      {/* Billing Cycle Toggle */}
      <div className="flex justify-center items-center gap-3 mb-12">
        <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>
          Billed Monthly
        </span>
        <button
          onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
          aria-label="Toggle Billing Cycle"
          className="w-14 h-8 bg-slate-200 rounded-full p-1 relative transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <div
            className={`w-6 h-6 bg-teal-600 rounded-full transition-transform ${
              billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
        <div className="flex items-center gap-1.5">
          <span className={`text-sm font-semibold ${billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-400'}`}>
            Billed Annually
          </span>
          <span className="bg-teal-50 text-teal-700 text-xs font-bold px-2 py-0.5 rounded-full border border-teal-200">
            Save 20%
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`bg-white rounded-2xl border p-8 flex flex-col justify-between relative transition-all duration-200 ${
              tier.popular
                ? 'border-teal-500 shadow-xl ring-2 ring-teal-500/20'
                : 'border-slate-200 shadow-sm hover:shadow-md'
            }`}
          >
            {tier.badge && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                {tier.badge}
              </span>
            )}

            <div>
              <h2 className="text-xl font-bold text-slate-900">{tier.name}</h2>
              <p className="text-sm text-slate-500 mt-2 min-h-[40px] leading-relaxed">
                {tier.tagline}
              </p>

              <div className="mt-6 mb-8 pb-6 border-b border-slate-100">
                <span className="text-4xl font-extrabold text-slate-900">
                  {billingCycle === 'monthly' ? tier.monthlyPrice : tier.annualPrice}
                </span>
                {tier.monthlyPrice !== 'Custom' && (
                  <span className="text-sm text-slate-500 font-medium ml-1">/ month</span>
                )}
              </div>

              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Included with plan:
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={18} className="text-teal-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#post-job"
              className={`w-full py-3 px-4 rounded-xl text-center text-sm font-semibold transition-all ${
                tier.popular
                  ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              {tier.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}