import Hero from '@/components/home/Hero';
import EmployerLogos from '@/components/home/EmployerLogos';
import HowItWorks from '@/components/home/HowItWorks';
import FeaturedRoles from '@/components/home/FeaturedRoles';
import Testimonials from '@/components/home/Testimonials';
import FaqAccordion from '@/components/FaqAccordion';
import HomeCta from '@/components/home/HomeCta';
import { FAQS } from '@/data/mockData';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <EmployerLogos />
      <HowItWorks />
      <FeaturedRoles />
      <Testimonials />

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Answers</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-3">Everything you need to know about our recruitment process and guarantees.</p>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <HomeCta />
    </div>
  );
}