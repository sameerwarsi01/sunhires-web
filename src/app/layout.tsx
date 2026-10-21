import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Surhires | Modern Hiring & Recruitment Platform',
  description: 'Connect high-growth companies with pre-vetted tech, design, and product talent.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="font-sans bg-[#F8FAFC] text-slate-900 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}