import Link from 'next/link';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top grid-4">
                    <div className="footer-brand">
                        <Link href="/" className="logo flex items-center gap-2 mb-4">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 2L13.8 6.1C13.29 6.35 12.71 6.35 12.2 6.1L4 2V12C4 18 8.8 22 13 22C17.2 22 22 18 22 12V2Z" />
                            </svg>
                            <span className="font-semibold text-white" style={{ fontSize: '24px' }}>Jobkar</span>
                        </Link>
                        <p className="text-footer-light text-sm mb-4" style={{ lineHeight: '1.6' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="text-white mb-4 font-semibold" style={{ fontSize: '18px' }}>Company</h4>
                        <ul className="flex flex-col gap-3 text-sm text-footer-light">
                            <li><Link href="/">About Us</Link></li>
                            <li><Link href="/">Contact Us</Link></li>
                            <li><Link href="/">Pricing</Link></li>
                            <li><Link href="/">Privacy Policy</Link></li>
                            <li><Link href="/">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4 className="text-white mb-4 font-semibold" style={{ fontSize: '18px' }}>Services</h4>
                        <ul className="flex flex-col gap-3 text-sm text-footer-light">
                            <li><Link href="/">For Employers</Link></li>
                            <li><Link href="/">For Candidates</Link></li>
                            <li><Link href="/">Jobs Board</Link></li>
                            <li><Link href="/">Resume Search</Link></li>
                            <li><Link href="/">Pricing Packages</Link></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4 className="text-white mb-4 font-semibold" style={{ fontSize: '18px' }}>Newsletter</h4>
                        <p className="text-footer-light text-sm mb-4" style={{ lineHeight: '1.6' }}>Subscribe to our newsletter to get the latest jobs and updates.</p>
                        <div className="newsletter-form flex gap-2">
                            <input type="email" placeholder="Email Address" className="input-dark" />
                            <button className="btn-primary" style={{ padding: '12px 24px' }}>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom flex items-center justify-between text-sm text-footer-light mt-8 pt-6 border-t-dark">
                    <p>&copy; 2026 Jobkar. All Rights Reserved.</p>
                    <div className="social-links flex gap-6">
                        <Link href="/">Facebook</Link>
                        <Link href="/">Twitter</Link>
                        <Link href="/">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
