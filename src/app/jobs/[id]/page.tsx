'use client';
import Link from 'next/link';
import './JobDetails.css';

export default function JobDetailsPage({ params }: { params: { id: string } }) {
    return (
        <main className="job-details-page-v2 bg-[#FAFAFA] pt-8 pb-16">
            <div className="container">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-8 font-medium">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/jobs">Jobs</Link>
                    <span>/</span>
                    <span className="text-dark">Corporate Solutions Executive</span>
                </div>

                <div className="job-details-main-grid">
                    {/* Left Column: Job Header & Content */}
                    <div className="job-main-column">
                        <div className="job-header-v2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-8">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-4">
                                    <div className="logo-box-lg w-16 h-16 bg-[#F9FAFB] rounded-xl flex items-center justify-center border border-gray-100">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#4285F4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /></svg>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">
                                            <span className="text-blue-600">Luthar and Sons</span>
                                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                            <span>12 min ago</span>
                                        </div>
                                        <h1 className="text-3xl font-black text-dark tracking-tight">Corporate Solutions Executive</h1>
                                        <div className="flex gap-4 text-[13px] text-gray-500 font-semibold mt-3">
                                            <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> Commerce</span>
                                            <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Full Time</span>
                                            <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> $45000 - $48000</span>
                                            <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> New York, USA</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-4">
                                    <button className="p-2.5 rounded-xl border border-gray-100 text-gray-400 hover:text-primary transition-colors">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                    </button>
                                    <button className="px-10 py-3.5 bg-[#2563EB] text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:-translate-y-0.5 transition-all text-sm">Apply Job</button>
                                </div>
                            </div>
                        </div>

                        <div className="job-description-v2 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                            <section className="mb-10">
                                <h2 className="text-xl font-black text-dark mb-5 tracking-tight">Job Description</h2>
                                <p className="text-[15px] text-gray-500 leading-[1.8] font-medium">
                                    Nam et elit purus. In hac habitasse platea dictumst. Donec id congue sem nisl odio suscipit et in. Felis ac nisl et erat. Cras
                                    faucibus fringilla sapien nec enim laoreet vel facilisis. Habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla viverra eleifend dictum.
                                    <br /><br />
                                    Et sunt in temporibus duis vel nisl tellus. Omnis rerum ea ab nihil molestiae, illum facilis repellat voluptatem omnis vero. Cum facilis aspernatur iusto itaque inventore voluptas quis iusto dolores natus quos minus nisi nesciunt qui optio, et nihil iusto molestiae natus. Justo rem animi amet, perferendis rerum natus magni, totam omnis quia perferendis rem natus quis dolores delectus.
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-xl font-black text-dark mb-5 tracking-tight">Key Responsibilities</h2>
                                <ul className="list-none space-y-4">
                                    {[
                                        'Et sunt in temporibus duis vel nisl tellus. Omnis rerum ea ab nihil molestiae, illum facilis repellat voluptatem omnis vero.',
                                        'Cum facilis aspernatur iusto itaque inventore voluptas quis iusto dolores natus quos minus nisi nesciunt qui optio.',
                                        'Totam omnis quia perferendis rem natus quis dolores delectus. Cum facilis aspernatur iusto itaque inventore voluptas quis iusto.',
                                        'Justo rem animi amet, perferendis rerum natus magni, totam omnis quia perferendis rem natus quis dolores delectus.',
                                        'Justo rem animi amet, perferendis rerum natus magni, totam omnis quia perferendis rem natus quis dolores delectus.',
                                        'Justo rem animi amet, perferendis rerum natus magni, totam omnis quia perferendis rem natus quis dolores delectus.'
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-4 text-[14px] text-gray-500 font-medium leading-relaxed">
                                            <svg className="mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-black text-dark mb-5 tracking-tight">Professional Skills</h2>
                                <ul className="list-none space-y-4">
                                    {[
                                        'Et sunt in temporibus duis vel nisl tellus. Omnis rerum ea ab nihil.',
                                        'Cum facilis aspernatur iusto itaque inventore voluptas quis iusto.',
                                        'Totam omnis quia perferendis rem natus quis dolores delectus.',
                                        'Justo rem animi amet, perferendis rerum natus magni, totam omnis.',
                                        'Totam omnis quia perferendis rem natus quis dolores delectus.'
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-4 text-[14px] text-gray-500 font-medium leading-relaxed">
                                            <svg className="mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <div className="flex flex-wrap gap-2 mt-12">
                                <span className="text-gray-800 font-bold mr-2">Tags:</span>
                                {['Full time', 'Contract', 'Near - York', 'Corporate', 'Lutcher'].map(tag => (
                                    <span key={tag} className="px-4 py-1.5 bg-blue-50 text-blue-600 font-bold text-[12px] rounded-md">{tag}</span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                                <span className="text-dark font-black">Share Job:</span>
                                <div className="flex gap-2">
                                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-all"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></button>
                                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-all"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></button>
                                    <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-primary hover:text-white transition-all"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg></button>
                                </div>
                            </div>
                        </div>

                        {/* Related Jobs */}
                        <section className="related-jobs-v2 mt-16">
                            <h2 className="text-3xl font-black text-dark tracking-tight mb-2">Related Jobs</h2>
                            <p className="text-[14px] text-gray-400 mb-8 font-medium">All relevant jobs positions found below at several category</p>
                            
                            <div className="space-y-4">
                                {[
                                    { id: 10, title: 'Internal Creative Coordinator', company: 'Green Group', salary: '$44000 - $48000', time: '14 min ago' },
                                    { id: 11, title: 'District Intranet Director', company: 'VonRueden - Weber Co', salary: '$52000 - $58000', time: '24 min ago' },
                                    { id: 12, title: 'Corporate Tactics Facilitator', company: 'Conelan, Turner and Bailey Inc', salary: '$35000 - $40000', time: '55 min ago' }
                                ].map(job => (
                                    <div key={job.id} className="related-card-v2 bg-white p-6 rounded-3xl border border-gray-100 flex items-center justify-between">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary font-bold">G</div>
                                            <div>
                                                <div className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mb-1">{job.time}</div>
                                                <h3 className="font-bold text-dark text-[17px]">{job.title}</h3>
                                                <p className="text-[12px] text-gray-400 font-medium">{job.company}</p>
                                                <div className="flex gap-4 mt-3 text-[12px] text-gray-500 font-semibold">
                                                    <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> Commerce</span>
                                                    <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Full Time</span>
                                                    <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> {job.salary}</span>
                                                    <span className="flex items-center gap-1.5"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> New York, USA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="px-6 py-2.5 bg-[#2563EB] text-white font-bold rounded-lg text-xs">Job Details</button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Sidebar */}
                    <aside className="job-sidebar-column">
                        <div className="sidebar-widget-v2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-8">
                            <h3 className="text-lg font-black text-dark underline decoration-[#2563EB] decoration-2 underline-offset-8 mb-8">Job Overview</h3>
                            <div className="space-y-6">
                                {[
                                    { label: 'Job Title', value: 'Corporate Solutions Executive', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> },
                                    { label: 'Job Type', value: 'Full Time', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> },
                                    { label: 'Category', value: 'Commerce', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> },
                                    { label: 'Experience', value: '5 Years', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"></path></svg> },
                                    { label: 'Degree', value: 'Master', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> },
                                    { label: 'Offered Salary', value: '$45000 - $48000', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
                                    { label: 'Location', value: 'New York, USA', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div className="w-10 h-10 bg-blue-50 text-primary flex items-center justify-center rounded-lg flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">{item.label}</p>
                                            <p className="text-[14px] text-dark font-bold mt-0.5">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 h-48 bg-[#F9FAFB] relative">
                                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" alt="Location Map" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-xl"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /></svg></div>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-widget-v2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-black text-dark underline decoration-[#2563EB] decoration-2 underline-offset-8 mb-8">Send Us Message</h3>
                            <form className="space-y-4">
                                <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl">
                                    <svg width="18" height="18" fill="#9CA3AF" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    <input type="text" placeholder="Full name" className="bg-transparent text-xs font-bold outline-none w-full text-dark opacity-100" />
                                </div>
                                <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl">
                                    <svg width="18" height="18" fill="#9CA3AF" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 1.1L12 11 4 5.1V18h16V5.1z" /></svg>
                                    <input type="email" placeholder="Email Address" className="bg-transparent text-xs font-bold outline-none w-full text-dark opacity-100" />
                                </div>
                                <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl">
                                    <svg width="18" height="18" fill="#9CA3AF" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                                    <input type="tel" placeholder="Phone Number" className="bg-transparent text-xs font-bold outline-none w-full text-dark opacity-100" />
                                </div>
                                <div className="p-3.5 bg-gray-50 rounded-xl">
                                    <textarea placeholder="Your Message" className="bg-transparent text-xs font-bold outline-none w-full text-dark h-24 resize-none opacity-100" />
                                </div>
                                <button type="button" className="w-full py-4 bg-[#2563EB] text-white font-bold rounded-xl text-xs hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-100">Send Message</button>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
