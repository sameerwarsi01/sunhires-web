'use client';

import { useState, useMemo } from 'react';
import { Search, MapPin, Building2, IndianRupee, Filter, RotateCcw, Briefcase } from 'lucide-react';
import { FEATURED_JOBS } from '@/data/mockData';

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  // Filter Logic
  const filteredJobs = useMemo(() => {
    return FEATURED_JOBS.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesDept = selectedDept === 'All' || job.department === selectedDept;
      const matchesType = selectedType === 'All' || job.type === selectedType;
      const matchesLocation =
        selectedLocation === 'All' ||
        (selectedLocation === 'Remote' ? job.type === 'Remote' : job.location.includes(selectedLocation));

      return matchesSearch && matchesDept && matchesType && matchesLocation;
    });
  }, [searchTerm, selectedDept, selectedType, selectedLocation]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDept('All');
    setSelectedType('All');
    setSelectedLocation('All');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Explore Careers</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Verified Tech & Product Roles
          </h1>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Direct opportunities with transparent compensation, vetted culture, and zero ghosting.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by role, company, or tech stack (e.g., Next.js, Figma)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm text-slate-800 placeholder-slate-400"
            />
          </div>

          {/* Dropdown Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
            {/* Department */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Department</label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="All">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            {/* Employment Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Employment Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="All">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Remote">Remote</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="All">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>

            {/* Reset Button */}
            <div className="flex items-end">
              <button
                onClick={resetFilters}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                <RotateCcw size={15} /> Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-semibold text-slate-600">
            Showing <span className="text-slate-900">{filteredJobs.length}</span> verified roles
          </p>
        </div>

        {/* Job Cards Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-400">{job.postedDaysAgo}d ago</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 hover:text-teal-600 transition-colors">
                    {job.title}
                  </h2>
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

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => alert(`Application modal for ${job.title} at ${job.company} will open here!`)}
                    className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-all shadow-sm"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State UI */
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto my-8">
            <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Briefcase size={28} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No active roles found</h3>
            <p className="text-sm text-slate-500 mt-1">
              We couldn&apos;t find any roles matching your current search and filter criteria.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}