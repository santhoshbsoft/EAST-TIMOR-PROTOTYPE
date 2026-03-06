import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Trophy, Sparkles } from 'lucide-react';
import NewsListing from './NewsListing';
import EventsCalendar from './EventsCalendar';

const NewsEvents = () => {
    const [activeSection, setActiveSection] = useState('news');

    return (
        <div className="min-h-screen bg-ocean-deep text-white pt-32 pb-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h4 className="text-sunset-coral font-bold tracking-[0.3em] uppercase mb-4 text-xs">Stay Connected</h4>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-sand-beige">
                        News & Stories
                    </h1>

                    {/* Switcher */}
                    <div className="inline-flex p-2 bg-white/5 rounded-full border border-white/10">
                        <button
                            onClick={() => setActiveSection('news')}
                            className={`flex items-center space-x-2 px-8 py-3 rounded-full font-bold transition-all ${activeSection === 'news' ? 'bg-sunset-coral text-white' : 'hover:bg-white/5'
                                }`}
                        >
                            <Newspaper size={18} />
                            <span>Latest Stories</span>
                        </button>
                        <button
                            onClick={() => setActiveSection('events')}
                            className={`flex items-center space-x-2 px-8 py-3 rounded-full font-bold transition-all ${activeSection === 'events' ? 'bg-sunset-coral text-white' : 'hover:bg-white/5'
                                }`}
                        >
                            <Sparkles size={18} />
                            <span>Events & Festivals</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeSection === 'news' ? (
                            <div className="space-y-12">
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="p-3 bg-sunset-coral/20 rounded-xl text-sunset-coral">
                                        <Trophy size={24} />
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-sand-beige italic">Featured Narrative</h2>
                                </div>
                                <NewsListing />
                            </div>
                        ) : (
                            <div className="max-w-5xl mx-auto text-center">
                                <h2 className="text-3xl font-serif font-bold text-sand-beige mb-12">Annual Event Calendar</h2>
                                <EventsCalendar />
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NewsEvents;
