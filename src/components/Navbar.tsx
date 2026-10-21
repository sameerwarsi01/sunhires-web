'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Find Jobs', href: '/jobs' },
    { name: 'For Employers', href: '/employers' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/employers#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-teal-600 font-extrabold text-xl group-hover:scale-105 transition-transform">
            S
          </span>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            SUR<span className="text-teal-600">HIRES</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/jobs"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors px-3 py-2"
          >
            Find a Job
          </Link>
          <Link
            href="/employers"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow"
          >
            Hire Talent <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-teal-600"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/jobs"
              onClick={() => setIsOpen(false)}
              className="text-center py-2.5 text-sm font-semibold text-slate-900 bg-slate-100 rounded-lg"
            >
              Find a Job
            </Link>
            <Link
              href="/employers"
              onClick={() => setIsOpen(false)}
              className="text-center py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}