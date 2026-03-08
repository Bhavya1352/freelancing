import Link from 'next/link';
import './JobDetails.css';

export default function JobDetailsPage({ params }: { params: { id: string } }) {
    return (
        <main className="job-details-page">
            <div className="container">
                {/* Breadcrumbs */}
                <div className="breadcrumbs flex gap-2 items-center text-sm text-gray">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/">Find Job</Link>
                    <span>/</span>
                    <span className="text-dark font-medium">Corporate Solutions Executive</span>
                </div>

                <div className="job-header flex justify-between items-start">
                    <div className="job-header-left flex gap-4 items-center">
                        <div className="company-logo-lg flex items-center justify-center">
                            {/* Google logo placeholder */}
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="job-title-lg text-dark">Corporate Solutions Executive</h1>
                            <div className="job-meta-row flex gap-4 text-sm text-gray mt-2">
                                <span className="flex items-center gap-1">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"></circle><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path></svg>
                                    New York, USA
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"></path><rect x="3" y="10" width="18" height="12" rx="2" ry="2"></rect></svg>
                                    Full Time
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    1 Day Ago
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="job-header-actions flex gap-3">
                        <button className="btn-light flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                            Save Job
                        </button>
                        <button className="btn-primary flex items-center gap-2">
                            Apply Now
                        </button>
                    </div>
                </div>

                <div className="job-content-grid">

                    <div className="job-main-article">
                        <section className="article-section">
                            <h2 className="article-title text-dark">Job Description</h2>
                            <p className="article-text text-gray">
                                Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis. Pellentesque varius augue in purus lobortis in varius erat consequat.
                                <br /><br />
                                Aliquam erat volutpat. Nam sit amet tortor metus. Sed dictum tristique risus. In hac habitasse platea dictumst. Vestibulum varius enim ex, at sollicitudin odio congue vitae. Nullam sed eros tortor.
                            </p>
                        </section>

                        <section className="article-section">
                            <h2 className="article-title text-dark">Key Responsibilities</h2>
                            <ul className="check-list text-gray">
                                <li>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</li>
                                <li>Work with BAs, product managers and tech teams to lead the Product Design</li>
                                <li>Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.</li>
                                <li>Accurately estimate design tickets during planning sessions.</li>
                                <li>Contribute to sketching sessions involving non-designersBuild, and maintain our design system.</li>
                                <li>Design pixel-perfect interfaces with a high attention to detail.</li>
                            </ul>
                        </section>

                        <section className="article-section">
                            <h2 className="article-title text-dark">Professional Skills</h2>
                            <ul className="check-list text-gray">
                                <li>Strong portfolio demonstrating your design skills and past work (web & mobile).</li>
                                <li>3+ years of experience as a UI/UX Designer.</li>
                                <li>In-depth knowledge of UI/UX tools like Figma, Sketch, or Adobe XD.</li>
                                <li>Understanding of HTML/CSS and basic capabilities of modern web.</li>
                                <li>Good empathy for user needs and a user-centered design approach.</li>
                                <li>Excellent communication and teamwork skills.</li>
                            </ul>
                        </section>

                        <section className="article-section mt-8">
                            <h2 className="article-title text-dark mb-4">Tags</h2>
                            <div className="tags-flex flex gap-2 flex-wrap">
                                <span className="tag-item">HTML & CSS</span>
                                <span className="tag-item">React JS</span>
                                <span className="tag-item">Angular JS</span>
                                <span className="tag-item">Photoshop</span>
                                <span className="tag-item">Illustrator</span>
                            </div>
                        </section>

                        <div className="share-section flex items-center gap-4 mt-8 pt-8 border-t-light">
                            <span className="text-dark font-medium">Share this:</span>
                            <div className="social-pill-group flex gap-2">
                                <button className="social-pill text-gray flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> Facebook</button>
                                <button className="social-pill text-gray flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> Twitter</button>
                                <button className="social-pill text-gray flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76 0-1.5-.5-2.75-1.5-3.75.15-.4.65-1.9-.15-4.2 0 0-1.2-.4-4 1.5a13.3 13.3 0 0 0-7 0C6.2 3.6 5 4 5 4c-.8 2.3-.3 3.8-.15 4.2-1 1-1.5 2.25-1.5 3.75 0 5.2 3 6.4 6 6.76A4.8 4.8 0 0 0 8 18v4"></path></svg> GitHub</button>
                            </div>
                        </div>

                        <section className="related-jobs mt-12 mb-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-dark">Related Jobs</h2>
                                <Link href="/" className="text-primary text-sm font-medium hover-primary">View All &rarr;</Link>
                            </div>
                            <div className="related-jobs-list flex flex-col gap-4">
                                {[1, 2].map((item) => (
                                    <div key={item} className="related-job-card flex items-center justify-between p-4 border rounded-lg hover-border-primary">
                                        <div className="flex gap-4">
                                            <div className="company-logo-wrap flex items-center justify-center bg-light">
                                                <span className="font-bold text-primary">S</span>
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-dark">Internal Creative Coordinator</h3>
                                                <div className="flex gap-4 text-xs text-gray mt-2">
                                                    <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> Software</span>
                                                    <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"></circle><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path></svg> Remote</span>
                                                    <span className="flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 2 Days Ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="badge badge-primary">Full Time</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className="job-sidebar">
                        <div className="sidebar-widget overview-widget">
                            <h3 className="widget-title text-dark">Job Overview</h3>
                            <div className="overview-list flex flex-col gap-4 mt-6">
                                <div className="overview-item flex gap-4">
                                    <div className="overview-icon text-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                                    <div>
                                        <span className="text-xs text-gray block">Date Posted</span>
                                        <span className="text-sm font-medium text-dark">14 June, 2026</span>
                                    </div>
                                </div>
                                <div className="overview-item flex gap-4">
                                    <div className="overview-icon text-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                                    <div>
                                        <span className="text-xs text-gray block">Expiration Date</span>
                                        <span className="text-sm font-medium text-dark">14 July, 2026</span>
                                    </div>
                                </div>
                                <div className="overview-item flex gap-4">
                                    <div className="overview-icon text-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                                    <div>
                                        <span className="text-xs text-gray block">Location</span>
                                        <span className="text-sm font-medium text-dark">New York, USA</span>
                                    </div>
                                </div>
                                <div className="overview-item flex gap-4">
                                    <div className="overview-icon text-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div>
                                    <div>
                                        <span className="text-xs text-gray block">Job Title</span>
                                        <span className="text-sm font-medium text-dark">Executive</span>
                                    </div>
                                </div>
                                <div className="overview-item flex gap-4">
                                    <div className="overview-icon text-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></div>
                                    <div>
                                        <span className="text-xs text-gray block">Hours</span>
                                        <span className="text-sm font-medium text-dark">40h / week</span>
                                    </div>
                                </div>
                                <div className="overview-item flex gap-4">
                                    <div className="overview-icon text-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
                                    <div>
                                        <span className="text-xs text-gray block">Rate/Salary</span>
                                        <span className="text-sm font-medium text-dark">$80k - $120k / year</span>
                                    </div>
                                </div>
                            </div>

                            <div className="map-placeholder mt-6 rounded-lg overflow-hidden">
                                <img src="https://via.placeholder.com/300x150?text=Map+View" alt="Map View" style={{ width: '100%', display: 'block' }} />
                            </div>
                        </div>

                        <div className="sidebar-widget email-me-widget">
                            <h3 className="widget-title text-dark">Email to Me</h3>
                            <form className="email-form flex flex-col gap-3 mt-4">
                                <input type="text" placeholder="Your Name" className="input-field" />
                                <input type="email" placeholder="Email Address" className="input-field" />
                                <input type="tel" placeholder="Phone Number" className="input-field" />
                                <button type="button" className="btn-primary w-full mt-2">Send Message</button>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
