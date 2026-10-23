import PricingTable from "@/components/employers/PricingTable";
import PostJobForm from "@/components/employers/PostJobForm";

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Hiring Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-2">
            Hire Top 5% Tech Talent <span className="text-teal-600">Without Agency Chaos.</span>
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Transparent pricing models and high-conviction pre-screened engineering matches delivered directly to your inbox.
          </p>
        </div>

        {/* 1. 3-Tier Pricing Table */}
        <PricingTable />

        {/* 2. Post a Job Form UI */}
        <PostJobForm />
      </div>
    </div>
  );
}