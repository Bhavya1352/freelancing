'use client';
import Link from 'next/link';
import { useState } from 'react';

import './Navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container flex items-center justify-between">
                <Link href="/" className="logo flex items-center gap-2">
                    <img src="/logo.png" alt="Jobkar Logo" width="40" height="40" className="object-contain" />
                    <span className="font-extrabold text-2xl text-dark tracking-tight">Jobkar</span>
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <nav className={`nav-links flex gap-10 text-base text-gray-800 font-bold ${isMenuOpen ? 'mobile-active' : ''}`}>
                    <Link href="/" className="text-dark" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="/blog" className="text-gray-500 hover:text-dark transition-colors" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                    <Link href="/" className="text-gray-500 hover:text-dark transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
                    <Link href="/contact" className="text-gray-500 hover:text-dark transition-colors" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                    <Link href="/about" className="text-gray-500 hover:text-dark transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <div className="mobile-only mt-4">
                        <button className="btn-primary rounded-full px-7 py-3 font-semibold text-sm shadow-md w-full">Download Our App</button>
                    </div>
                </nav>

                <div className="nav-actions flex items-center gap-4 desktop-only">
                    <Link href="/login" className="text-gray-500 font-bold hover:text-primary transition-colors">Login</Link>
                    <Link href="/signup">
                        <button className="btn-primary rounded-full px-7 py-3 font-semibold text-sm shadow-md hover:-translate-y-1 transition-transform">Signup</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
