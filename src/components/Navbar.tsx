import Link from 'next/link';

import './Navbar.css';

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="container flex items-center justify-between">
                <Link href="/" className="logo flex items-center gap-2">
                    {/* Replaced SVG with logo.png */}
                    <img src="/logo.png" alt="Jobkar Logo" width="40" height="40" className="object-contain" />
                    <span className="font-extrabold text-2xl text-dark tracking-tight">Jobkar</span>
                </Link>

                <nav className="nav-links flex gap-10 text-base text-gray-800 font-bold">
                    <Link href="/" className="text-dark">Home</Link>
                    <Link href="/blog" className="text-gray-500 hover:text-dark transition-colors">Blogs</Link>
                    <Link href="/" className="text-gray-500 hover:text-dark transition-colors">Testimonials</Link>
                    <Link href="/" className="text-gray-500 hover:text-dark transition-colors">Contact Us</Link>
                    <Link href="/" className="text-gray-500 hover:text-dark transition-colors">About Us</Link>
                </nav>

                <div className="nav-actions">
                    <button className="btn-primary rounded-full px-7 py-3 font-semibold text-sm shadow-md hover:-translate-y-1 transition-transform">Download Our App</button>
                </div>
            </div>
        </header>
    );
}
