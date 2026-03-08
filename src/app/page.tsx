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
    { id: 4, title: "One-click job applications.", color: "#F59E0B", icon: "click" }
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
        id: 1, title: 'President of Sales', company: 'MIM', location: 'Korstø', tags: ['Full-Time', 'Remote'], salary: '25 25₹ / Month',
        logo: <svg viewBox="0 0 32 32" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="6" height="12" rx="3" fill="#25b6d2" transform="rotate(-15 9 16)" /><rect x="20" y="10" width="6" height="12" rx="3" fill="#25b6d2" transform="rotate(15 23 16)" /><rect x="13" y="14" width="6" height="10" rx="3" fill="#fb5a5a" /></svg>,
        logoBg: '#FFFFFF', logoColor: '#0369A1'
    },
    {
        id: 2, title: 'Web Designer', company: 'McDonald\'s', location: 'Bergen', tags: ['Full-Time', 'Senior'], salary: '25 35₹ / Month',
        logo: <svg viewBox="0 0 32 32" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M8 24C8 24 8 13 11 11C13.5 9 16 14 16 14C16 14 18.5 9 21 11C24 13 24 24 24 24" fill="none" stroke="#FFC72C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
        logoBg: '#DA291C', logoColor: '#FFC72C'
    },
    {
        id: 3, title: 'Nursing Assistant', company: 'LOVECLIP', location: 'Trondheim', tags: ['Full-Time', 'Part-Time'], salary: '25 55₹ / Month',
        logo: <svg viewBox="0 0 32 32" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M16 23L10 17C7 14 7 10 10 8C13 6 16 8 16 12C16 8 19 6 22 8C25 10 25 14 22 17L16 23Z" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" /><circle cx="16" cy="14" r="1.5" fill="#FFFFFF" /></svg>,
        logoBg: '#FF4B55', logoColor: '#FFFFFF'
    },
    {
        id: 4, title: 'Marketing Coordinator', company: 'TYME', location: 'Stavanger', tags: ['Hybrid', 'Part-Time'], salary: '25 15₹ / Month',
        logo: <svg viewBox="0 0 40 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><text x="20" y="24" fontFamily="sans-serif" fontSize="12" fontWeight="900" fill="#111" textAnchor="middle" letterSpacing="1.5">TYME</text></svg>,
        logoBg: '#FFFFFF', logoColor: '#111'
    },
    {
        id: 5, title: 'Dog Trainer', company: 'OB', location: 'Mongstad', tags: ['Junior', 'Part-Time'], salary: '25 45₹ / Month',
        logo: <svg viewBox="0 0 32 32" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="16" r="7" fill="#00E5FF" /><circle cx="19" cy="16" r="7" fill="#FF007F" opacity="0.8" /></svg>,
        logoBg: '#FFFFFF', logoColor: '#4338CA'
    },
    {
        id: 6, title: 'Medical Assistant', company: 'PAINT', location: 'Bergen', tags: ['Mid-Level', 'Part-Time'], salary: '25 95₹ / Month',
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
                    <img
                        src="/hero-1.png"
                        alt="Job seeker illustration"
                        className="hero-bg-img hero-bg-left"
                    />
                    <img
                        src="/hero-3.png"
                        alt="Hiring manager illustration"
                        className="hero-bg-img hero-bg-right"
                    />
                </div>

                <div className="container relative z-10 hero-container">
                    <div className="hero-content mx-auto text-center pt-0 pb-0">
                        <div className="flex justify-center mb-1">
                            <img src="/logo.png" alt="Jobkar Logo" width="64" height="64" className="object-contain" />
                        </div>
                        <h1 className="hero-title text-dark">
                            Get Your <span className="highlight-pill mx-2">{HERO_DATA.title}</span> With <br /> <span className="text-primary tracking-tight">JobKar.</span>
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
                            <button className="flex-shrink-0 font-bold text-base px-8 h-full rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all ml-1 text-white border-none" style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)' }}>Search my job</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Newest Jobs For You */}
            <section className="newest-jobs py-12 bg-white relative z-20 border-t border-gray-50">
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
                                    <div className="flex-1 w-full text-left">
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
                            <div className="feature-bars">
                                <div className="feature-bar feature-bar-green">
                                    <span>Pan-India Reach</span>
                                </div>
                                <div className="feature-bar feature-bar-blue">
                                    <span>Endless Talent</span>
                                </div>
                                <div className="feature-bar feature-bar-orange">
                                    <span>Broad Network</span>
                                </div>
                            </div>
                        </article>

                        {/* Easy Automation */}
                        <article className="feature-card">
                            <h3 className="feature-title">Easy Automation</h3>
                            <p className="feature-text">
                                Let your hiring process run on autopilot with smart workflows and integrations.
                            </p>
                            <div className="feature-icons feature-icons-circle">
                                <span className="feature-icon small primary">Q</span>
                                <span className="feature-icon small pink">H</span>
                                <span className="feature-icon small gray">P</span>
                                <span className="feature-icon small blue">W</span>
                                <span className="feature-icon large violet">JK</span>
                                <span className="feature-icon small orange">bob</span>
                            </div>
                        </article>

                        {/* Compliant */}
                        <article className="feature-card">
                            <h3 className="feature-title">Compliant</h3>
                            <p className="feature-text">
                                Stay compliant with regulations and meet industry standards effortlessly.
                            </p>
                            <div className="feature-compliance">
                                <div className="compliance-ring">
                                    <div className="compliance-ring-fill" />
                                </div>
                                <span className="compliance-badge">Verified</span>
                            </div>
                        </article>

                        {/* Affordable */}
                        <article className="feature-card">
                            <h3 className="feature-title">Affordable</h3>
                            <p className="feature-text">
                                Cost-effective solutions for businesses of any size. No hidden fees, just clear pricing.
                            </p>
                            <div className="feature-affordable">
                                <span className="affordable-label">No hidden fees!</span>
                                <div className="affordable-graph" />
                            </div>
                        </article>

                        {/* Centralized Management */}
                        <article className="feature-card">
                            <h3 className="feature-title">Centralized Management</h3>
                            <p className="feature-text">
                                Manage your job postings, applications, and company details from one smart dashboard.
                            </p>
                            <div className="feature-icons feature-icons-bubbles">
                                <span className="feature-bubble bubble-small">Irish Life</span>
                                <span className="feature-bubble bubble-medium">Smart</span>
                                <span className="feature-bubble bubble-large">Allianz</span>
                                <span className="feature-bubble bubble-medium-alt">Health</span>
                                <span className="feature-bubble bubble-small-alt">Vitality</span>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* 4. What's New at JobKar? */}
            <section className="whats-new pb-10 pt-6 bg-white">
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 className="text-primary font-bold text-[13px] mb-3 text-left w-full pl-2">What's New at JobKar?</h2>
                    <div className="flex flex-wrap md:flex-nowrap justify-between gap-3 w-full">
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
                                    {item.icon === "click" && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill={item.color} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 2L13.8 6.1C13.29 6.35 12.71 6.35 12.2 6.1L4 2V12C4 18 8.8 22 13 22C17.2 22 22 18 22 12V2Z" />
                                        </svg>
                                    )}
                                </div>
                                <div className="text-[10px] sm:text-[11px] font-medium leading-[1.3] tracking-wide text-white/95">
                                    {item.title.split(' ').slice(0, 2).join(' ')}<br />
                                    {item.title.split(' ').slice(2).join(' ')}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Trusted By */}
            <section className="trusted-by pb-10 pt-16 bg-white">
                <div className="container max-w-[1000px] mx-auto">
                    <Link href="/trusted-partners" className="block outline-none">
                        <img src="/trusted-by.png" alt="Trusted By Companies" className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity" />
                    </Link>
                </div>
            </section>

            {/* 5.1 Why JobKar Stands Out */}
            <section className="stands-out-section">
                <div className="container">
                    <div className="stands-out-header">
                        <h2 className="stands-out-title">Why <span className="text-primary">JobKar</span> Stands Out</h2>
                        <p className="stands-out-subtitle">Say goodbye to clunky, outdated systems. Jobkar is here to make your hiring process seamless, efficient, and future-proof.</p>
                    </div>

                    <div className="comparison-wrapper">
                        {/* Jobkar Card */}
                        <div className="comparison-card jobkar-card">
                            <div className="card-logo">
                                <img src="/logo.png" alt="Jobkar Logo" width="32" height="32" />
                                <span>Jobkar</span>
                            </div>
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

                        {/* VS Badge */}
                        <div className="vs-badge">VS</div>

                        {/* Other Software Card */}
                        <div className="comparison-card other-card">
                            <div className="card-logo" style={{ marginBottom: 44 }}>
                                <span style={{ color: '#64748B' }}>Other Softwares</span>
                            </div>
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

            </section >

            {/* 5.3 Scan To Download */}
            < section className="download-section bg-white" >
                <div className="container mx-auto text-center">
                    <img src="/Group 1321314532.png" alt="Scan to Download JobKar" className="w-full h-auto rounded-3xl" />
                </div>
            </section >

            {/* 5.4 See JobKar in Action */}
            < section className="action-section bg-white overflow-hidden" >
                <div className="w-full text-center">
                    <img src="/Section 07.png" alt="See JobKar in Action" className="w-full h-auto" />
                </div>
            </section >

            {/* 5.5 Voices Of Experiences - Full Width & Dynamic */}
            < section className="voices-section pt-8 pb-12 bg-white overflow-hidden" >
                <div className="w-full text-center animate-fade-in-up">
                    <img src="/voice-expression.png" alt="Voices Of Experiences" className="w-full h-auto cursor-pointer hover:scale-[1.01] transition-transform duration-700" />
                </div>
            </section >

            {/* 6. FAQ Section */}
            < section className="faq-section py-12 bg-white text-center" >
                <div className="container max-w-[1000px] mx-auto">
                    <img src="/Section 12.png" alt="Frequently Asked Questions" className="w-full h-auto" />
                </div>
            </section >

            {/* 7. Custom Get In Touch Section */}
            < section className="contact-section" >
                <div className="contact-container">
                    {/* Woman Illustration */}
                    <div className="illustration woman-left">
                        <img src="/woman-illustration.png" alt="Woman Professional" className="w-full h-auto" />
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

                    {/* Man Illustration */}
                    <div className="illustration man-right">
                        <img src="/man-illustration.png" alt="Man Professional" className="w-full h-auto" />
                    </div>
                </div>
            </section >

        </main >
    );
}
