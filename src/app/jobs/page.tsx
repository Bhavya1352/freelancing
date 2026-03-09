'use client';
import Link from 'next/link';
import './Jobs.css';

const FILTERS = {
    location: ['New York', 'Remote job', 'Exact location', 'Within 15 km', 'Within 30 km', 'Within 50 km'],
    salary: ['Any', '> 30000k', '> 50000k', '> 80000k', '> 100000k'],
    date: ['All time', 'Last 24 hours', 'Last 3 days', 'Last 7 days'],
    experience: ['Any experience', 'Internship', 'Work remotely'],
    employment: ['Full-time', 'Temporary', 'Part-time']
};

const JOBS_LIST = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Linear company',
        location: 'Brussels',
        type: 'Full time',
        salary: '45k-85k',
        time: '29 min ago',
        isNew: true,
        logo: <div className="company-logo flex items-center justify-center bg-[#5B21B6] rounded-lg"><svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div>
    },
    {
        id: 2,
        title: 'Junior UI Designer',
        company: 'Notion',
        location: 'Madrid',
        type: 'Full time',
        salary: '30k-32k',
        time: '1 day ago',
        logo: <div className="company-logo flex items-center justify-center bg-black rounded-lg"><svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M14 10h1v4h-1zM5 4a2 2 0 012-2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4zm2 0v16h10V4H7z" /></svg></div>
    },
    {
        id: 3,
        title: 'Technical Support Engineer',
        company: 'Spline studio',
        location: 'United States',
        type: 'Full time',
        salary: '50k-52k',
        time: '1 day ago',
        logo: <div className="company-logo flex items-center justify-center bg-[#3B82F6] rounded-lg"><svg width="24" height="24" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10" /><path d="M12 6l-6 12h12L12 6z" /></svg></div>
    },
    {
        id: 4,
        title: 'Product Designer',
        company: 'Raycast corp',
        location: 'London',
        type: 'Full time',
        salary: '40k-45k',
        time: '2 day ago',
        logo: <div className="company-logo flex items-center justify-center bg-black rounded-lg"><svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2L4.5 9.5l1.41 1.41L11 5.83V21h2V5.83l5.09 5.09 1.41-1.41L12 2z" /></svg></div>
    },
    {
        id: 5,
        title: 'Copywriter (Growth)',
        company: 'Loom',
        location: 'London',
        type: 'Full time',
        salary: '38k-40k',
        time: '4 day ago',
        logo: <div className="company-logo flex items-center justify-center bg-[#EF4444] rounded-lg"><svg width="24" height="24" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></svg></div>
    },
    {
        id: 6,
        title: 'Senior UX/UI Designer',
        company: 'Trainline group',
        location: 'Paris',
        type: 'Full time',
        salary: '38k-40k',
        time: '4 day ago',
        logo: <div className="company-logo flex items-center justify-center bg-[#10B981] rounded-lg"><svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.5V11h3l-4-4-4 4h3v5.5z" /></svg></div>
    }
];

export default function JobsPage() {
    return (
        <main className="jobs-page-v2">
            {/* Header / Hero Area */}
            <section className="jobs-hero">
                <div className="container">
                    <h1 className="jobs-hero-title">Find your <span className="text-primary">new job</span> today</h1>
                    <p className="jobs-hero-subtitle text-gray">Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>

                    <div className="jobs-search-container bg-white shadow-lg rounded-xl flex items-center p-2 mt-8">
                        <div className="search-group flex-1 flex items-center gap-3 px-4 border-r">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" placeholder="What position are you looking for?" className="w-full outline-none text-sm text-dark font-medium" />
                        </div>
                        <div className="search-group flex-1 flex items-center gap-3 px-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <input type="text" placeholder="Location" className="w-full outline-none text-sm text-dark font-medium" />
                        </div>
                        <button className="btn-search-main px-8 py-3 rounded-lg text-white font-bold bg-[#2563EB]">Search job</button>
                    </div>
                </div>
            </section>

            <div className="container jobs-main-layout py-12">
                {/* Left Sidebar - Filters */}
                <aside className="filters-sidebar">
                    <h2 className="filter-main-title">Filters</h2>
                    
                    <div className="filter-group">
                        <h3 className="filter-title">Location</h3>
                        {FILTERS.location.map((loc, i) => (
                            <label key={loc} className="filter-item">
                                <input type="radio" name="location" defaultChecked={i === 0} />
                                <span>{loc}</span>
                            </label>
                        ))}
                    </div>

                    <div className="filter-group">
                        <h3 className="filter-title">Salary</h3>
                        <div className="salary-pills flex gap-2 mb-4">
                            <span className="salary-pill">Hourly</span>
                            <span className="salary-pill active">Monthly</span>
                            <span className="salary-pill">Yearly</span>
                        </div>
                        {FILTERS.salary.map((sal, i) => (
                            <label key={sal} className="filter-item">
                                <input type="radio" name="salary" defaultChecked={i === 0} />
                                <span>{sal}</span>
                            </label>
                        ))}
                    </div>

                    <div className="filter-group">
                        <h3 className="filter-title">Date of posting</h3>
                        {FILTERS.date.map((date, i) => (
                            <label key={date} className="filter-item">
                                <input type="radio" name="date" defaultChecked={i === 0} />
                                <span>{date}</span>
                            </label>
                        ))}
                    </div>

                    <div className="filter-group">
                        <h3 className="filter-title">Work experience</h3>
                        {FILTERS.experience.map((exp, i) => (
                            <label key={exp} className="filter-item">
                                <input type="radio" name="experience" defaultChecked={i === 0} />
                                <span>{exp}</span>
                            </label>
                        ))}
                    </div>

                    <div className="filter-group">
                        <h3 className="filter-title">Type of employment</h3>
                        {FILTERS.employment.map((type, i) => (
                            <label key={type} className="filter-item">
                                <input type="checkbox" defaultChecked={i === 0} />
                                <span>{type}</span>
                            </label>
                        ))}
                    </div>
                </aside>

                {/* Main Results Column */}
                <section className="results-content">
                    <div className="results-header flex justify-between items-center mb-6">
                        <h2 className="job-count-text">3177 Jobs</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-gray text-xs">Filter by</span>
                            <select className="sort-select text-xs font-bold outline-none border-none bg-transparent">
                                <option>Newest</option>
                                <option>Oldest</option>
                            </select>
                        </div>
                    </div>

                    <div className="jobs-list-v2 flex flex-col gap-6">
                        {JOBS_LIST.map(job => (
                            <Link href={`/jobs/${job.id}`} key={job.id} className="job-card-wide p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all flex items-start gap-4 cursor-pointer">
                                <div className="job-logo-v2 w-14 h-14 flex-shrink-0">
                                    {job.logo}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">{job.company}</p>
                                            <h3 className="text-lg font-bold text-dark flex items-center gap-2">
                                                {job.title}
                                                {job.isNew && <span className="badge-new">New post</span>}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="job-card-meta flex gap-6 text-[13px] text-gray-500 font-medium mt-3">
                                        <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> {job.location}</span>
                                        <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> {job.type}</span>
                                        <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> {job.salary}</span>
                                        <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {job.time}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-4 leading-relaxed">Mollis in labore um tempor lorem incididunt inire. Duis eu ex ad sunt. Pariatur sint culpa dol. Incididunt. eiusmod culpa laborum tempor lorem incididunt.</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="pagination flex items-center justify-center gap-2 mt-12">
                        <button className="page-btn">&larr;</button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn">4</button>
                        <span className="page-dots">...</span>
                        <button className="page-btn">8</button>
                        <button className="page-btn">&rarr;</button>
                    </div>
                </section>

                {/* Right Sidebar - Email me */}
                <aside className="email-sidebar">
                    <div className="email-widget p-6 bg-white border border-gray-100 rounded-2xl">
                        <div className="flex items-center gap-2 mb-3">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <h3 className="font-bold text-dark">Email me for jobs</h3>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-relaxed mb-4">Ut esse et dolo rube quis, Sit anim labore dolore. Kole ex fugiat commod etir her.</p>
                        <input type="email" placeholder="name@email.com" className="email-input-v2 w-full p-3 rounded-lg border border-gray-200 text-xs mb-3 outline-none" />
                        <button className="subscribe-btn-v2 w-full py-3 rounded-lg text-white font-bold text-xs bg-[#2563EB]">Subscribe</button>
                    </div>
                </aside>
            </div>
        </main>
    );
}
