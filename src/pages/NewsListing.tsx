import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsStories } from '../data/news';

const NewsListing = () => {
    const [activeFilter, setActiveFilter] = useState<'All' | 'Cultural' | 'Investment' | 'Industry' | 'Conservation'>('All');

    const filteredStories = activeFilter === 'All'
        ? newsStories
        : newsStories.filter(s => s.category === activeFilter);

    const categories = ['All', 'Cultural', 'Investment', 'Industry', 'Conservation'];

    return (
        <div className="min-h-screen bg-ocean-deep text-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h4 className="text-sunset-coral font-bold tracking-[0.3em] uppercase mb-4 text-xs">Stories from the Frontier</h4>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-sand-beige italic">News & Stories</h1>
                        <p className="text-xl opacity-70 leading-relaxed italic">
                            Deep dives into the culture, development, and undiscovered beauty of Timor-Leste.
                        </p>
                    </motion.div>
                </header>

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center gap-4 mb-12">
                    <div className="flex items-center space-x-2 text-white/40 mr-4">
                        <Filter size={18} />
                        <span className="text-sm font-bold uppercase tracking-widest">Filter:</span>
                    </div>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat as any)}
                            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${activeFilter === cat
                                ? 'bg-sunset-coral border-sunset-coral text-white'
                                : 'border-white/10 hover:bg-white/5 opacity-60 hover:opacity-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredStories.map((story, i) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group glass-dark rounded-[40px] overflow-hidden border border-white/5 hover:border-sunset-coral/30 transition-all duration-500 flex flex-col h-full"
                        >
                            <Link to={`/news/${story.id}`} className="aspect-[16/10] overflow-hidden relative block">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200';
                                    }}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                                        {story.category}
                                    </span>
                                </div>
                            </Link>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex items-center text-white/40 text-[10px] font-bold uppercase tracking-wider mb-4">
                                    <Calendar size={12} className="mr-2" />
                                    {story.date}
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-sunset-coral transition-colors leading-tight">
                                    {story.title}
                                </h3>
                                <p className="text-sm opacity-60 leading-relaxed mb-8 line-clamp-3">
                                    {story.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Link
                                        to={`/news/${story.id}`}
                                        className="inline-flex items-center space-x-2 text-sm font-bold text-sunset-coral group-hover:translate-x-2 transition-transform"
                                    >
                                        <span>Read Detailed Story</span>
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsListing;
