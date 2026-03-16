'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import './Home.css';

const HERO_DATA = {
    title: "Dream Job",
    subtitle: "Browse thousands of verified opportunities, connect with top employers, and secure your future today.",
    searchPlaceholders: {
        title: "Job title or keyword",
        location: "Florence, Italy"
    }
};

const STATS_DATA = [
    { id: 1, title: "Thousands of job seekers daily.", color: "#F59E0B", icon: "seekers" },
    { id: 2, title: "500+ companies posting jobs.", color: "#3B82F6", icon: "companies" },
    { id: 3, title: "AI matches perfect opportunities.", color: "#E5E7EB", icon: "ai" },
    { id: 4, title: "One-click job applications.", color: "#F59E0B", icon: "logo" }
];

const WHY_US_DATA = {
    jobkar: [
        "No Hidden Fees, Just Results",
        "Automated Hiring Process",
        "Endless Global Reach",
        "Instant Job Application",
        "AI-Powered Matching",
        "Seamless Experience"
    ],
    others: [
        "Hidden Fees",
        "Limited Support Hours",
        "Limited Global Reach",
        "Manual Application Process"
    ]
};

const NEWEST_JOBS = [
    {
        id: 1, title: 'President of Sales', company: 'MIM', location: 'Korstø', tags: ['Full-Time', 'Remote'], salary: '₹25,000 - ₹45,000',
        logo: <svg viewBox="0 0 32 32" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="6" height="12" rx="3" fill="#25b6d2" transform="rotate(-15 9 16)" /><rect x="20" y="10" width="6" height="12" rx="3" fill="#25b6d2" transform="rotate(15 23 16)" /><rect x="13" y="14" width="6" height="10" rx="3" fill="#fb5a5a" /></svg>,
        logoBg: '#FFFFFF', logoColor: '#0369A1'
    },
    {
        id: 2, title: 'Web Designer', company: 'McDonald\'s', location: 'Bergen', tags: ['Full-Time', 'Senior'], salary: '₹35,000 - ₹55,000',
        logo: <svg viewBox="0 0 32 32" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M8 24C8 24 8 13 11 11C13.5 9 16 14 16 14C16 14 18.5 9 21 11C24 13 24 24 24 24" fill="none" stroke="#FFC72C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
        logoBg: '#DA291C', logoColor: '#FFC72C'
    },
    {
        id: 3, title: 'Nursing Assistant', company: 'LOVECLIP', location: 'Trondheim', tags: ['Full-Time', 'Part-Time'], salary: '₹15,000 - ₹25,000',
        logo: <svg viewBox="0 0 32 32" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M16 23L10 17C7 14 7 10 10 8C13 6 16 8 16 12C16 8 19 6 22 8C25 10 25 14 22 17L16 23Z" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" /><circle cx="16" cy="14" r="1.5" fill="#FFFFFF" /></svg>,
        logoBg: '#FF4B55', logoColor: '#FFFFFF'
    },
    {
        id: 4, title: 'Marketing Coordinator', company: 'TYME', location: 'Stavanger', tags: ['Hybrid', 'Part-Time'], salary: '₹20,000 - ₹30,000',
        logo: <svg viewBox="0 0 40 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><text x="20" y="24" fontFamily="sans-serif" fontSize="12" fontWeight="900" fill="#111" textAnchor="middle" letterSpacing="1.5">TYME</text></svg>,
        logoBg: '#FFFFFF', logoColor: '#111'
    },
    {
        id: 5, title: 'Dog Trainer', company: 'OB', location: 'Mongstad', tags: ['Junior', 'Part-Time'], salary: '₹12,000 - ₹18,000',
        logo: <svg viewBox="0 0 32 32" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="16" r="7" fill="#00E5FF" /><circle cx="19" cy="16" r="7" fill="#FF007F" opacity="0.8" /></svg>,
        logoBg: '#FFFFFF', logoColor: '#4338CA'
    },
    {
        id: 6, title: 'Medical Assistant', company: 'PAINT', location: 'Bergen', tags: ['Mid-Level', 'Part-Time'], salary: '₹22,000 - ₹35,000',
        logo: <svg viewBox="0 0 40 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="14" width="3" height="12" fill="#FACC15" /><text x="14" y="24" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#111">AINT</text></svg>,
        logoBg: '#FFFFFF', logoColor: '#D97706'
    }
];

export default function Home() {
    // #region agent log
    useEffect(() => {
        fetch('http://127.0.0.1:7634/ingest/1afd7975-dfce-4cee-a427-0662da729594', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Debug-Session-Id': '5512d5',
            },
            body: JSON.stringify({
                sessionId: '5512d5',
                runId: 'hero-bg',
                hypothesisId: 'bg-uses-hero-1-and-3',
                location: 'src/app/page.tsx:80',
                message: 'Hero background illustrations rendered',
                data: {
                    leftImage: '/hero-1.png',
                    rightImage: '/hero-3.png',
                },
                timestamp: Date.now(),
            }),
        }).catch(() => { });
    }, []);
    // #endregion

    return (
        <main className="home-page-new">

            {/* 1. Hero Section */}
            <section className="hero-section relative" style={{ backgroundColor: '#F9FAFB' }}>
                <div className="absolute inset-0 z-0 pointer-events-none w-full h-full flex items-start justify-between overflow-hidden hero-bg-wrapper">
                    <div className="relative hero-side-illustration hero-side-left left-0 h-full flex items-center">
                        <img
                            src="/hero section left.png"
                            alt="Job seeker illustration"
                            className="hero-bg-img hero-bg-left"
                        />
                        <img
                            src="/hero section left plant.png"
                            alt="plant"
                            className="absolute bottom-[20%] right-[-20px] w-[140px] hero-plant hero-plant-left"
                        />
                    </div>
                    <div className="relative hero-side-illustration hero-side-right right-0 h-full flex items-center gap-4">
                        <img
                            src="/hero section right1.png"
                            alt="Hiring manager illustration"
                            className="hero-bg-img hero-bg-right1"
                        />
                        <img
                            src="/hero section right2.png"
                            alt="Hiring manager illustration"
                            className="hero-bg-img hero-bg-right2"
                        />
                        <img
                            src="/hero section left plant.png"
                            alt="plant"
                            className="absolute bottom-[20%] left-[-40px] w-[140px] hero-plant hero-plant-right"
                        />
                    </div>
                </div>

                {/* Decorative Lamps */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] pointer-events-none z-20 px-10 flex justify-between hero-lamps-wrap">
                    <img src="/left lamp.png" alt="left lamp" className="w-[65px] h-auto object-contain" />
                    <img src="/right lamp.png" alt="right lamp" className="w-[65px] h-auto object-contain" />
                </div>

                <div className="container relative z-10 hero-container">
                    <div className="hero-content mx-auto text-center pt-0 pb-0">
                        <div className="flex justify-center mb-6">
                            <img src="/logo.png" alt="jobkar logo" width="64" height="64" className="object-contain" />
                        </div>
                        <h1 className="hero-title text-dark">
                            Get Your <span className="highlight-pill mx-2">{HERO_DATA.title}</span> With <br /> <span className="text-primary tracking-tight">jobkar.</span>
                        </h1>
                        <p className="hero-subtitle text-gray mt-6 mb-8 max-w-2xl mx-auto leading-relaxed">
                            {HERO_DATA.subtitle}
                        </p>

                        <div className="hero-search-bar bg-white flex items-center mx-auto rounded-full relative z-20">
                            <div className="search-input-group flex-1 flex items-center gap-3 px-6 border-r border-gray-100 h-full relative">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <input type="text" placeholder={HERO_DATA.searchPlaceholders.title} className="search-input w-full text-base bg-transparent border-none outline-none font-medium text-dark h-full group" />
                            </div>
                            <div className="search-input-group flex-1 flex items-center gap-3 px-6 h-full relative">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <input type="text" placeholder={HERO_DATA.searchPlaceholders.location} className="search-input w-full text-base bg-transparent border-none outline-none font-medium text-dark h-full" />
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                            <Link href="/jobs" className="flex-shrink-0 h-full">
                                <button className="btn-primary rounded-full font-bold text-base px-8 h-full shadow-lg hover:-translate-y-1 transition-all ml-4 text-white border-none">Search my job</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Newest Jobs For You */}
            <section className="newest-jobs pt-24 pb-12 bg-white relative z-20 border-t border-gray-50">
                <div className="container">
                    <div className="text-center mb-8 relative">
                        <h2 className="text-4xl font-extrabold mb-4 text-dark tracking-tight">Newest <span className="text-primary">Jobs</span> For You</h2>
                        <p className="text-gray text-base max-w-lg mx-auto">Get the fastest application so that your name is above other</p>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
                            <Link href="/" className="text-primary font-bold hover:underline flex items-center gap-1 text-base">More <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg></Link>
                        </div>
                    </div>

                    <div className="jobs-grid-3 gap-6 mt-8">
                        {NEWEST_JOBS.map(job => (
                            <Link href={`/jobs/${job.id}`} key={job.id} className="job-card-new p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:border-blue-100 cursor-pointer transition-all duration-300 block outline-none">
                                <div className="flex items-start gap-4">
                                    {/* Left Logo Container */}
                                    <div className="company-logo flex flex-col items-center justify-center font-bold text-xl rounded-lg shadow-sm flex-shrink-0" style={{ backgroundColor: job.logoBg, color: job.logoColor, width: 48, height: 48, border: '1px solid #F3F4F6' }}>
                                        {job.logo}
                                    </div>

                                    {/* Right Details Column */}
                                    <div className="flex-1 w-full text-left flex flex-col items-start">
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-extrabold mb-1">{job.company}</p>
                                        <h3 className="font-bold text-[17px] text-gray-800 leading-tight mb-2">{job.title}</h3>

                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {job.tags.map(tag => (
                                                <span key={tag} className="bg-[#EFF6FF] text-primary text-[10px] font-bold px-2 py-1 rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-1.5 text-gray-500 text-[11px] font-medium mb-5">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            {job.location}
                                        </div>

                                        <div className="flex justify-between items-end w-full">
                                            <span className="font-bold text-primary text-[15px]">{job.salary}</span>
                                            <span className="text-[10px] text-gray-400 font-semibold">1 hour ago</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Features Dashboard (replaces Feature.png) */}
            <section className="features-section py-16 bg-white border-b border-gray-50">
                <div className="container">
                    <div className="features-badge mx-auto">WHY CHOOSE JOBKAR?</div>
                    <h2 className="features-title text-center">
                        Unlock a seamless hiring experience with Jobkar&apos;s powerful tools and features.
                    </h2>

                    <div className="features-grid">
                        {/* Global Reach */}
                        <article className="feature-card">
                            <h3 className="feature-title">Global Reach</h3>
                            <p className="feature-text">
                                Find and hire talent across India with Jobkar&apos;s wide network of job seekers.
                            </p>
                            <div className="feature-bars flex-1 flex flex-col justify-center">
                                <div className="feature-bar feature-bar-green flex justify-between items-center" style={{ paddingRight: '2px' }}>
                                    <span>Pan-India Reach</span>
                                    <div className="w-[28px] h-[28px] rounded-full bg-white flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                                        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#185549] rounded-l-full rotate-180" style={{ right: '-4px' }}></div>
                                    </div>
                                </div>
                                <div className="feature-bar feature-bar-blue flex justify-between items-center" style={{ paddingRight: '2px' }}>
                                    <span>Endless Talent</span>
                                    <div className="w-[28px] h-[28px] rounded-full bg-transparent flex items-center justify-center flex-shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    </div>
                                </div>
                                <div className="feature-bar feature-bar-orange flex justify-between items-center" style={{ paddingRight: '2px' }}>
                                    <span>Broad Network</span>
                                    <div className="w-[28px] h-[28px] rounded-full bg-white flex-shrink-0"></div>
                                </div>
                            </div>
                        </article>

                        {/* Easy Automation */}
                        <article className="feature-card">
                            <h3 className="feature-title">Easy Automation</h3>
                            <p className="feature-text">
                                Let your hiring process run on autopilot with smart workflows and integrations.
                            </p>
                            <div className="mt-8 flex-1 flex flex-col items-center justify-center w-full">
                                <img src="/easy automation.png" alt="Easy Automation" className="max-h-[160px] w-auto object-contain" />
                            </div>
                        </article>

                        {/* Compliant */}
                        <article className="feature-card">
                            <h3 className="feature-title">Compliant</h3>
                            <p className="feature-text">
                                Stay compliant with regulations and meet industry standards effortlessly.
                            </p>
                            <div className="mt-8 flex-1 flex items-center justify-center w-full">
                                <img src="/compliant.png" alt="Compliant" className="max-h-[180px] w-auto object-contain" />
                            </div>
                        </article>

                        {/* Affordable */}
                        <article className="feature-card">
                            <h3 className="feature-title">Affordable</h3>
                            <p className="feature-text">
                                Cost-effective solutions for businesses of any size. No hidden fees, just clear pricing.
                            </p>
                            <div className="mt-auto -mx-8 -mb-8 relative flex items-end overflow-hidden" style={{ minHeight: '160px' }}>
                                <svg
                                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                >
                                    <path
                                        d="M 32 110 L 800 -44 L 800 200 L 32 200 Z"
                                        fill="#EFE7F6"
                                        className="opacity-80"
                                    />
                                    <path
                                        d="M 32 110 L 800 -44"
                                        stroke="#9358F8"
                                        strokeWidth="1.5"
                                    />
                                    {/* Dotted Vertical Line */}
                                    <line
                                        x1="32" y1="110" x2="32" y2="30"
                                        stroke="#9358F8" strokeWidth="2" strokeDasharray="0 6" strokeLinecap="round" opacity="0.6"
                                    />
                                    {/* Purple Dot */}
                                    <circle cx="32" cy="110" r="4.5" fill="#9358F8" />
                                </svg>

                                {/* Text Container */}
                                <div className="absolute z-10" style={{ left: '52px', top: '32px' }}>
                                    <span className="text-[17px] font-semibold text-[#374151] leading-[1.3] tracking-tight block">
                                        No hidden<br />fees!
                                    </span>
                                </div>
                            </div>
                        </article>

                        {/* Centralized Management */}
                        <article className="feature-card">
                            <h3 className="feature-title">Centralized Management</h3>
                            <p className="feature-text">
                                Manage your job postings, applications, and company details from one smart dashboard.
                            </p>
                            <div className="mt-auto -mb-4 flex items-center justify-center w-full">
                                <img src="/centralized ,amagement.png" alt="Centralized Management" className="w-[105%] max-w-[105%] object-contain" style={{ marginLeft: '-2.5%' }} />
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* 4. What's New at JobKar? */}
            <section className="whats-new pb-10 pt-6 bg-white">
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 className="text-primary font-bold text-[13px] mb-8 text-left w-full pl-2">What's New at jobkar?</h2>
                    <div className="flex flex-nowrap justify-between gap-3 w-full">
                        {STATS_DATA.map((item) => (
                            <div key={item.id} className="pill-dark">
                                <div className="flex-shrink-0 w-9 h-9 bg-black/20 rounded-full flex items-center justify-center border border-white/5">
                                    {item.icon === "seekers" && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="6" r="3" fill={item.color} />
                                            <circle cx="6" cy="18" r="3" fill={item.color} />
                                            <circle cx="18" cy="18" r="3" fill={item.color} />
                                            <path d="M8 16L16 8M18 9v6M8 18h7" stroke={item.color} strokeWidth="2" />
                                        </svg>
                                    )}
                                    {item.icon === "companies" && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 7h16v14H4z" fill={item.color} fillOpacity="0.2" />
                                            <path d="M4 12h16M8 7V3h8v4" />
                                        </svg>
                                    )}
                                    {item.icon === "ai" && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2a5 5 0 0 0-5 5c0 2 1.5 3 2 5v2h6v-2c.5-2 2-3 2-5z" fill={item.color} fillOpacity="0.2" />
                                            <path d="M9 18h6" />
                                            <path d="M10 22h4" />
                                        </svg>
                                    )}
                                    {item.icon === "logo" && (
                                        <div className="flex items-center justify-center p-1.5 bg-white/20 rounded-full">
                                            <img src="/logo.png" alt="jobkar" width="18" height="18" className="object-contain brightness-0 invert" />
                                        </div>
                                    )}
                                </div>
                                <div className="text-[12px] font-semibold leading-[1.3] text-white/90">
                                    {item.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Trusted By - Manual Reconstruction */}
            <section className="trusted-by-v2">
                <div className="container">
                    <h2 className="trusted-title">Trusted By</h2>
                    <p className="trusted-subtitle">Over 40K+ business growing with jobkar</p>

                    <div className="container trusted-logos-box">
                        <div className="logos-row">
                            {/* 1. CHATSHEET */}
                            <div className="logo-item">
                                <div className="logo-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4h16v12H4V4z" fill="#FFD563" fillOpacity="0.2" />
                                        <rect x="4" y="4" width="16" height="12" rx="2" stroke="#FFD563" strokeWidth="2" />
                                        <path d="M4 8l8 5 8-5" stroke="#FFD563" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M7 19h10" stroke="#FFD563" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <span className="logo-name chatsheet">CHATSHEET</span>
                            </div>

                            {/* 2. SIKKA */}
                            <div className="logo-item">
                                <div className="logo-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="9" fill="#2CD6D6" fillOpacity="0.1" />
                                        <circle cx="12" cy="12" r="9" stroke="#2CD6D6" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="2" fill="#2CD6D6" />
                                        <circle cx="8" cy="12" r="1.5" fill="#2CD6D6" fillOpacity="0.4" />
                                        <circle cx="16" cy="12" r="1.5" fill="#2CD6D6" fillOpacity="0.4" />
                                    </svg>
                                </div>
                                <span className="logo-name sikka">SIKKA</span>
                            </div>

                            {/* 3. XIMORA */}
                            <div className="logo-item">
                                <div className="logo-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 3L6 14h6v7l7-11h-6v-7z" fill="#0056D2" fillOpacity="0.1" />
                                        <path d="M13 3L6 14h6v7l7-11h-6v-7z" stroke="#0056D2" strokeWidth="2" strokeLinejoin="round" />
                                        <path d="M12 21l-2-3 4-2" stroke="#FFD563" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <span className="logo-name ximora">XIMORA</span>
                            </div>

                            {/* 4. SEKORO */}
                            <div className="logo-item">
                                <div className="logo-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#82C943" fillOpacity="0.1" />
                                        <path d="M9 16.5c0-1.5 2-1.5 2-3s-2-1.5-2-3 2-1.5 2-3" stroke="#82C943" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M15 7.5c0 1.5-2 1.5-2 3s2 1.5 2 3-2 1.5-2 3" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <span className="logo-name sekoro">SEKORO</span>
                            </div>

                            {/* 5. druver */}
                            <div className="logo-item">
                                <div className="logo-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="9" stroke="#5E94C5" strokeWidth="2" strokeDasharray="4 2" />
                                        <circle cx="12" cy="12" r="4" fill="#5E94C5" fillOpacity="0.1" />
                                        <circle cx="12" cy="12" r="4" stroke="#5E94C5" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="1" fill="#5E94C5" />
                                    </svg>
                                </div>
                                <span className="logo-name druver">druver</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5.1 Why JobKar Stands Out */}
            <section className="stands-out-section">
                <div className="container">
                    <div className="stands-out-header">
                        <h2 className="stands-out-title">Why <span className="text-primary">jobkar</span> Stands Out</h2>
                        <p className="stands-out-subtitle">Say goodbye to clunky, outdated systems. Jobkar is here to make your hiring process seamless, efficient, and future-proof.</p>
                    </div>

                    <div className="comparison-wrapper">
                        {/* Vertical Light Streak */}
                        <div className="gap-glow"></div>

                        {/* Jobkar Column */}
                        <div className="comparison-column">
                            <div className="card-logo">
                                <div className="choch-wrapper">
                                    <img src="/logo.png" alt="jobkar logo" width="48" height="48" className="jobkar-logo-primary" />
                                    <img src="/logo22.png" alt="sparkle" className="choch-sparkle" />
                                </div>
                                <span className="font-extrabold">jobkar</span>
                            </div>
                            <div className="comparison-card jobkar-card">
                                <h3>FEATURES INCLUDED :</h3>
                                <ul className="features-list">
                                    {WHY_US_DATA.jobkar.map((feature, idx) => (
                                        <li key={idx} className="feature-item">
                                            <div className="feature-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <img src="/line.png" alt="decorative line" className="card-decoration-line" />
                        </div>

                        {/* VS Badge */}
                        <div className="vs-badge">
                            <img src="/vs circle.png" alt="VS" width="64" height="64" />
                        </div>

                        {/* Other Software Column */}
                        <div className="comparison-column">
                            <div className="card-logo">
                                <span className="font-extrabold">Other Softwares</span>
                            </div>
                            <div className="comparison-card other-card">
                                <h3>FEATURES NOT INCLUDED :</h3>
                                <ul className="features-list">
                                    {WHY_US_DATA.others.map((feature, idx) => (
                                        <li key={idx} className="feature-item">
                                            <div className="feature-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </section >



            {/* 5.3 Scan To Download - Integrated & Polished Layout */}
            <section className="download-section-v3">
                <div className="container-v3">
                    <div className="download-layout-v3">
                        {/* QR Box with Heading at the corner */}
                        <div className="qr-container-integrated">
                            <img
                                src="/heading scan jobkar.png"
                                alt="Scan To Download JobKar"
                                className="integrated-heading-img"
                            />
                            <div className="qr-box-v3">
                                <div className="qr-accent"></div>
                                <img src="/qr.png" alt="QR Code" className="qr-main-img" />
                            </div>
                        </div>

                        {/* Right: Phone Asset with perspective and shadows */}
                        <div className="download-visual-group">
                            <div className="phone-mockup-v3">
                                <img
                                    src="/scan section.png"
                                    alt="QR Phone"
                                    className="phone-mockup-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5.4 See JobKar in Action */}
            <section className="action-section">
                <div className="action-container">
                    <h2 className="action-title">See jobkar in Action!</h2>

                    {/* Dynamic Phone Mockup */}
                    <div className="action-phone-mockup">
                        <div className="phone-island-dynamic"></div>
                        <div className="action-phone-screen">
                            {/* App Header */}
                            <div className="mock-app-header">
                                <div className="mock-back-btn"></div>
                                <div className="mock-app-title">Givingli Cash</div>
                            </div>

                            {/* Debit Card Visual */}
                            <div className="mock-card-container">
                                <div className="mock-debit-card">
                                    <div className="mock-card-brand"></div>
                                    <div className="mock-waves-bg"></div>
                                    <div className="mock-card-name">Givingli Cash</div>
                                </div>
                            </div>

                            {/* Amount Controls */}
                            <div className="mock-amount-section">
                                <span className="mock-label">Select Amount</span>
                                <div className="mock-controls">
                                    <div className="mock-minus">−</div>
                                    <div className="mock-amount"><span>$</span> 10</div>
                                    <div className="mock-plus">+</div>
                                </div>
                            </div>

                            {/* Add Gift Button */}
                            <div className="mock-footer-btn">Add Gift</div>
                        </div>
                    </div>

                    {/* Action Description Text */}
                    <p className="action-description-text">
                        See how Jobkar makes the hiring process faster, smarter, and simpler.
                        Watch our app in action as it seamlessly connects job seekers with top employers.
                        Experience the future of hiring, right at your fingertips!
                    </p>
                </div>

                {/* Corner Birds Decorations - Triangular Style */}
                <div className="action-birds-triangular">
                    <img src="/birds.png" alt="bird 1" className="bird-item bird-1" />
                    <div className="bird-row">
                        <img src="/birds1.png" alt="bird 2" className="bird-item bird-2" />
                        <img src="/birds3.png" alt="bird 3" className="bird-item bird-3" />
                    </div>
                </div>
            </section>

            {/* 5.5 Voices Of Experiences - Simplified Image Approach */}
            <section className="voices-section">
                <div className="container relative">
                    <h2 className="voices-title">Voices Of Experiences</h2>

                    <div className="testimonials-container">
                        {/* Side Card 1 (Left) */}
                        <div className="testimonial-card-side">
                            <img src="/card1.png" alt="Testimonial 1" />
                        </div>

                        {/* Main Center Image */}
                        <div className="testimonial-card-v3">
                            <img src="/card2.png" alt="Main Testimonial" />
                        </div>

                        {/* Side Card 3 (Right) - Added for balance if needed */}
                        <div className="testimonial-card-side">
                            <img src="/card3.png" alt="Testimonial 3" />
                        </div>
                    </div>

                    {/* Mint Floating Sphere */}
                    <div className="floating-sphere"></div>
                </div>
            </section>

            {/* 6. FAQ Section - Manual Recreation */}
            <section className="faq-section-v2">
                <div className="faq-container-v2">
                    <div className="faq-left-col">
                        <span className="faq-badge">FAQ</span>
                        <h2 className="faq-title-main">What would you like to know about jobkar?</h2>
                        <button className="btn-talk-us">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.3 8.38 8.38 0 0 1 3.8.9L21 3z" />
                            </svg>
                            Talk to us
                        </button>

                        {/* 3D Decorative spheres */}
                        <div className="faq-sphere-visual">
                            <div className="sphere-large"></div>
                            <div className="sphere-small-orange"></div>
                        </div>
                    </div>

                    <div className="faq-right-col">
                        {[
                            {
                                q: "What is jobkar?",
                                a: "Jobkar is a modern hiring platform that connects job seekers with top employers quickly and efficiently using smart matching technology."
                            },
                            {
                                q: "Is jobkar free to use?",
                                a: "Yes, jobkar is free for job seekers to create a profile, search for jobs, and apply to unlimited positions."
                            },
                            {
                                q: "How can I apply for a job on jobkar?",
                                a: "Simply create an account, upload your resume, and click the 'Apply' button on any job listing that matches your skills and interests."
                            },
                            {
                                q: "Can I post jobs on jobkar as an employer?",
                                a: "Absolutely! Employers can register for a business account to post job openings, manage candidates, and access our talent pool."
                            },
                            {
                                q: "How does jobkar match me with jobs?",
                                a: "Our AI-powered matching engine analyzes your skills, experience, and preferences to suggest the most relevant job opportunities for you."
                            }
                        ].map((item, i) => (
                            <details key={i} className="faq-item-v2" name="faq-accordion">
                                <summary className="faq-summary">
                                    <span>{item.q}</span>
                                    <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 9l-7 7-7-7" /></svg>
                                </summary>
                                <div className="faq-answer">
                                    <p>{item.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Custom Get In Touch Section */}
            < section className="contact-section" >
                <div className="contact-container">
                    {/* Left Illustration */}
                    <div className="illustration left-side mobile-show">
                        <img src="/get in touch left.png" alt="Left Illustration" className="w-full h-auto" />
                        <img
                            src="/get in touch left plant.png"
                            alt="plant"
                            className="contact-plant contact-plant-left"
                        />
                    </div>

                    {/* Contact Form Card */}
                    <div className="contact-form-card">
                        <span className="small-text">Stay in Contact</span>
                        <h2>Get in Touch</h2>

                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-grid">
                                <div className="form-field">
                                    <input type="text" placeholder="Name" className="form-input" />
                                </div>
                                <div className="form-field">
                                    <input type="text" placeholder="Phone No." className="form-input" />
                                </div>
                                <div className="form-field full-width">
                                    <input type="email" placeholder="Email Id" className="form-input" />
                                </div>
                                <div className="form-field full-width">
                                    <textarea placeholder="Anything you wanna say..." className="form-input"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="submit-btn shadow-lg">Send Message</button>
                        </form>
                    </div>

                    {/* Right Illustration */}
                    <div className="illustration right-side mobile-show">
                        <img src="/get in right.png" alt="Right Illustration" className="w-full h-auto" />
                        <img
                            src="/get in touch right plant.png"
                            alt="plant"
                            className="contact-plant contact-plant-right"
                        />
                    </div>
                </div>
            </section >

        </main >
    );
}
