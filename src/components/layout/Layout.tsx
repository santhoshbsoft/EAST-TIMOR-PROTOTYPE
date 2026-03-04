import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChatbot from '../common/AIChatbot';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-ocean-deep">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <AIChatbot />
        </div>
    );
};

export default Layout;
