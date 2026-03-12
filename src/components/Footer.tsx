import Link from 'next/link';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top grid-4">
                    <div className="footer-brand">
                        <Link href="/" className="logo flex items-center gap-2 mb-4">
                            <img src="/logo15.png" alt="jobkar logo" width="32" height="32" className="object-contain" />
                            <span className="font-semibold text-white" style={{ fontSize: '24px' }}>jobkar</span>
                        </Link>
                        <p className="text-footer-light text-sm mb-4" style={{ lineHeight: '1.6' }}>
                            Jobkar is the leading platform connecting talented individuals with top-tier companies across India. We simplify the hiring process with AI-driven matching and a seamless user experience.
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
                    <p>&copy; 2026 jobkar. All Rights Reserved.</p>
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
