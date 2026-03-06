import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../data/translations';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showLangs, setShowLangs] = useState(false);
    const location = useLocation();
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.discover'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.municipalities'), path: '/municipalities' },
        {
            name: t('nav.experiences'),
            path: '/experiences',
            subLinks: [
                { name: 'Diving Centres', path: '/specialty/diving' },
                { name: 'Arts & Crafts', path: '/specialty/arts-crafts' },
                { name: 'Coffee', path: '/specialty/coffee' }
            ]
        },
        {
            name: t('nav.infoNews'),
            path: '/news',
            subLinks: [
                { name: t('nav.newsStories'), path: '/news' },
                { name: t('nav.partners'), path: '/partners' }
            ]
        },
    ];

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: 'English' },
        { code: 'pt', label: 'Português' },
        { code: 'tt', label: 'Tetum' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-dark py-4 !border-none' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-sand-beige">
                    TIMOR-<span className="text-sunset-coral">LESTE</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path || (link.subLinks && link.subLinks.some(s => location.pathname === s.path)) ? 'after:w-full opacity-100' : ''}`}
                            >
                                {link.name}
                            </Link>
                            {link.subLinks && (
                                <div className="absolute top-[120%] left-0 mt-2 w-48 bg-ocean-deep/95 backdrop-blur-md rounded-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl py-2 before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                                    {link.subLinks.map(sub => (
                                        <Link
                                            key={sub.name}
                                            to={sub.path}
                                            className="block px-4 py-2 text-sm font-bold opacity-70 hover:opacity-100 hover:text-sunset-coral transition-colors"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex items-center space-x-6 pl-6 border-l border-white/10">
                        <div className="relative">
                            <button
                                onClick={() => setShowLangs(!showLangs)}
                                className="opacity-70 hover:opacity-100 transition-opacity flex items-center space-x-1"
                            >
                                <Globe size={20} />
                                <span className="text-[10px] font-bold uppercase">{language}</span>
                            </button>

                            <AnimatePresence>
                                {showLangs && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full right-0 mt-4 glass-dark p-2 rounded-2xl border border-white/10 min-w-[140px] shadow-2xl"
                                    >
                                        {languages.map(lang => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setLanguage(lang.code);
                                                    setShowLangs(false);
                                                }}
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${language === lang.code ? 'bg-sunset-coral text-white' : 'hover:bg-white/5 opacity-60 hover:opacity-100'}`}
                                            >
                                                <span>{lang.label}</span>
                                                {language === lang.code && <Check size={14} />}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
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
                            <div key={link.name} className="flex flex-col items-center">
                                <Link
                                    to={link.path}
                                    className="text-xl font-semibold text-center mb-2"
                                    onClick={() => !link.subLinks && setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                {link.subLinks && (
                                    <div className="flex flex-col space-y-4 mt-2 mb-4 items-center">
                                        {link.subLinks.map(sub => (
                                            <Link
                                                key={sub.name}
                                                to={sub.path}
                                                className="text-sm font-medium text-sunset-coral/90 uppercase tracking-widest"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="flex justify-center space-x-6 py-6 border-t border-white/10">
                            {languages.map(lang => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className={`text-xs font-bold uppercase tracking-widest ${language === lang.code ? 'text-sunset-coral' : 'opacity-40'}`}
                                >
                                    {lang.code}
                                </button>
                            ))}
                        </div>

                        <button className="btn-primary w-full">
                            {t('nav.planTrip')}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
