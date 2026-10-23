import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Explore Tech and Product Jobs | surhires',
    description: 'Search transparent-compensation engineering, design and product roles with verified hiring teams on sunhires.',
    openGraph: {
        title: 'Explore Tech and Product Jobs | Sunhires',
        description: 'Find your next career move with transparent salery benchmarks and zero agency spam.',
        type: 'website',
    },
};

export default function JobsLayout({ children }: {children: React.ReactNode}) {
    return <>{children}</>
}