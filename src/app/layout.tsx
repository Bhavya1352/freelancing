import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'jobkar - Find your new job today',
    description: 'jobkar job portal dashboard.',
    icons: {
        icon: '/logo15.png',
        shortcut: '/logo15.png',
        apple: '/logo15.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
