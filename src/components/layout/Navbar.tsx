import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Discover', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Municipalities', path: '/municipalities' },
        { name: 'Experiences', path: '/experiences' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-sand-beige">
                    TIMOR-<span className="text-sunset-coral">LESTE</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'after:w-full opacity-100' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center space-x-6 pl-6 border-l border-white/10">
                        <button className="opacity-70 hover:opacity-100 transition-opacity">
                            <Globe size={20} />
                        </button>
                        <Link to="/login" className="opacity-70 hover:opacity-100 transition-opacity">
                            <User size={20} />
                        </Link>
                        <button className="btn-primary py-2 text-sm">
                            Plan Your Trip
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-sand-beige"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full glass-dark py-10 px-6 flex flex-col space-y-6 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-xl font-semibold text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="btn-primary w-full">
                            Plan Your Trip
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
