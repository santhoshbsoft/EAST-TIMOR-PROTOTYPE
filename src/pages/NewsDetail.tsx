import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, MapPin, Share2 } from 'lucide-react';
import { newsStories } from '../data/news';

const NewsDetail = () => {
    const { id } = useParams<{ id: string }>();
    const story = newsStories.find(s => s.id === id);

    if (!story) return <div className="pt-40 text-center">Story not found</div>;

    return (
        <div className="min-h-screen bg-ocean-deep text-white pb-20">
            {/* Header / Hero */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            to="/news"
                            className="inline-flex items-center space-x-2 text-sunset-coral font-bold uppercase tracking-widest text-xs mb-8 hover:-translate-x-2 transition-transform"
                        >
                            <ArrowLeft size={16} />
                            <span>Back to Stories</span>
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="px-4 py-1 bg-sunset-coral rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 inline-block">
                                {story.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-sand-beige leading-tight">
                                {story.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-8 text-sm opacity-60">
                                <div className="flex items-center">
                                    <Calendar size={18} className="mr-2 text-sunset-coral" />
                                    {story.date}
                                </div>
                                <div className="flex items-center">
                                    <User size={18} className="mr-2 text-sunset-coral" />
                                    {story.author}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="max-w-4xl mx-auto px-6 mt-16 lg:flex lg:gap-16">
                <div className="lg:w-3/4">
                    <div className="prose prose-invert prose-lg max-w-none">
                        {story.content.map((paragraph, idx) => (
                            <p key={idx} className="text-white/70 leading-relaxed mb-8 text-lg font-light italic">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {story.gallery && (
                        <div className="grid grid-cols-2 gap-4 my-12">
                            {story.gallery.map((img, i) => (
                                <div key={i} className="rounded-3xl overflow-hidden aspect-square">
                                    <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Meta Info */}
                    <div className="border-t border-white/10 pt-12 mt-12 flex flex-wrap gap-4">
                        <button className="flex items-center space-x-2 px-6 py-3 glass rounded-xl text-sm font-bold hover:bg-white/10 transition-colors">
                            <Share2 size={18} className="text-sunset-coral" />
                            <span>Share this Narrative</span>
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/4 mt-16 lg:mt-0">
                    <div className="sticky top-32 space-y-12">
                        {story.relatedMunicipalities && (
                            <div className="glass p-8 rounded-3xl border border-white/5">
                                <h3 className="flex items-center space-x-2 text-lg font-serif font-bold mb-6 italic">
                                    <MapPin size={20} className="text-sunset-coral" />
                                    <span>Municipalities</span>
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {story.relatedMunicipalities.map(m => (
                                        <Link
                                            key={m}
                                            to={`/municipalities#${m}`}
                                            className="text-sm font-bold opacity-60 hover:opacity-100 hover:text-sunset-coral transition-all uppercase tracking-widest"
                                        >
                                            {m}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="glass p-8 rounded-3xl border border-white/5">
                            <h3 className="text-lg font-serif font-bold mb-4 italic text-sand-beige">Adventure Guide</h3>
                            <p className="text-sm opacity-60 leading-relaxed mb-6">
                                Want to experience this first-hand? Connect with our certified partners to plan your journey.
                            </p>
                            <Link
                                to="/partners"
                                className="block text-center py-3 bg-sunset-coral text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                            >
                                Find Partners
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
