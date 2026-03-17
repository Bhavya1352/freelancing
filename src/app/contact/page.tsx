'use client';
import React from 'react';
import './Contact.css';

export default function ContactPage() {
    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div className="container relative">
                    <div className="contact-hero-header">
                        <div className="contact-hero-content">
                            <span className="label-text">Get Started</span>
                            <h1 className="contact-title">
                                Get in touch with us.<br />
                                We're here to assist you.
                            </h1>
                        </div>
                        <div className="social-sidebar">
                            <a href="#" className="social-icon" aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form-main" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-grid-3">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number (optional)</label>
                                <input type="tel" placeholder="" />
                            </div>
                        </div>
                        <div className="form-group" style={{ marginTop: '60px' }}>
                            <label>Message</label>
                            <textarea rows={1} placeholder=""></textarea>
                        </div>
                        <button type="submit" className="leave-message-btn">
                            Leave us a Message
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '12px' }}>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </form>
                </div>
            </section>

            <section className="contact-info-section">
                <div className="topo-pattern"></div>
                <div className="container">
                    <div className="info-grid">
                        <div className="info-main">
                            <span className="label-text">Contact Info</span>
                            <h2 className="info-title">We are always happy to assist you</h2>
                        </div>
                        <div className="info-item">
                            <h3>Email Address</h3>
                            <div className="contact-divider"></div>
                            <span className="highlight-text">help@info.com</span>
                            <div className="assistance-details">
                                Assistance hours:<br />
                                Monday - Friday 6 am to 8 pm EST
                            </div>
                        </div>
                        <div className="info-item">
                            <h3>Number</h3>
                            <div className="contact-divider"></div>
                            <span className="highlight-text">(808) 998-34256</span>
                            <div className="assistance-details">
                                Assistance hours:<br />
                                Monday - Friday 6 am to 8 pm EST
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="map-section">
                <div className="container">
                    <div className="map-wrapper">
                        <img src="/map in contact page.png" alt="Map Location" className="map-img" />
                    </div>
                </div>
            </section>
        </main>
    );
}
