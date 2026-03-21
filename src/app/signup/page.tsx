'use client';
import Link from 'next/link';
import { useState } from 'react';
import '../login/Login.css';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Signup Successful (Mock)! Redirecting to Dashboard...');
        window.location.href = '/';
    };

    return (
        <main className="login-page">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <Link href="/" className="login-logo">
                            <img src="/logo.png" alt="Jobkar" width="48" height="48" />
                            <span>Jobkar</span>
                        </Link>
                        <h1>Create Account</h1>
                        <p>Join thousand of job seekers and start your career journey today.</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your full name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input 
                                type="email" 
                                placeholder="name@example.com" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                        </div>
                        <button type="submit" className="login-btn">Sign Up Now</button>
                    </form>

                    <div className="login-footer">
                        <p>Already have an account? <Link href="/login">Login here</Link></p>
                    </div>
                </div>
                
                <div className="login-illustration desktop-only">
                    <img src="/hero section right1.png" alt="Signup Illustration" />
                    <div className="illustration-text">
                        <h2>Your dream career starts here.</h2>
                        <p>Jobkar connects you with the best opportunities across the globe. Join us today!</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
