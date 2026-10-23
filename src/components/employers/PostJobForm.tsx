'use client';

import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function PostJobForm() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    email: '',
    department: 'Engineering',
    type: 'Full-time',
    location: '',
    salaryRange: '',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) newErrors.title = 'Job title is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid work email';
    }
    if (!formData.location.trim()) newErrors.location = 'Location or Remote is required';
    if (!formData.salaryRange.trim()) newErrors.salaryRange = 'Salary range is required';
    if (!formData.description.trim() || formData.description.length < 20) {
      newErrors.description = 'Please provide at least 20 characters describing the role';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="post-job" className="max-w-3xl mx-auto scroll-mt-24">
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
        <div className="text-center mb-8">
          <span className="text-teal-600 font-semibold text-xs uppercase tracking-wider">Fast Intake</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Post an Open Role</h2>
          <p className="text-slate-500 text-sm mt-1">
            Fill out the role details below. Our screening pipeline will match top vetted candidates within 48 hours.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 bg-teal-50 border border-teal-200 rounded-2xl text-center">
            <CheckCircle2 size={48} className="text-teal-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-slate-900">Role Successfully Submitted!</h3>
            <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
              Thank you, <strong className="text-slate-900">{formData.company}</strong>. Our technical recruiters are reviewing your specifications. Check <strong className="text-slate-900">{formData.email}</strong> for matching updates.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  title: '',
                  company: '',
                  email: '',
                  department: 'Engineering',
                  type: 'Full-time',
                  location: '',
                  salaryRange: '',
                  description: '',
                });
              }}
              className="mt-6 px-6 py-2.5 bg-teal-600 text-white rounded-xl text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              Post Another Role
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Role / Job Title *</label>
                <input
                  type="text"
                  placeholder="e.g., Senior Full Stack Engineer"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-slate-900 focus:outline-none focus:ring-2 ${
                    errors.title ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500'
                  }`}
                />
                {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Company Name *</label>
                <input
                  type="text"
                  placeholder="e.g., Acme Cloud Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-slate-900 focus:outline-none focus:ring-2 ${
                    errors.company ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500'
                  }`}
                />
                {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Work Email *</label>
                <input
                  type="email"
                  placeholder="hiring@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-slate-900 focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Department</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Product Design</option>
                  <option value="Product">Product Management</option>
                  <option value="Marketing">Growth & Marketing</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Location / Workplace *</label>
                <input
                  type="text"
                  placeholder="e.g., Remote / Bangalore (Hybrid)"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-slate-900 focus:outline-none focus:ring-2 ${
                    errors.location ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500'
                  }`}
                />
                {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Salary Budget / Range *</label>
                <input
                  type="text"
                  placeholder="e.g., ₹22L - ₹30L CTC"
                  value={formData.salaryRange}
                  onChange={(e) => setFormData({ ...formData, salaryRange: e.target.value })}
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-slate-900 focus:outline-none focus:ring-2 ${
                    errors.salaryRange ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500'
                  }`}
                />
                {errors.salaryRange && <p className="text-xs text-red-500 mt-1">{errors.salaryRange}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Job Brief & Requirements *</label>
              <textarea
                rows={4}
                placeholder="Briefly describe key technologies and core responsibilities..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-slate-900 focus:outline-none focus:ring-2 ${
                  errors.description ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-teal-500'
                }`}
              />
              {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              Post Role & Find Candidates <ArrowRight size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}