'use client';
import Link from 'next/link';
import { useState } from 'react';
import './Login.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Login Successful (Mock)! Redirecting to Dashboard...');
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
                        <h1>Welcome Back!</h1>
                        <p>Login to your account to continue your job search.</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
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
                        <div className="form-options">
                            <label className="checkbox-container">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Remember me
                            </label>
                            <Link href="#" className="forgot-password">Forgot password?</Link>
                        </div>
                        <button type="submit" className="login-btn">Login to Account</button>
                    </form>

                    <div className="login-footer">
                        <p>Don&apos;t have an account? <Link href="/signup">Sign up for free</Link></p>
                    </div>
                </div>
                
                <div className="login-illustration desktop-only">
                    <img src="/hero section left.png" alt="Login Illustration" />
                    <div className="illustration-text">
                        <h2>Your dream job is just a click away.</h2>
                        <p>Connect with 500+ top companies and start your career journey with Jobkar.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
