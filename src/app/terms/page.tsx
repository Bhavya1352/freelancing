'use client';
import React from 'react';
import './Terms.css';

const TEXT_BLOCK = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const SECTION_CONTENT = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.`;

const SECTIONS = [
    { title: "Section 1.10.32 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BC", content: SECTION_CONTENT },
    { title: "Section 1.10.33 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BC", content: SECTION_CONTENT },
    { title: "Section 1.10.34 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BC", content: SECTION_CONTENT },
    { title: "Section 1.10.35 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BC", content: SECTION_CONTENT },
];

export default function TermsPage() {
    return (
        <main className="terms-page">
            <header className="terms-header">
                <div className="container" style={{ position: 'relative' }}>
                    <h1>Terms & Conditions</h1>
                    <p>Thousands of jobs in the Computer, engineering and technology sectors are waiting for you.</p>
                    
                    {/* Bird Decorations from Screenshot */}
                    <img src="/bird in privacy policy.png" alt="" className="header-bird bird-1" />
                    <img src="/bird2 in privacy policy.png" alt="" className="header-bird bird-2" />
                    <img src="/bird3 in privacy policy.png" alt="" className="header-bird bird-3" />
                </div>
            </header>

            <section className="terms-content">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="policy-card">
                        <article className="policy-section">
                            <p>{TEXT_BLOCK}</p>
                            
                            {SECTIONS.map((section, idx) => (
                                <React.Fragment key={idx}>
                                    <h2>{section.title}</h2>
                                    <p>{section.content}</p>
                                    <p>{TEXT_BLOCK}</p>
                                </React.Fragment>
                            ))}
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}
