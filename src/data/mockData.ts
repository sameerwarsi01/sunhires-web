export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Remote' | 'Contract' | 'Internship';
  salary: string;
  department: 'Engineering' | 'Design' | 'Product' | 'Marketing';
  tags: string[];
  postedDaysAgo: number;
}

export const FEATURED_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer (Next.js)',
    company: 'FinTrack Systems',
    location: 'Bangalore (Hybrid)',
    type: 'Full-time',
    salary: '₹24L - ₹32L',
    department: 'Engineering',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    postedDaysAgo: 1,
  },
  {
    id: '2',
    title: 'Lead Product Designer',
    company: 'Nova Commerce',
    location: 'Remote',
    type: 'Remote',
    salary: '₹20L - ₹28L',
    department: 'Design',
    tags: ['Figma', 'Design Systems', 'UX Research'],
    postedDaysAgo: 2,
  },
  {
    id: '3',
    title: 'Full Stack Node.js Developer',
    company: 'HyperScale AI',
    location: 'Hyderabad',
    type: 'Full-time',
    salary: '₹18L - ₹25L',
    department: 'Engineering',
    tags: ['Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    postedDaysAgo: 3,
  },
  {
    id: '4',
    title: 'Technical Product Manager',
    company: 'PayFlow Global',
    location: 'Gurugram',
    type: 'Full-time',
    salary: '₹28L - ₹38L',
    department: 'Product',
    tags: ['Roadmapping', 'APIs', 'Fintech', 'Agile'],
    postedDaysAgo: 4,
  },
  {
    id: '5',
    title: 'DevOps & Cloud Engineer',
    company: 'Krypton Labs',
    location: 'Remote',
    type: 'Remote',
    salary: '₹22L - ₹30L',
    department: 'Engineering',
    tags: ['Kubernetes', 'Terraform', 'CI/CD', 'GCP'],
    postedDaysAgo: 2,
  },
  {
    id: '6',
    title: 'Growth Marketing Specialist',
    company: 'ZendScale',
    location: 'Mumbai',
    type: 'Contract',
    salary: '₹12L - ₹16L',
    department: 'Marketing',
    tags: ['SEO', 'B2B Funnels', 'Analytics'],
    postedDaysAgo: 5,
  },
  {
    id: '7',
    title: 'Backend Engineer (Go & Distributed Systems)',
    company: 'Nexus Cloud',
    location: 'Bangalore',
    type: 'Full-time',
    salary: '₹26L - ₹34L',
    department: 'Engineering',
    tags: ['Go', 'gRPC', 'Kafka', 'Redis'],
    postedDaysAgo: 3,
  },
  {
    id: '8',
    title: 'Junior React Developer',
    company: 'AppForge Studio',
    location: 'Remote',
    type: 'Internship',
    salary: '₹6L - ₹9L',
    department: 'Engineering',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    postedDaysAgo: 1,
  },
];

export const TESTIMONIALS = [
  {
    quote: "Surhires cut our engineering hiring cycle from 45 days down to just 9 days. The technical vetting and candidate quality is genuinely top-tier.",
    author: "Rohit Malhotra",
    role: "VP of Engineering, FinTrack Systems",
    metric: "4x Faster Hiring",
  },
  {
    quote: "Found my dream role as a Lead Designer within a week. No recruiter ghosting, transparent salary ranges upfront, and straight-to-founder interviews.",
    author: "Ananya Deshmukh",
    role: "Lead Designer at Nova Commerce",
    metric: "100% Verified Offers",
  },
  {
    quote: "We filled three critical backend infrastructure roles without paying astronomical 25% agency cuts. Best hiring platform in India.",
    author: "Vikram Sengupta",
    role: "Co-Founder & CTO, HyperScale AI",
    metric: "₹12L Saved in Agency Fees",
  },
];

export const FAQS = [
  {
    question: "How does Surhires verify technical candidates?",
    answer: "Every candidate in our pre-vetted network undergoes a 3-stage evaluation: hands-on code reviews, architecture discussions, and verified previous work references. Only the top 5% receive the verified badge.",
  },
  {
    question: "Is Surhires completely free for job seekers?",
    answer: "Yes, 100% free for applicants. Job seekers can browse verified openings, benchmark their market compensation, and connect directly with hiring managers without paying any platform fees.",
  },
  {
    question: "How quickly can employers start interviewing candidates?",
    answer: "Once you post an active role or search our vetted talent pool, our matching engine surfaces curated, pre-assessed profiles within 48 hours for immediate interview scheduling.",
  },
  {
    question: "What types of roles and employment types are supported?",
    answer: "Surhires supports permanent full-time positions, remote contracts, hybrid roles, and tech internships across Engineering, Product, UI/UX Design, and Growth Marketing.",
  },
];