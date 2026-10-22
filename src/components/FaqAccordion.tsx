'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-slate-200 rounded-xl bg-white transition-colors duration-200 overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-teal-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              <span className="text-base sm:text-lg">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`text-slate-500 transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180 text-teal-600' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}