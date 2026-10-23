import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Hire Pre-Vetted Tech Talent | Emoloyers | Surhires',
    description: 'Scale your engineering team in 48 hours. Pre-screened developers, designers and managers with transparent hiring plans.',
    openGraph: {
        title: 'Hire Pre-Vetted Tech Talent | Surhires for Emloyers',
        description: 'Stop shifting through hundreds of unqualified resumes. Get vetted matches in under 48 hours.',
        type: 'website',
    },
};

export default function EmloyersLayout({ children }: {children: React.ReactNode}) {
    return <>{children}</>
}