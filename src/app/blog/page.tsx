import Link from 'next/link';
import './Blog.css';

const BLOG_POSTS = [
    {
        id: 1,
        title: 'Bill Walsh leadership lessons',
        excerpt: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
        date: 'Sunday, 1 Jan 2023',
        tags: ['Leadership', 'Management'],
        img: '/bill wash (blog).png'
    },
    {
        id: 2,
        title: 'PM mental models',
        excerpt: 'Mental models are simple expressions of complex processes or relationships.',
        date: 'Sunday, 1 Jan 2023',
        tags: ['Product', 'Research', 'Frameworks'],
        img: '/PM mental models.png'
    },
    {
        id: 3,
        title: 'What is Wireframing?',
        excerpt: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
        date: 'Sunday, 1 Jan 2023',
        tags: ['Design', 'Research'],
        img: '/wireframing (blog).png'
    },
    {
        id: 4,
        title: 'How collaboration makes us better designers',
        excerpt: 'Collaboration can make our teams stronger, and our individual designs better.',
        date: 'Sunday, 1 Jan 2023',
        tags: ['Design', 'Research'],
        img: '/collaboration (blog).png'
    },
    {
        id: 5,
        title: 'Our top 10 Javascript frameworks to use',
        excerpt: 'JavaScript frameworks make development easy with extensive features and functionalities.',
        date: 'Sunday, 1 Jan 2023',
        tags: ['Software Development', 'Tools', 'SaaS'],
        img: '/javascript( blog).png'
    },
    {
        id: 6,
        title: 'Podcast: Creating a better CX Community',
        excerpt: 'Starting a community doesn\'t need to be complicated, but how do you get started?',
        date: 'Sunday, 1 Jan 2023',
        tags: ['Podcasts', 'Customer Success'],
        img: '/podcast (blog).png'
    }
];

export default function BlogPage() {
    return (
        <main className="blog-page">
            <div className="container">

                <header className="blog-header-hero">
                    <h1 className="huge-title">THE BLOG</h1>
                </header>

                <section className="recent-posts-section">
                    <h2 className="section-heading text-dark text-2xl font-semibold mb-6">Recent blog posts</h2>

                    <div className="recent-posts-grid">
                        <article className="main-featured-post">
                            <div className="post-img-wrap mb-4">
                                <img src="/ux review image (blog).png" alt="Featured" />
                            </div>
                            <p className="post-date text-primary text-sm font-semibold mb-2">Olivia Rhye • 1 Jan 2023</p>
                            <h3 className="post-title text-2xl font-bold mb-3 flex items-center justify-between">
                                <Link href="#" className="hover:text-primary transition-colors">UX review presentations</Link>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </h3>
                            <p className="post-excerpt text-gray mb-4">
                                How do you create compelling presentations that wow your colleagues and impress your managers?
                            </p>
                            <div className="post-tags flex gap-2">
                                <span className="badge badge-primary">Design</span>
                                <span className="badge badge-primary">Research</span>
                                <span className="badge badge-primary">Presentation</span>
                            </div>
                        </article>

                        <div className="side-featured-posts flex flex-col gap-6">
                            <article className="side-post flex gap-4 items-center">
                                <div className="side-post-img-wrap flex-shrink-0">
                                    <img src="/migrating to linear (blog).png" alt="Post" />
                                </div>
                                <div className="side-post-content">
                                    <p className="post-date text-primary text-sm font-semibold mb-1">Phoenix Baker • 1 Jan 2023</p>
                                    <h3 className="post-title text-lg font-bold mb-2">Migrating to Linear 101</h3>
                                    <p className="post-excerpt text-gray text-sm mb-3">Linear helps streamline software projects, sprints, tasks, and bug tracking.</p>
                                    <div className="post-tags flex gap-2">
                                        <span className="badge badge-primary">Design</span>
                                        <span className="badge badge-primary">Research</span>
                                    </div>
                                </div>
                            </article>
                            
                            <article className="side-post flex gap-4 items-center">
                                <div className="side-post-img-wrap flex-shrink-0">
                                    <img src="/building your api (blog).png" alt="Post" />
                                </div>
                                <div className="side-post-content">
                                    <p className="post-date text-primary text-sm font-semibold mb-1">Lana Steiner • 1 Jan 2023</p>
                                    <h3 className="post-title text-lg font-bold mb-2">Building your API Stack</h3>
                                    <p className="post-excerpt text-gray text-sm mb-3">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...</p>
                                    <div className="post-tags flex gap-2">
                                        <span className="badge badge-primary">Design</span>
                                        <span className="badge badge-primary">Research</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="middle-featured-section mt-16 mb-16">
                    <article className="featured-banner flex flex-col md:flex-row gap-8 items-center bg-white border border-gray-100 rounded-2xl overflow-hidden p-6 md:p-0">
                        <div className="banner-img-wrap w-full md:w-1/2">
                            <img src="/grid system for better.png" alt="Grid System" className="w-full h-auto object-cover" />
                        </div>
                        <div className="banner-content w-full md:w-1/2 md:pr-12">
                            <p className="post-date text-primary text-sm font-semibold mb-2">Richard Blair • 1 Jan 2023</p>
                            <h3 className="post-title text-2xl font-bold mb-4 flex items-center justify-between">
                                Grid system for better Design User Interface
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </h3>
                            <p className="post-excerpt text-gray mb-6">
                                A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grids and systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
                            </p>
                            <div className="post-tags flex gap-2">
                                <span className="badge badge-primary">Design</span>
                                <span className="badge badge-primary">Interface</span>
                            </div>
                        </div>
                    </article>
                </section>

                <section className="all-posts-section">
                    <h2 className="section-heading text-dark text-2xl font-semibold mb-6">All blog posts</h2>

                    <div className="all-posts-grid">
                        {BLOG_POSTS.map((post) => (
                            <article key={post.id} className="grid-post">
                                <div className="grid-post-img-wrap mb-4">
                                    <img src={post.img} alt={post.title} />
                                </div>
                                <p className="post-date text-primary text-sm font-semibold mb-2">{post.date}</p>
                                <h3 className="post-title text-xl font-bold mb-3 flex items-center justify-between">
                                    {post.title}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </h3>
                                <p className="post-excerpt text-gray text-sm mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="post-tags flex gap-2 flex-wrap">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="badge badge-primary">{tag}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="pagination flex items-center justify-between mt-12 mb-8 pt-6 border-t">
                        <button className="btn-outline flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg> Previous</button>
                        <div className="page-numbers flex gap-2">
                            <button className="page-num active">1</button>
                            <button className="page-num">2</button>
                            <button className="page-num">3</button>
                            <span className="page-num-dots">...</span>
                            <button className="page-num">8</button>
                            <button className="page-num">9</button>
                            <button className="page-num">10</button>
                        </div>
                        <button className="btn-outline flex items-center gap-2">Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg></button>
                    </div>
                </section>

            </div>
        </main>
    );
}
