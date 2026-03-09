'use client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JOBS } from '../../../data/jobsData';
import './JobDetails.css';

export default function JobDetailsPage({ params }: { params: { id: string } }) {
    const job = JOBS.find(j => j.id === parseInt(params.id));

    if (!job) {
        notFound();
    }

    return (
        <main className="job-details-page-v3 pt-10 pb-24">
            <div className="container">
                {/* Breadcrumbs */}
                <div className="breadcrumb-v3">
                    <Link href="/">Home</Link>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    <Link href="/jobs">Jobs</Link>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    <span className="text-dark">Corporate Solutions Executive</span>
                </div>

                <div className="details-hero-v3">
                    <div className="pill-time-v3">10 min ago</div>
                    <div className="details-top-info-v3">
                        <div className="flex items-start gap-8">
                            <div className="w-24 h-24 rounded-[32px] flex items-center justify-center text-white font-black text-5xl shadow-2xl ring-[12px] ring-slate-50 flex-shrink-0" style={{ backgroundColor: job.logoColor }}>
                                {job.initial}
                            </div>
                            <div className="details-title-box-v3">
                                <h1>{job.title}</h1>
                                <div className="details-subtitle-v3">
                                    <span className="text-blue-600">Luthar and Sons</span>
                                    <span className="w-2 h-2 bg-slate-200 rounded-full"></span>
                                    <span className="text-slate-400">New York, USA</span>
                                </div>
                            </div>
                        </div>
                        <div className="details-actions-v3">
                            <button className="btn-icon-v3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                            </button>
                            <button className="btn-cta-v3">Apply Job</button>
                        </div>
                    </div>
                </div>

                {/* White Meta Block */}
                <div className="white-meta-block-v3">
                    <div className="meta-item-box-v3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        <span>Commerce</span>
                    </div>
                    <div className="meta-item-box-v3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>Full Time</span>
                    </div>
                    <div className="meta-item-box-v3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        <span>$45000 - $48000</span>
                    </div>
                    <div className="meta-item-box-v3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span>New York, USA</span>
                    </div>
                </div>

                <div className="details-grid-v3">
                    <div className="main-content-part">
                        <section className="job-section-v3">
                            <h2>Job Description</h2>
                            <p className="font-medium text-[15px]">
                                {job.description}
                                <br /><br />
                                Et sunt in temporibus duis vel nisl tellus. Omnis rerum ea ab nihil molestiae, illum facilis repellat voluptatem omnis vero. Cum facilis aspernatur iusto itaque inventore voluptas quis iusto dolores natus quos minus nisi nesciunt qui optio, et nihil iusto molestiae natus.
                            </p>
                        </section>

                        <section className="job-section-v3">
                            <h2>Key Responsibilities</h2>
                            <div className="space-y-4">
                                {[1,2,3,4,5,6].map(i => (
                                    <div key={i} className="list-row-v3">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        <span>Et sunt in temporibus duis vel nisl tellus. Omnis rerum ea ab nihil molestiae, illum facilis repellat voluptatem omnis vero.</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="job-section-v3">
                            <h2>Professional Skills</h2>
                            <div className="space-y-4">
                                {[1,2,3,4,5].map(i => (
                                    <div key={i} className="list-row-v3">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        <span>Et sunt in temporibus duis vel nisl tellus. Omnis rerum ea ab nihil molestiae.</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="pt-12 border-t border-slate-100 mt-20">
                            <div className="flex flex-wrap gap-3 mb-10">
                                <span className="text-[13px] font-black text-dark uppercase tracking-widest mr-4 self-center">Tags:</span>
                                {['Full time', 'Commerce', 'New - York', 'Corporate', 'Lutcher'].map(tag => (
                                    <span key={tag} className="px-6 py-2.5 bg-slate-100 text-slate-500 font-bold text-[11px] rounded-xl uppercase tracking-widest">{tag}</span>
                                ))}
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-[14px] font-black text-dark uppercase tracking-widest">Share Job:</span>
                                <div className="flex gap-3">
                                    {[1,2,3,4].map(i => (
                                        <button key={i} className="w-11 h-11 rounded-full bg-white border border-slate-100 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="sidebar-column-v3">
                        <div className="sidebar-card-v3">
                            <h3>Job Overview</h3>
                            <div className="space-y-2">
                                {[
                                    { label: 'Job Title', value: job.title, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> },
                                    { label: 'Job Type', value: job.type, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> },
                                    { label: 'Category', value: job.category, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> },
                                    { label: 'Experience', value: '5 Years', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20M2 12h20"></path></svg> },
                                    { label: 'Degree', value: 'Master', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> },
                                    { label: 'Offered Salary', value: job.salary, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
                                    { label: 'Location', value: job.location, icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> }
                                ].map((item, idx) => (
                                    <div key={idx} className="over-row-v3">
                                        <div className="over-icon-box-v3">{item.icon}</div>
                                        <div>
                                            <p className="over-label-v3">{item.label}</p>
                                            <p className="over-val-v3">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 rounded-[32px] overflow-hidden shadow-sm h-56 relative group">
                                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-card-v3 form-widget-v3">
                            <h3 className="mb-10 text-dark">Send Us Message</h3>
                            <form className="space-y-4">
                                <div className="input-icon-group-v3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    <input type="text" placeholder="Full name" />
                                </div>
                                <div className="input-icon-group-v3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <div className="input-icon-group-v3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    <input type="tel" placeholder="Phone Number" />
                                </div>
                                <div className="input-icon-group-v3">
                                    <textarea placeholder="Your Message" rows={5} style={{paddingLeft: '20px'}} />
                                </div>
                                <button type="button" className="cta-send-v3">Send Message</button>
                            </form>
                        </div>
                    </aside>
                </div>

                <section className="related-header-v3 mt-24">
                    <h2>Related Jobs</h2>
                    <p>At vero lobortis pretium tincidunt enim lacus at semper aliquet</p>
                    <div className="space-y-4">
                        {JOBS.slice(0, 3).map(j => (
                            <div key={j.id} className="rel-card-v3">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl ring-4 ring-slate-50" style={{ backgroundColor: j.logoColor }}>
                                        {j.initial}
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-blue-600 font-extrabold uppercase tracking-widest mb-1.5">14 min ago</div>
                                        <h3 className="text-xl font-black text-dark mb-1">{j.title}</h3>
                                        <p className="text-xs text-slate-400 font-bold mb-4">{j.company}</p>
                                        <div className="flex gap-8 text-[13px] font-bold text-slate-500">
                                            <span className="flex items-center gap-2"><svg className="text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> New York, USA</span>
                                            <span className="flex items-center gap-2"><svg className="text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Full Time</span>
                                            <span className="flex items-center gap-2"><svg className="text-blue-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> $44000 - $48000</span>
                                        </div>
                                    </div>
                                </div>
                                <Link href={`/jobs/${j.id}`} className="px-12 py-3.5 bg-blue-600 text-white font-black rounded-xl text-xs tracking-widest uppercase hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">Job Details</Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
