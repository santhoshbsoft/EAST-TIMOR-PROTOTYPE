import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const TIMOR_PLACES = [
    {
        url: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=2000',
        name: 'Mount Ramelau'
    },
    {
        url: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?auto=format&fit=crop&q=80&w=2000',
        name: 'Atauro Reefs'
    },
    {
        url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&q=80&w=2000',
        name: 'Jaco Island'
    },
    {
        url: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&q=80&w=2000',
        name: 'Cristo Rei, Dili'
    }
];

const Hero = () => {
    const [showFilm, setShowFilm] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { t } = useLanguage();

    // Auto-cycle background images
    useState(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % TIMOR_PLACES.length);
        }, 6000);
        return () => clearInterval(interval);
    });

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Carousel */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={TIMOR_PLACES[currentImageIndex].url}
                            alt={TIMOR_PLACES[currentImageIndex].name}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-ocean-deep z-10"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-4 py-2 rounded-full glass text-xs font-bold uppercase tracking-[0.4em] text-sunset-coral mb-8 border border-white/10"
                >
                    {t('home.heroTag')}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-serif text-5xl md:text-8xl font-bold text-sand-beige mb-6 leading-[1.1]"
                >
                    Pure Beauty. <br />
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-sand-beige to-tropical-mint">Untouched</span> Spirit.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10 leading-relaxed font-serif italic text-sand-beige/80"
                >
                    {t('home.heroSubtitle')}
                </motion.p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-50">
                    <Link
                        to="/municipalities"
                        className="px-10 py-5 bg-[#FF6B4A] text-white rounded-full font-bold flex items-center space-x-3 hover:bg-[#e05a3d] transition-all shadow-2xl no-underline"
                    >
                        <span>{t('home.ctaSecondary')}</span>
                        <ArrowRight size={20} />
                    </Link>
                    <button
                        onClick={() => setShowFilm(true)}
                        className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-sand-beige rounded-full font-bold flex items-center space-x-3 hover:bg-white/20 transition-all shadow-xl"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                            <Play size={16} fill="currentColor" />
                        </div>
                        <span>Watch the Film</span>
                    </button>
                </div>
            </div>

            {/* Video Modal Overlay */}
            <AnimatePresence>
                {showFilm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 md:p-12"
                    >
                        <button
                            onClick={() => setShowFilm(false)}
                            className="absolute top-8 right-8 text-white hover:text-sunset-coral z-10 p-2"
                        >
                            <X size={40} />
                        </button>
                        <div className="w-full h-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/Oj-SmnmQCeQ?si=5IeUJbxM_VdtmjoM&autoplay=1"
                                title="Timor-Leste Cinematic"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-sand-beige/50 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
