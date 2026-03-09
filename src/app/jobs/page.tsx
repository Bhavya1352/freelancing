'use client';
import Link from 'next/link';
import { JOBS } from '../../data/jobsData';
import './Jobs.css';

const FILTERS = {
    location: ['Near me', 'Remote job', 'Exact location', 'Within 15 km', 'Within 30 km', 'Within 50 km'],
    salary: ['Any', '> 30000k', '> 50000k', '> 80000k', '> 100000k'],
    date: ['All time', 'Last 24 hours', 'Last 3 days', 'Last 7 days'],
    experience: ['Any experience', 'Internship', 'Work remotely'],
    employment: ['Full-time', 'Temporary', 'Part-time']
};

export default function JobsPage() {
    return (
        <main className="jobs-page-v3">
            <section className="jobs-hero-v3">
                <div className="hero-mesh"></div>
                <div className="container">
                    <h1>Find your <span className="text-blue-600">new job</span> today</h1>
                    <p>Thousands of jobs in the computer, engineering and technology sectors are waiting for you.</p>

                    <div className="search-box-v3">
                        <div className="search-field">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" placeholder="What position are you looking for?" />
                        </div>
                        <div className="search-field">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <input type="text" placeholder="Location" />
                        </div>
                        <button className="search-btn-cta">Search job</button>
                    </div>
                </div>
            </section>

            <div className="container pb-20">
                <div className="main-grid-v3">
                    <aside className="filters-sidebar">
                        <div className="filters-v3">
                            <h2>Filters</h2>
                            
                            <div className="sidebar-group">
                                <h3>Location</h3>
                                {FILTERS.location.map((loc, i) => (
                                    <label key={loc} className="check-label">
                                        <input type="radio" name="loc" defaultChecked={i===1} />
                                        <span>{loc}</span>
                                    </label>
                                ))}
                            </div>

                            <div className="sidebar-group">
                                <h3>Salary</h3>
                                <div className="salary-toggle">
                                    <button>Hourly</button>
                                    <button>Monthly</button>
                                    <button className="active">Yearly</button>
                                </div>
                                {FILTERS.salary.map((sal, i) => (
                                    <label key={sal} className="check-label">
                                        <input type="radio" name="sal" defaultChecked={i===0} />
                                        <span>{sal}</span>
                                    </label>
                                ))}
                            </div>

                            <div className="sidebar-group">
                                <h3>Date of posting</h3>
                                {FILTERS.date.map((d, i) => (
                                    <label key={d} className="check-label">
                                        <input type="radio" name="date" defaultChecked={i===0} />
                                        <span>{d}</span>
                                    </label>
                                ))}
                            </div>

                            <div className="sidebar-group">
                                <h3>Work experience</h3>
                                {FILTERS.experience.map((e, i) => (
                                    <label key={e} className="check-label">
                                        <input type="radio" name="exp" defaultChecked={i===0} />
                                        <span>{e}</span>
                                    </label>
                                ))}
                            </div>

                            <div className="sidebar-group">
                                <h3>Type of employment</h3>
                                {FILTERS.employment.map((t, i) => (
                                    <label key={t} className="check-label">
                                        <input type="checkbox" defaultChecked={i===0} />
                                        <span>{t}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <section className="feed-column">
                        <div className="feed-header">
                            <h2>3177 Jobs</h2>
                            <div className="filter-pill-v3 cursor-pointer">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 21v-8l-8-8h16l-8 8v6z"></path></svg>
                                <span>Filter by</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                        </div>

                        <div className="job-feed-list">
                            {JOBS.map(job => (
                                <Link href={`/jobs/${job.id}`} key={job.id} className="job-card-premium">
                                    <div className="logo-wrap" style={{ backgroundColor: job.logoColor }}>
                                        {job.initial}
                                    </div>
                                    <div className="card-info">
                                        <div className="company-top">
                                            <span className="company-name">{job.company}</span>
                                            <span className="post-time">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                {job.time}
                                            </span>
                                        </div>
                                        <h3 className="job-main-title">
                                            {job.title}
                                            {job.isNew && <span className="tag-new">New post</span>}
                                        </h3>
                                        <div className="meta-info-strip">
                                            <div className="meta-point">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                {job.location}
                                            </div>
                                            <div className="meta-point">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                {job.type}
                                            </div>
                                            <div className="meta-point">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                                {job.salary}
                                            </div>
                                        </div>
                                        <p className="job-summary">Mollis in labore um tempor lorem incididunt inere. Duis eu ex ad sunt. Pariatur sint culpa dol. Incididunt. eiusmod culpa laborum tempor lorem incididunt.</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="pagination-wrap">
                            <div className="page-square">&larr;</div>
                            <div className="page-square active">1</div>
                            <div className="page-square">2</div>
                            <div className="page-square">3</div>
                            <div className="page-square">4</div>
                            <div className="page-square">5</div>
                            <div className="page-square">&rarr;</div>
                        </div>
                    </section>

                    <aside className="email-sidebar">
                        <div className="email-box text-left">
                            <h3>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                Email me for jobs
                            </h3>
                            <p>Ut esse et dolo rube quis, Sit anim labore dolore. Kole ex fugiat commod etir her.</p>
                            <input type="email" placeholder="name@email.com" />
                            <button className="sub-btn">Subscribe</button>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
